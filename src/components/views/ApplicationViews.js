import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { InterstateContainer } from "../interstates/InterstateContainer"
import { InterstatePage } from "../interstates/InterstatePage"
import { ReviewForm } from "../reviews/ReviewForm"
import { ProfileUpdate } from "../profile/ProfileUpdate"
import { UserRating } from "../reviews/UserRating"
import { ReviewEdit } from "../reviews/ReviewEdit"
import { ExitReviewsList } from "../exits/ExitReviewsList"
import { FullReviewDisplay } from "../reviews/FullReviewDisplay"
import "./ApplicationViews.css"


export const ApplicationViews = () => {
    return (
        <div className="app_body">
        <Routes>
            <Route path="/" element={
                <>
                

                    <Outlet />
                </>
            }>

                <Route path="profile/:userId" element={<Profile />} />

                <Route path="profile/:userId/update" element={<ProfileUpdate />} />

                <Route path="interstates" element={<InterstateContainer />} />

                <Route path="interstates/:interstateId" element={<InterstatePage />} />

                <Route path="reviewForm/:exitId" element={<ReviewForm />} />

                <Route path="reviews/:exitRatingId/edit" element={<ReviewEdit />} />

                <Route path="userRating" element={<UserRating />} />

                <Route path="exitReviews/:exitId" element={<ExitReviewsList />} />

                <Route path="fullReviewDisplay/:exitId" element={<FullReviewDisplay />} />

            </Route>
        </Routes>
        </div>
    )
}