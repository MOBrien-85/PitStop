import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const ReviewEdit = () => {
    const [review, editReview] = useState({
        foodRating: 0,
        gasStationRating: 0,
        bathroomRating: 0,
        comments: "",
        rvParking: false
    })
    const { exitRatingId } = useParams()
    const navigate = useNavigate()

    const localPitStopUser = localStorage.getItem("pitStop_user")
    const pitStopUserObject = JSON.parse(localPitStopUser)

    useEffect(() => {
        fetch(`http://localhost:8088/exitRatings/${exitRatingId}`)
            .then(response => response.json())
            .then((data) => {
                editReview(data)
            })
    }, [exitRatingId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/exitRatings/${exitRatingId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/profile/${pitStopUserObject?.id}`)
            })
    }


    return (<>
        <form className="reviewForm">
            {/* i need to grab the names of the specific interstate and exit that are being reviewed */}
            {/* <h2 className="interstate_name">{interstate.name}</h2> */}
            {/* <h2 className="exit_name">{exit.name}</h2> */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="foodRating">Food Rating:</label>
                    <input
                        required autoFocus
                        type="number"
                        min={0.0}
                        max={5.0}
                        step={0.5}
                        className="form-control"
                        value={review.foodRating}
                        onChange={
                            (evt) => {
                                const copy = { ...review }
                                copy.foodRating = parseFloat(evt.target.value, 1)
                                editReview(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gasStationRating">Gas Station Rating:</label>
                    <input
                        required autoFocus
                        type="number"
                        min={0.0}
                        max={5.0}
                        step={0.5}
                        className="form-control"
                        value={review.gasStationRating}
                        onChange={
                            (evt) => {
                                const copy = { ...review }
                                copy.gasStationRating = parseFloat(evt.target.value, 1)
                                editReview(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bathroomRating">Bathroom Rating:</label>
                    <input
                        required autoFocus
                        type="number"
                        min={0.0}
                        max={5.0}
                        step={0.5}
                        className="form-control"
                        value={review.bathroomRating}
                        onChange={
                            (evt) => {
                                const copy = { ...review }
                                copy.bathroomRating = parseFloat(evt.target.value, 1)
                                editReview(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Comments:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: "10rem"
                        }}
                        className="form-control"
                        value={review.comments}
                        onChange={
                            (evt) => {
                                const copy = { ...review }
                                copy.comments = evt.target.value
                                editReview(copy)
                            }
                        }>
                    </textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">R/V Parking?:</label>
                    <input type="checkbox"
                        value={review.rvParking}
                        onChange={
                            (evt) => {
                                const copy = {...review}
                                copy.rvParking = evt.target.checked
                                editReview(copy) 
                            }
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="review_save">
                Save
            </button>
        </form>
    </>
    )
}