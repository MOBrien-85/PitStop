import { Link } from "react-router-dom"

export const Exit = ({ id, name, city, state }) => {
    return <section className="exit">
    <div>
        Name: {name}
    </div>
    <div>City: {city}</div>
    <div>State: {state}</div>
    <button>
        <Link to={`/exits/${id}`}>...more</Link>
    </button>
</section>
}