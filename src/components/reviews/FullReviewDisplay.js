// display all details of a review here.
// like google or yelp reviews i think it's best to show:

// --------------review display-------------------
// user name (eventually add in a counter for how many reviews theyve written like google has?)
// the user's overall score for this exit (stretch: include the colored circle)
// the user's comments - the written review
// STRETCH: a helpful or not tag?
// ------------------------------------------------
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Reviews.css"

export const FullReviewDisplay = (ratingObject) => {
    const { exitId } = useParams()
    const [review, fullReviewDisplay] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/exitRatings/${exitId}?_expand=user`)
            .then(response => response.json())
            .then((reviewdisplay) => {
                fullReviewDisplay(reviewdisplay)
            })          
        },
        [exitId]
    )

    return <><section className="review_display">
    <header className="review_header">Review by: {review?.user?.name}</header>

    <hr />
    
    <div className="review_comments">{review.comments}</div>

    <section className="review_scores">
    <div>Food Score: {review.foodRating}</div>
    <div>Gas Station Score: {review.gasStationRating}</div>
    <div>Bathroom Score: {review.bathroomRating}</div>
    </section>
    <hr />
    <footer className="review_footer">
        {
            ratingObject.rvParking === true 
            ? <div>R/V Parking? Yes</div>
            : <div>R/V Parking? No</div>
        }
    </footer>
</section>
</>



}
