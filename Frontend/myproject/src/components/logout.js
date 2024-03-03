import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "./slice";

export default function Logout() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    localStorage.clear();
    dispatch(logout());
    const mystate = useSelector(state=>state.logged);
    navigate("/login");
}