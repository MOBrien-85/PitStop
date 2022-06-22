// FETCH CALLS


export const getCurrentUserFetch = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`)
        .then(response => response.json())
}


export const getUserReviewsFetch = (pitStopUserObject) => {
    return fetch(`http://localhost:8088/exitRatings?userId=${pitStopUserObject.id}&_expand=exit&_expand=interstate`)
            .then(response => response.json())
}





// PUT CALLS

export const saveUserProfileFetch = (profile) => {
    return fetch(`http://localhost:8088/users/${profile.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
    })
        .then(response => response.json())
}