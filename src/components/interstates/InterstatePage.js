/* this module will generate the unique page for each interstate
 */

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Exit } from "../exits/Exit"
import "./Interstates.css"



// export interstatePage
export const InterstatePage = () => {
    const {interstateId} = useParams()
    const [interstate, displayInterstate] = useState({exits: []})
    



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



// here is where i will, like for profile display of average scores, do the same formula for the overall rating for each exit
// using the overall rating from each user for that exit...

// JSX below

return <>
<section className="interstate_page">
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
</>


    }