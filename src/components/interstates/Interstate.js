import { Link } from "react-router-dom"
import "./Interstates.css"
import shield from'./interstateshield.jpg';

export const Interstate = ({ id, name }) => {
    return <section className="interstate">
        <figure>
            {/* <img src={shield}/> */}
            <figcaption>
                <Link to={`/interstates/${id}`}>{name}</Link>
            </figcaption>
        </figure>
    </section>
}