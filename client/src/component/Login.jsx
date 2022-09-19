import { useState, useEffect } from "react"



const Login = ({ onLogin }) => {

    const [username, setUsername] = useState(null)

    const handleSubmitLogin = async () => {
        e.preventDefault()
        let request = await fetch("url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username})
        })
        let response = await request.json()
        console.log(response)
    }




    return (
        <div className="login-page">
            <form onSubmit={handleSubmitLogin} >
                <label>Username</label><br />
                <input 
                type="text" 
                name="username" 
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                {/* <label>Password</label><br />
                <input type="text" name="password" placeholder="password"/><br /> */}
            </form>
        </div>
    )
}

export default Login