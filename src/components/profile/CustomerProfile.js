import { useEffect, useState } from "react"
import "./Customers.css"

/* this page will fetch each user depending on who is signed in
ref the sketch board and display the user's reviews below
in thumbnail form - similar to the exit thumbnails but it will be specific to the user's review - re: the color dot
and on the bottom of the box there will be edit and delete btns
*/

export const CustomerProfile = () => {
    // TODO: Provide initial state for profile
    const [profile, updateProfile] = useState({
        Name: "",
        email: "",
        userId: 0
    })

    const localPitStopUser = localStorage.getItem("pitStop_user")
    const pitStopUserObject = JSON.parse(localPitStopUser)

    const [feedback, setFeedback] = useState("")


    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])

    // TODO: Get employee profile info from API and update state
    useEffect(() => {
        fetch(`http://localhost:8088/users?userId=${pitStopUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                const userObject = data[0]
                updateProfile(userObject)
            })
    },
        []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
        fetch(`http://localhost:8088/users/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
            .then(response => response.json())
            .then(() => {
                setFeedback("User profile successfully saved")
            })
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