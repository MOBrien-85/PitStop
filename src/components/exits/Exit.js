import { useNavigate } from "react-router-dom"
import "./Exits.css"

// this is where i need to do my math function.
// that way it is directly built into the Exit card.
// this would consist of adding up EVERY rating for EVERY part of the review form. all 3...but any others i may add too
// from EVERY user and then dividing by the amount of ratings total. 
// NO! NO! WAIT! easier!
// --------okay, so i should start by doing this for each user's review. 
// which is a part of the display in their profile. but functionally then i can take the average of each user's rating for each 
// exit and then average those scores on this page for the OVER OVERALL rating for each exit.



// ***06.22 -- add a button to the exit that routes the user to a list of all reviews, by all users, for that exit
// of course, they will display exactly how user reviews display on the user profile. the little boxes with the colored button
// each will be clickable to see the full review.

export const Exit = ({ id, name, city, state }) => {
    const navigate = useNavigate()

    return <section className="exit">
    <div>
        {name}
    </div>
    <div>{city}, {state}</div>
    {/* add button here to see all reviews for the exit  *******************LOOK HERE!!!****************************** */} 
    <button onClick={
            () => {
                navigate(`/reviewForm/${id}`)
            }
        }>...Write a Review</button>
    </section>
}