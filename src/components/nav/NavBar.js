import { Link, useNavigate } from "react-router-dom"
import { Header } from "./Header"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    const localPitStopUser = localStorage.getItem("pitStop_user")
    const pitStopUserObject = JSON.parse(localPitStopUser)


   

    return (
        <ul className="navbar">
            <li className="navbar__item active"> <Header /></li>
            <li className="navbar__item active">
                <Link className="navbar__link" to={`/profile/${pitStopUserObject?.id}`}>Profile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/interstates">Interstates</Link>
            </li>
                        {
                localStorage.getItem("pitStop_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("pitStop_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}