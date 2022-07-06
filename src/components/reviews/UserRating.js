import { useNavigate, Link } from "react-router-dom"
import "./Reviews.css"

// fetch exitRating embedded...expanded? with the userRating to ensure it's theirs
// write a function that grabs each rating: food, bathroom, gas and pushes the numbers to an array
// write a function that adds those numbers together and divide by array.length
// the resulting number will equal that variable which will then be cross-referenced to the colors
// using a function - if the average number equals ___ then it is this color -- if not check the next color and so on


export const UserRating = ({ ratingObject, currentUser, getUserReviews, id }) => {
    
    const navigate = useNavigate()





    const localPitStopUser = localStorage.getItem("pitStop_user")
    const pitStopUserObject = JSON.parse(localPitStopUser)

   


    const deleteButton = () => {
        if (ratingObject.userId === currentUser.id) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/exitRatings/${ratingObject.id}?_expand=user`, {
                    method: "DELETE"
                })
                    .then(() => {
                        getUserReviews()
                    })
            }} className="rating_delete">Delete</button>
        }
        else {
            return ""
        }
    }

// this function finds the average rating of the review ratings

    const findAverageRating = (ratingObject) => {
        const userRatings = [ratingObject.foodRating, ratingObject.gasStationRating, ratingObject.bathroomRating]

        let sum = 0;

        for (const rating of userRatings) {
            sum += rating;
        }

        let avg = sum / userRatings.length;



        return avg;
    }

    // this function takes the previous function result and matches it to a range of numbers, which determines a designated color 

    const ratingColor = () => {

        let average = parseFloat(findAverageRating(ratingObject)).toFixed(1)

        if (average >= 0.0 && average <= 1.5) {
            return <span className="overall_rating" style={{ backgroundImage: "linear-gradient(to right, #ff0000, #ff9999)" }}></span>
            // document.getElementsByClassName("circle").style.backgroundColor = '#ff0000';
        }
        else if (average >= 1.6 && average <= 2.5) {
            return <span className="overall_rating" style={{ backgroundImage: "linear-gradient(to right, #ff8c00, #ffbf00)" }}></span>
            // document.getElementsByClassName("circle").style.backgroundColor = '#ff9900';
        }
        else if (average >= 2.6 && average <= 3.5) {
            return <span className="overall_rating" style={{ backgroundImage: "linear-gradient(to right, #ffff00, #fff44f)" }}></span>
            // document.getElementsByClassName("circle").style.backgroundColor = '#ffee00';
        }
        else if (average >= 3.6 && average <= 5.0) {
            return <span className="overall_rating" style={{ backgroundImage: "linear-gradient(to right, #00ff00, #e8f48c)" }}></span>
            // document.getElementsByClassName("circle").style.backgroundColor = '#00ff00';
        }
    }



    return <><section className="rating" key={`userRating--${ratingObject.id}`}>
        <header>
            {/* turn the interstate name into a link back to the interstate page for that interstate */}
            
            <div className="interstate_name">{ratingObject.interstate.name}</div>
            {/* turn the exit name into a link back to "ALL REVIEWS" for that exit */}
            <div className="exit_name">{ratingObject.exit.name}</div>

            <div>
                {
                    ratingColor()
                }
            </div>

        </header>
        <div className="comments_display">{ratingObject.comments}</div>
        <footer className="rating_footer">
            {/* this is where isUser matters.delete is already dependent on if it's the current user. otherwise it returns an empty string*/}
            {
                ratingObject.userId === currentUser.id
                    ? <button className="rating_edit" onClick={() => { navigate(`/reviews/${ratingObject.id}/edit`) }}>Edit</button>
                    : ""
            }
            {
                deleteButton()
            }

            <button className="see_review" onClick={() => { navigate(`/fullReviewDisplay/${ratingObject.id}`) }}>...more</button>
            
           
        </footer>

    </section>
    </>
}













