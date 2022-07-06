import { Link } from "react-router-dom"
import { InterstateSheild } from './InterstateSheild'
import "./Interstates.css"

export const Interstate = ({ id, name }) => {
    return <section className="interstate">
        <figure className="interstate_sheild">
                <InterstateSheild />
            <figcaption className="I_text" >
                {name}
            </figcaption>
            <div className="link_arrow"><Link to={`/interstates/${id}`}>Go</Link></div>
        </figure>
    </section>
}