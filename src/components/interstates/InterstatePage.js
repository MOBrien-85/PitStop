/* this module will generate the unique page for each interstate
 */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Exit } from "../exits/Exit"
import "./Interstates.css"

// export interstatePage
export const InterstatePage = () => {
    const {interstateId} = useParams()
    const {exitId} = useParams()
    const [interstate, displayInterstate] = useState({exits: []})
    // set state of ratings here
    // const [ratings, setRatings] = useState({exitRatings: []})

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

// fetch all ratings and specify by the exitId so that when i'm mapping the ratings, i'm matching the exit id

// const getAllReviewsForExit = () => {
//     fetch(`http://localhost:8088/exitRatings/?exitId=${exitId}`)
//         .then(response => response.json())
//         .then((ratingArray) => {
//             setRatings(ratingArray)
//         })
// }




// useEffect that filters down exits by state
// access the displayed array of exits...use a select drop down featuring all states. all available? 
// yes. i don't think it should be hardcoded in...all 50 states. eventually all required states would be there...
// as long as the syntax is right, it will just map over the exits and find the exit.state value to display...and if the chosen
// value equals that key value...display exits.



// make a different module that produces just a div of the exit 






// JSX below
return <>
<section className="interstate_page">
    <header className="interstate_header">{interstate.name}</header>
        <article className="exits">
            {/* might need to break each piece into a div to then style appropriately */}
            {/* i need to map over the ratings here  */}
            {/* {
                ratings.exitRatings.map(
                    (rating) => <Exit
                        key={`exit--${rating.id}`}
                        id={rating.id}
                        ratingObject={rating}
                        getAllReviewsForExit={getAllReviewsForExit}
                    />
                )
            } */}
            {
                interstate.exits.map(exit => <Exit 
                    key={`exit--${exit.id}`}
                    id={exit.id} 
                    name={exit.name} 
                    city={exit.city} 
                    state={exit.state} />)
            }
        </article>

    </section>
</>


    }