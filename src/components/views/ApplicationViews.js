import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { InterstatesList } from "../interstates/InterstatesList"
import { InterstatePage } from "../interstates/InterstatePage"
import { ReviewForm } from "../reviews/ReviewForm"
import { ProfileUpdate } from "../profile/ProfileUpdate"
import { UserRating } from "../reviews/UserRating"
import { ReviewEdit } from "../reviews/ReviewEdit"
/* I only need the one main view for the app. I don't need an employee view. just the user. 
I'll need a route for each element.
1. profile
2. reviews
3. my reviews
4.  */

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>PitStop</h1>
                    <div>The Safest Way to Travel</div>

                    <Outlet />
                </>
            }>

                <Route path="profile/:userId" element={<Profile />} />
                <Route path="profile/:userId/update" element={<ProfileUpdate />} />
                <Route path="interstatesList" element={<InterstatesList />} />
                <Route path="interstates/:interstateId" element={<InterstatePage />} />
                <Route path="reviewForm/:exitId" element={<ReviewForm />} />
                <Route path="reviews/:exitRatingId/edit" element={<ReviewEdit />} />
                <Route path="userRating" element={<UserRating />} />



            </Route>
        </Routes>
    )
}