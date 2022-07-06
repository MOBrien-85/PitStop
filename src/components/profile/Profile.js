import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { UserRating } from "../reviews/UserRating"
import { getCurrentUserFetch, getUserReviewsFetch } from "../ApiManager"
import './Profile.css'
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

    const getUserReviews = () => {
        fetch(`http://localhost:8088/exitRatings?userId=${pitStopUserObject.id}&_expand=exit&_expand=interstate`)
            .then(response => response.json())
            .then((ratingArray) => {
                setRatings(ratingArray)
            })
    }

    return <>
    {/* potentially a div here for a profile picture */}
    <section className="user_profile">
        <h2 className="user_name">{currentUser.name}</h2>
        <p className="user_location">{currentUser.location}</p>
        <hr />
        <p className="user_email">Email: {currentUser.email}</p>
        <p className="user_destination">Favorite Destination: {currentUser.favoriteDestination}</p>

        <button className="update_profile" onClick={
            () => {
                navigate(`/profile/${currentUser.id}/update`)
            }
        }>Update</button>
    </section>

{/* <hr className="divider"/> */}


        <h2 className="userReviews_header">{currentUser.name}'s Reviews</h2>

        <article className="user_ratings">
            {
                ratings.map(
                    (rating) => <UserRating
                        isUser={pitStopUserObject.id}
                        key={`rating--${rating.id}`}
                        ratingObject={rating}
                        currentUser={currentUser}
                        getUserReviews={getUserReviews}
                    />
                )
            }
        </article>
    </>

}
