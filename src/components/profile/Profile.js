import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { UserRating } from "../reviews/UserRating"
import { getCurrentUserFetch, getUserReviewsFetch } from "../ApiManager"
import "../reviews/Reviews.css"


export const Profile = () => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState({})
    const [ratings, setRatings] = useState([])


    const localPitStopUser = localStorage.getItem("pitStop_user")
    const pitStopUserObject = JSON.parse(localPitStopUser)


    useEffect(
        () => {
            //Get user information in local storage
            getCurrentUserFetch(pitStopUserObject.id).then(setCurrentUser)
            // get all reviews for current user
            getUserReviewsFetch(pitStopUserObject).then(setRatings)
        },
        []
    )

    // *****06.22*****
    // function to find average of overall rating

    

    // const ratingSystem = (avg) => {

    //     if (avg >= 0.0 && avg <= 1.5) {
    //         document.getElementsByClassName("circle").style.backgroundColor = '#ff0000';
    //     }
    //     else if (avg >= 1.6 && avg <= 2.5) {
    //         document.getElementsByClassName("circle").style.backgroundColor = '#ff9900';
    //     }
    //     else if (avg >= 2.6 && avg <= 3.5) {
    //         document.getElementsByClassName("circle").style.backgroundColor = '#ffee00';
    //     }
    //     else if (avg >= 3.6 && avg <= 5.0) {
    //         document.getElementsByClassName("circle").style.backgroundColor = '#00ff00';
    //     }
    // }



    return <>
        <h2>{currentUser.name}'s Profile</h2>
        <p>Name: {currentUser.name}</p>
        <p>Email: {currentUser.email}</p>

        <button onClick={
            () => {
                navigate(`/profile/${currentUser.id}/update`)
            }
        }>Update Profile</button>


        <h2>{currentUser.name}'s Reviews</h2>

        <article className="user_ratings">
            {/* {
                findAverageRating()
            } */}
            {/* {
                ratingSystem(findAverageRating())
            } */}
            {
                ratings.map(
                    (rating) => <UserRating 
                    key={`rating--${rating.id}`}
                    ratingObject={rating} 
                    currentUser={currentUser}
                    />
                )
            }
        </article>
    </>

}
