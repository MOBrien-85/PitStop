/* this module will fetch the interstates.
in looking over Roadnow.com -- the site that im using for builiding the database
they have a nav bar drop down menu for interstates. 
for now, not having much else to show re: interstates
ill just make it a link to a page that has a list of
interstates. they display each with their logo and the name written out
along with the beginning and ending of the highway itself. 
each you're able to click and it takes you to a full information page. 
i don't know if i'll have that for now. it's not essential.
for MVP maybe it can just take you to a page displaying all exits in their thumbnail view
 */
import { Interstate } from "./Interstate"
import { useEffect, useState } from "react"
import "./Interstates.css"

export const InterstatesList = () => {
    const [interstates, setInterstates] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/interstates`)
            .then(response => response.json())
            .then((interstateArray) => {
                setInterstates(interstateArray)
            })          
        },
        []
    )
// i need a clickevent here for each interstate. if the user clicks on say I-65 the function knows
// to route the user to the I-65 "interstatePage"
    return <article className="interstates">
        {
            interstates.map(interstate => <Interstate key={`interstate--${interstate.id}`}
                id={interstate.id}
                name={interstate.name} />)
                // potentially add beginning and ending keys for each interstate
        }        
    </article>
}