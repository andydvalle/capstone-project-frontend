//grabs the token held in browser's localStorage
const token = () => localStorage.getItem("token")

//standardizes headers for AUTH 
const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

//sends login information to backend, auth#create
const login = data => {
    console.log(data)
    return fetch('http://localhost:3000/api/v1/auth', {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
}


//get fetch the current user after login
const getCurrentUser = () => {
    const URL = 'http://localhost:3000/api/v1/current_user'
    return fetch(URL, {
        headers: headers()
    }).then(resp => {
        return resp.json()
    })
}

//GET fetch all users
const getAllUsers = () => {
    const URL = 'http://localhost:3000/api/v1/users'
    return fetch(URL)
    .then(resp => resp.json())
}

//exports all functions 
export const api = {
    auth: {
        login,
        getCurrentUser
    },
    users: {
        getAllUsers
    }
}