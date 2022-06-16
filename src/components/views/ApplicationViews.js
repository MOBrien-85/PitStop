import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerProfile } from "../profile/CustomerProfile"
import { InterstatesList } from "../interstates/InterstatesList"
import { InterstatePage } from "../interstates/InterstatePage"
import { ReviewForm } from "../reviews/ReviewForm"
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

                <Route path="profile" element={<CustomerProfile />} />
                <Route path="interstatesList" element={<InterstatesList />} />
                <Route path="interstatePage/:interstateId" element={<InterstatePage />} />
                {/* <Route path="reviewForm" element={<ReviewForm />} /> */}


            </Route>
        </Routes>
    )
}