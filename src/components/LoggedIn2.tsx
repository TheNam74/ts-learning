import {useState} from 'react'

type AuthUser = {
    name:string
    email: string
}

export const LoggedIn2 = () =>{

    const [isLoggedIn, setIsLoggedIn]=useState(false)
    // type insertion , no need to use opt chains anymore
    const [user, setUser]=useState<AuthUser>({} as AuthUser)
    const handleLogin = ()=>{
        setIsLoggedIn(true)
        setUser({
            name:"Nam",
            email:"Nam@gmail.com"
        })
    }
    return(
        <div style = {{border: '3px solid red'}}>
            <button onClick={handleLogin}>Log in</button>
            <div>{`User is ${isLoggedIn?'logged in':'logged out'}`}</div>
            {isLoggedIn?`${user.name},${user.email}`:""}
        </div>
    )
}