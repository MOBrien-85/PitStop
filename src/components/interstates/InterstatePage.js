/* this module will generate the unique page for each interstate
 */

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Exit } from "../exits/Exit"



// export interstatePage
export const InterstatePage = () => {
    const {interstateId} = useParams()
    const [interstate, displayInterstate] = useState({})
    



// useEffect that designates the page for a single interstate
useEffect(
    () => {
        fetch(`http://localhost:8088/interstates/${interstateId}?_embed=exits`)
            .then(response => response.json())
            .then((data) => {
                const singleInterstate= data
                displayInterstate(singleInterstate)
            })
    },
    [interstateId]
)




// find the assigned exits for each interstate

// if exit.interstateId === interstate.id
// return Exit from exit. with a className to style



// a function that adds a '...more' button to the exit box. bottom right.
// this is a click event that routes you out to that exit's specific page.



// JSX below

return <section className="interstate">
    <header className="interstate_header">{interstate.name}</header>
        <article className="exits">
            {
                interstate.exits.map(exit => <Exit key={`exit--${exit.id}`}
                    id={exit.id} 
                    name={exit.name} 
                    city={exit.city} 
                    state={exit.state} />)
            }
        </article>

    </section>


    }