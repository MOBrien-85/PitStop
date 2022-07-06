import { useNavigate } from "react-router-dom"
import "./Exits.css"

// ***06.22 -- add a button to the exit that routes the user to a list of all reviews, by all users, for that exit
// of course, they will display exactly how user reviews display on the user profile. the little boxes with the colored button
// each will be clickable to see the full review.

export const Exit = ({ id, name, city, state, ratingObject }) => {
    const navigate = useNavigate()


/* 07.03
rethinking this. so let's say i start by doing the same thing as before with each exit. it's what i already have below already commented out
- but then change it some. i want all those numbers, the total average number, from each exit rating, to be put into an array
--THEN a new function that adds up all the results, for a specific exit, together. divides by length of that array, and now i have the total average.
*/





    // **********06.30 putting this whole thing aside for now. i need to rethink the algorthm anyway, it's slight;y different.
    // somehow i need to take the average of each rating, then add them together - put them in an array so i can divide by length again, 
    // then divide by however many there are of those. 

    // porting over the same fuctions from userrating - it should work the same if i've mapped right and brought over the correct props


    // const findAverageRating = (ratingObject) => {
    //     const userRatings = [ratingObject.foodRating, ratingObject.gasStationRating, ratingObject.bathroomRating]

    //     let sum = 0;

    //     for (const rating of userRatings) {
    //         sum += rating;
    //     }

    //     let avg = [sum / userRatings.length]


    //     return avg;
    // }

    // const totalExitAverage = () => {
    //     let exitAverage = [parseFloat(findAverageRating(ratingObject)).toFixed(1)]

    //     return exitAverage
    // }

    // const ratingColor = () => {

    //     let average = parseFloat(totalExitAverage(ratingObject)).toFixed(1)

    //     if (average >= 0.0 && average <= 1.5) {
    //         return <span className="overall_rating" style={{ backgroundImage: "linear-gradient(to right, #ff0000, #ff9999)" }}></span>
    //         // document.getElementsByClassName("circle").style.backgroundColor = '#ff0000';
    //     }
    //     else if (average >= 1.6 && average <= 2.5) {
    //         return <span className="overall_rating" style={{ backgroundImage: "linear-gradient(to right, #ff8c00, #ffbf00)" }}></span>
    //         // document.getElementsByClassName("circle").style.backgroundColor = '#ff9900';
    //     }
    //     else if (average >= 2.6 && average <= 3.5) {
    //         return <span className="overall_rating" style={{ backgroundImage: "linear-gradient(to right, #ffff00, #fff44f)" }}></span>
    //         // document.getElementsByClassName("circle").style.backgroundColor = '#ffee00';
    //     }
    //     else if (average >= 3.6 && average <= 5.0) {
    //         return <span className="overall_rating" style={{ backgroundImage: "linear-gradient(to right, #00ff00, #e8f48c)" }}></span>
    //         // document.getElementsByClassName("circle").style.backgroundColor = '#00ff00';
    //     }
    // }


    return <section className="exit">
        <div>
            {name}
        </div>
        <div>{city}, {state}</div>
        {/* code to render the color function goes here */}
        {/* <div>
            {
                ratingColor()
            }
        </div> */}
        <button className="write_review" onClick={
            () => {
                navigate(`/reviewForm/${id}`)
            }
        }>Write Review</button>
        <button className="all_reviews" onClick={
            () => {
                navigate(`/exitReviews/${id}`)
            }
        }>All Reviews</button>
    </section>
}