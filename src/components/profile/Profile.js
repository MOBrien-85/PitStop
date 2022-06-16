import { CustomerProfile } from "./CustomerForm" 

export const Profile = () => {
    const localPitStopUser = localStorage.getItem("pitstop_user")
    const pitStopUserObject = JSON.parse(localPitStopUser)

    if (pitStopUserObject.user) {
      
        return <CustomerProfile />
    }
}
