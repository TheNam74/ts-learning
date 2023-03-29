import {useState} from 'react'

type AuthUser = {
    name:string
    email: string
}

export const LoggedIn = () =>{

    //explicitly tell TS that user's type can be null or AuthUser
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    const [user, setUser]=useState<AuthUser|null>(null)
    const handleLogin = ()=>{
        setIsLoggedIn(true)
        setUser({
            name:"Nam",
            email:"Nam@gmail.com"
        })
    }
    const handleLogout = ()=>{
        setIsLoggedIn(false)
        setUser(null)
    }
    return(
        <div style = {{border: '3px solid red'}}>
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogout}>Log out</button>
            <div>{`User is ${isLoggedIn?'logged in':'logged out'}`}</div>
            {/* optional chaining is being used here becauce user can be null (avoid common errors such as "Cannot read property 'x' of undefined".) */}
            {isLoggedIn?`${user?.name},${user?.email}`:""}
        </div>
    )
}