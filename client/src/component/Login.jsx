import { useState } from "react"



const Login = ({ onLogin }) => {

    const [username, setUsername] = useState("")

    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        let request = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username })
        })
        let response = await request.json()
        onLogin(response)
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
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login