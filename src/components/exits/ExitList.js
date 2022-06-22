import { useEffect, useState } from "react"


// since i am not going to worry about the search function for now...i can repurpose this for the list of reviews, perhaps.
// although, maybe it would handle both?


export const ExitList = ({ searchTermState }) => {
    const [exits, setExits] = useState([])
    const [filteredExits, setFiltered] = useState([])

    const localPitStopUser = localStorage.getItem("pitStop_user")
    const pitStopUserObject = JSON.parse(localPitStopUser)

    const getAllExits = () => {
        fetch(`http://localhost:8088/exits?_expand=interstate`)
            .then(response => response.json())
            .then((exitArray) => {
                setExits(exitArray)
            })
    }  

    

    useEffect(
        () => {
            const searchedExits = exits.filter(exit => {
                return exit.name.toLowercase().includes(searchTermState.toLowercase())
            })
            setFiltered(searchedExits)
        },
        [searchTermState]
    )


    return <>
    
        {/* filter options - drop down menu here */}
    </>


}