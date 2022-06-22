import { useNavigate, Link } from "react-router-dom"
import { getUserReviewsFetch } from "../ApiManager"

import "./Reviews.css"

// fetch exitRating embedded...expanded? with the userRating to ensure it's theirs
// write a function that grabs each rating: food, bathroom, gas and pushes the numbers to an array
// write a function that adds those numbers together and divide by array.length
// the resulting number will equal that variable which will then be cross-referenced to the colors
// using a function - if the average number equals ___ then it is this color -- if not check the next color and so on


export const UserRating = ({ ratingObject, currentUser }) => {
    const navigate = useNavigate()

    const deleteButton = () => {
        if (currentUser.id) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/exitRatings/${ratingObject.id}`, {
                    method: "DELETE"
                })
                // .then(() => {
                //     getUserReviewsFetch(pitStopUserObject).then(setRatings)
                // })
            }} className="rating_delete">Delete</button>
        }
        else {
            return ""
        }
    }

    const findAverageRating = (ratingObject) => {
        const userRatings = [ratingObject.foodRating, ratingObject.gasStationRating, ratingObject.bathroomRating]

        let sum = 0;

        for (const rating of userRatings) {
            sum += rating;
        }

        let avg = sum / userRatings.length;

        return avg;
    }
    // const overallRating = findAverageRating();

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


    // // }
    // a function that averages the ratings in the review. then send that average to the API for userRating

    // average goes into function to cross-reference the color key
    // color system =     🔴 = 0 - 1.5  |  🟠 = 1.5 - 2.5  |  🟡 =  2.5 - 3.5  | 🟢 = 3.5 - 5
    // this is how it is until i can find more shades of green for this - I spent 20 minutes and only ever found this one.






    // for (const rating of UserRatings) {
    //     const ratingColor = ratingSystem(rating)
    //     return ratingColor
    // }


    // edit button
    // delete button

    // const deleteButton = () => {
    //     if (currentUser) {
    //         return <button onClick={() => {
    //             fetch(`http://localhost:8088/serviceTickets/${ticketObject.id}`, {
    //                 method: "DELETE"
    //             })
    //                 .then(() => {
    //                     getAllTickets()
    //                 })
    //         }} className="ticket_delete">Delete</button>
    //     }
    //     else {
    //         return ""
    //     }
    // }


    return <><section className="rating" key={`userRating--${ratingObject.id}`}>
        <header>{ratingObject.interstate.name} | {ratingObject.exit.name}
            <div>
                {
                    parseFloat(findAverageRating(ratingObject)).toFixed(2)
                }
            </div>
        </header>
        <footer className="rating_footer">
            {
                <button className="rating_edit" onClick={
                    () => {
                        navigate(`/reviews/${ratingObject.id}/edit`)
                    }
                }>Edit</button>
            }
            {
                deleteButton()
            }

        </footer>

    </section>
    </>
}













// const { exitRatingId } = useParams()
//     const [review, setReview ] = useState({})

//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/exitRating/${exitRatingId}?_embed=userRating`)
//                 .then(response => response.json())
//                 .then((data) => {
//                     const 
//                 })
//         } 
