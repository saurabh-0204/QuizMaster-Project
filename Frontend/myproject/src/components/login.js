import { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { login } from "./slice";

export default function Login() {
  const init = {
    uname: { value: "", touched: false },
    pwd: { value: "", touched: false },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched } = action.data;
        return { ...state, [key]: { value, touched } };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [users, dispatch] = useReducer(reducer, init);
  const [info, setInfo] = useState("");
  const myaction = useDispatch();
  const navigate = useNavigate();
  const reduxAction = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (key, value) => {
    dispatch({ type: "update", data: { key, value, touched: true } });
  };

  const submitData = (e) => {
    e.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        uname: users.uname.value,
        pwd: users.pwd.value,
      }),
    };

    fetch("http://localhost:8080/login", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.role_id) {
          localStorage.setItem("name", JSON.stringify(data));
          if (data.role_id.role_id === 1) {
            navigate("/adminHome");
          } else if (data.role_id.role_id === 2) {
            navigate("/studentHome");
          } else if (data.role_id.role_id === 4) {
            navigate("/expertHome");
          }
          myaction(login());
        } else {
          setInfo("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setInfo("Invalid Credentials. Please try again.");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h1>Login Form</h1>
          <form>
            <div className="mt-3 mb-3">
              <label htmlFor="uname" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="uname"
                name="uname"
                className="form-control"
                value={users.uname.value}
                onChange={(e) => {
                  handleChange("uname", e.target.value);
                }}
                onBlur={(e) => {
                  handleChange("uname", e.target.value);
                }}
              />
            </div>

            <div className="mt-3 mb-3">
              <label htmlFor="pwd" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="pwd"
                  name="pwd"
                  className="form-control"
                  value={users.pwd.value}
                  onChange={(e) => {
                    handleChange("pwd", e.target.value);
                  }}
                  onBlur={(e) => {
                    handleChange("pwd", e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <input
                type="button"
                className="btn btn-primary btn-block"
                value="Login"
                onClick={(e) => {
                  submitData(e);
                }}
              />
              &nbsp;&nbsp;
              <input
                type="reset"
                className="btn btn-primary btn-block"
                value="Clear"
                onClick={() => {
                  dispatch({ type: "reset" });
                }}
              />
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
      {info && <div className="text-danger text-center">{info}</div>}
    </div>
  );
}
