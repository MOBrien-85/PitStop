import { useEffect, useState } from "react"
import { getCurrentUserFetch, saveUserProfileFetch } from "../ApiManager"
import { useNavigate, useParams } from "react-router-dom"
import "./Customers.css"

/* this page will fetch each user depending on who is signed in
ref the sketch board and display the user's reviews below
in thumbnail form - similar to the exit thumbnails but it will be specific to the user's review - re: the color dot
and on the bottom of the box there will be edit and delete btns
*/

export const ProfileUpdate = () => {
    const navigate = useNavigate()
    const {userId} = useParams()
    // TODO: Provide initial state for profile
    const [profile, updateProfile] = useState({
        userId: 0,
        Name: "",
        email: "",
    })

    

    const [feedback, setFeedback] = useState("")

    const localPitStopUser = localStorage.getItem("pitStop_user")
    const pitStopUserObject = JSON.parse(localPitStopUser)


    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])

    // TODO: Get employee profile info from API and update state
    useEffect(
        () => {
            getCurrentUserFetch(userId).then(updateProfile)
        },
        []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        return saveUserProfileFetch(profile)
                .then(
                    () => {
                        navigate(`/profile/${pitStopUserObject?.id}`)
                    }
                )

    }

    return (<>
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
            {feedback}
        </div>
        <form className="profile">
            <h2 className="profile__title">Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.name}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.name = evt.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">email:</label>
                    <input type="text"
                        className="form-control"
                        value={profile.email}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.email = evt.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Profile
            </button>
        </form>
    </>
    )
}