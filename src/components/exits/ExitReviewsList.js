// fetch all reviews for the specific exit 
// this is routed from interstatepage.js
// user sees all reviews in box form for that exit
// the user then clicks on that box to see the full review display

import { useState, useEffect } from "react"
import { UserRating } from "../reviews/UserRating"
import { useNavigate, useParams } from "react-router-dom"


export const ExitReviewsList = () => {
    const { exitId } = useParams()
    const [exitReviews, setExitReviews] = useState([])

    const localPitStopUser = localStorage.getItem("pitStop_user")
    const pitStopUserObject = JSON.parse(localPitStopUser)


    


    useEffect(
        () => {
            fetch(`http://localhost:8088/exitRatings?exitId=${exitId}&_expand=exit&_expand=interstate`)
            .then(response => response.json())
            .then((interstateArray) => {
                setExitReviews(interstateArray)
            })          
        },
        []
    )





    return <>
    {/* grab the exit name here and display it up top. just like in the profile view */}
   
    <article className="user_ratings">
            {
                exitReviews.map(
                    (rating) => <UserRating 
                    isUser={pitStopUserObject.id}
                    key={`rating--${rating.id}`}
                    ratingObject={rating} 
                    currentUser={pitStopUserObject}
                    
                    />)
            }
        </article>
    </>
}