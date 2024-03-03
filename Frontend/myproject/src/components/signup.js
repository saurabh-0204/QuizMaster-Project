import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const init = {
        uname: { value: "", valid: false, touched: false, error: "" },
        pwd: { value: "", valid: false, touched: false, error: "" },
        fname: { value: "", valid: false, touched: false, error: "" },
        lname: { value: "", valid: false, touched: false, error: "" },
        bdate:{ value: "", valid: false, touched: false, error: "" },
        education: { value: "", valid: false, touched: false, error: "" },
        contact: { value: "", valid: false, touched: false, error: "" },
        email: { value: "", valid: false, touched: false, error: "" },
        subscription: { value:0, valid: true, touched: false, error: "" }
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "update":
                const { key, value, touched, valid, error } = action.data;
                return { ...state, [key]: { value, touched, valid, error } };
            case "reset":
                return init;
            default:
                return state;
        }
    };

    const [students, dispatch] = useReducer(reducer, init);
    const [insertMsg, setInsertMsg] = useState("");
    const navigate = useNavigate();

    const validateData = (key, val) => {
        let valid = true;
        let error = "";
        switch (key) {
               case "uname":
                  var pattern = /^[A-Z]{1,}[a-z]{1,}@[0-9]{1,}$/;
                  if (!pattern.test(val)) {
                    valid = false;
                    error = "Invalid uname";
                  }
                  break;
          
                case "pwd":
                  var patt= /^[A-Z]{1}[a-z]{1,}[@][0-9]{1,}$/;
                  if (!patt.test(val)) {
                    valid = false;
                    error = "Invalid pwd";
                  }
                  break;

                  case "firstName":
                  case "lastName":
                      if (!/^[a-zA-Z]*$/.test(val)) {
                        error = "Name must contain only letters.";
                      }
                      break;

               
                 case "contact":
                      if (!/^\d{10}$/.test(val)) {
                        error = "Contact must contain only digits.";
                      } else if (val.length > 10) {
                        error = "Contact must not exceed 10 digits.";
                      }
                      break;
                

                 case "email":
                   if (!/\S+@\S+\.\S+/.test(val)) {
                     error = "Invalid email address.";
                   }
                   break;

                default:
                break;
        }

        return { valid: valid, error: error };
    };

  
    const handleChange = (key, value) => {
        const { valid, error } = validateData(key, value);
        dispatch({ type: "update", data: { key, value, touched: true, valid, error } });
    };

    const submitData = (e) => {
        e.preventDefault();
        const isFormValid = Object.values(students).every((field) => field.valid);
    
        if (isFormValid) {
            console.log(JSON.stringify(students));
            const reqOptions = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    uname: students.uname.value,
                    pwd: students.pwd.value,
                    fname: students.fname.value,
                    lname: students.lname.value,
                    bdate: students.bdate.value,
                    education: students.education.value,
                    contact: students.contact.value,
                    email: students.email.value,
                    subscription: students.subscription.value
                    
                }),
            };
    
            fetch("http://localhost:8080/studentRegistration", reqOptions)
                .then((res) => {
                    if (res.status === 200) {
                        // Registration successful
                        setInsertMsg("Registration successful");
                        alert("Registration successfull");
                       
                        navigate("/login");
                    } else if (res.status === 400) {
                        // Bad request, handle validation errors
                        return res.json().then((data) => {
                            // Handle validation errors from the server
                            console.error("Validation error:", data);
                            setInsertMsg("Validation error. Please check your input.");
                        });
                    } else {
                        // Other HTTP errors
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                })
                .catch((error) => {
                    // Handle network errors and other exceptions here
                    console.error("There was a problem with the fetch operation:", error.message);
                    setInsertMsg("Registration failed. Please try again later.");
                });
        } else {
            console.log("Form has validation errors. Please fix them before submitting.");
        }
    };
    
    
    return (
        <div className="container">

            <div className="row">
                <div className="col">
                </div>

                <div className="col">
                    <h2> Student SignUp </h2>
                    <form>
                    <div className="mt-3 mb-3">
                            <label htmlFor="uname" className="form-label"> Username : </label>
                            <input type="text" id="uname" name="uname" className="form-control"
                                value={students.uname.value}
                                onChange={(e) => { handleChange("uname", e.target.value) }}
                                onBlur={(e) => { handleChange("uname", e.target.value) }} />
                        </div>
                        <div style={{ color: "Red", display: students.fname.touched && !students.uname.valid ? "block" : "none" }}>
                            {students.uname.error}
                        </div>

                        <div className="mt-3 mb-3">
                            <label htmlFor="pwd" className="form-label"> Password : </label>
                            <input type="password" id="pwd" name="pwd" className="form-control"
                                value={students.pwd.value}
                                onChange={(e) => { handleChange("pwd", e.target.value) }}
                                onBlur={(e) => { handleChange("pwd", e.target.value) }} />
                        </div>
                        <div style={{ color: "Red", display: students.pwd.touched && !students.pwd.valid ? "block" : "none" }}>
                            {students.pwd.error}
                        </div>
                        <div className="mt-3 mb-3">
                            <label htmlFor="fname" className="form-label"> First Name </label>
                            <input type="text" id="fname" name="fname" className="form-control"
                                value={students.fname.value}
                                onChange={(e) => { handleChange("fname", e.target.value) }}
                                onBlur={(e) => { handleChange("fname", e.target.value) }} />
                        </div>
                        <div style={{ color: "Red", display: students.fname.touched && !students.fname.valid ? "block" : "none" }}>
                            {students.fname.error}
                        </div>

                        <div className="mt-3 mb-3">
                            <label htmlFor="lname" className="form-label"> Last Name </label>
                            <input type="text" id="lname" name="lname" className="form-control"
                                value={students.lname.value}
                                onChange={(e) =>  { handleChange("lname", e.target.value) }}
                                onBlur={(e) => { handleChange("lname", e.target.value) }} />
                        </div>
                        <div style={{ color: "Red", display: students.lname.touched && !students.lname.valid ? "block" : "none" }}>
                            {students.lname.error}
                        </div>
                        <div className="mt-3 mb-3">
                             <label htmlFor="bdate" className="form-label"> Birthdate </label>
                             <input type="date" id="bdate" name="bdate" className="form-control"
                                    value={students.bdate.value}
                                    onChange={(e) => { handleChange("bdate", e.target.value) }}
                                    onBlur={(e) => { handleChange("bdate", e.target.value) }} />
                        </div>

                       {/* <div style={{ color: "Red", display: students.bdate.touched && !students.bdate.valid ? "block" : "none" }}>
                            {students.bdate.error}
                       </div>*/}
                        <div className="mt-3 mb-3">
                            <label htmlFor="education" className="form-label"> Education </label>
                            <input type="text" id="education" name="education" className="form-control"
                                value={students.education.value}
                                onChange={(e) => { handleChange("education", e.target.value) }}
                                onBlur={(e) => { handleChange("education", e.target.value) }} />
                        </div>
                       {/* <div style={{ color: "Red", display: students.education.touched && !students.education.valid ? "block" : "none" }}>
                            {students.education.error}
                       </div>*/}

                           <div className="mt-3 mb-3">
                           <label htmlFor="contact" className="form-label"> Contact </label>
                                <input 
                                 type="tel" 
                                 id="contact" 
                                 name="contact" 
                                 className="form-control" 
                                 value={students.contact.value}
                                 onChange={(e) => { handleChange("contact", e.target.value) }}
                                 onBlur={(e) => { handleChange("contact", e.target.value) }} 
                                 />
                             </div>
                            <div style={{ color: "Red", display: students.contact.touched && !students.contact.valid ? "block" : "none" }}>
    {students.contact.error}
                            </div>
                        

                        <div className="mt-3 mb-3">
                            <label htmlFor="email" className="form-label"> Email </label>
                            <input type="email" id="email" name="email" className="form-control"
                                value={students.email.value}
                                onChange={(e) => { handleChange("email", e.target.value) }}
                                onBlur={(e) => { handleChange("email", e.target.value) }} />
                        </div>
                        <div style={{ color: "Red", display: students.email.touched && !students.email.valid ? "block" : "none" }}>
                            {students.email.error}
                        </div>
                        
                  <div className="mb-3 form-check">
                  <input
                   type="checkbox"
                   id="subscription"
                   name="subscription"
                   value={students.subscription.value}
                   className="form-check-input"
            
                   onChange={(e) => { handleChange("subscription", e.target.checked?"1":"0") }}
                  />
                 <label className="form-check-label" htmlFor="subscription">Subscribe to our service</label>
                 </div>
                  
                

                        <div>
                            <input type="button" className="btn btn-primary btn-block"  value="register"onClick={(e) => { submitData(e) }} />
                            &nbsp;&nbsp;
                            <input type="reset" className="btn btn-primary btn-block" value="Clear" onClick={() => { dispatch({ type: "reset" }); }} />
                        </div>
                    </form>
                </div>

                <div className="col">
                </div>
            </div>

            {/* <p> {JSON.stringify(students)}</p> */}
            <h1> {insertMsg} </h1>
        </div>
    );
}




