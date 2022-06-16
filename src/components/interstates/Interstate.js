import { Link } from "react-router-dom"

export const Interstate = ({ id, name }) => {
    return <section className="interstate">
        <div>
            <Link to={`/interstates/${id}`}>{name}</Link>
        </div>
    </section>
}