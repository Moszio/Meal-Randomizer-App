import { useState } from "react"



const Login = ({ onLogin, user }) => {

    const [username, setUsername] = useState("");

    // const handleSubmitLogin = async (e) => {
    //     e.preventDefault()
    //     let request = await fetch("http://localhost:3000/users", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ username })
    //     })
    //     let response = await request.json()
    //     onLogin(response)
    // }

    const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {    
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
  }

  

  // function handleLogout() {
  //   fetch("/http://localhost:3000/logout", {
  //     method: "DELETE",
  //   }).then(() => onLogout());
  // }


    return (
        <div className="login-page">
            <form onSubmit={handleSubmit} >
                <label>Username</label><br />
                <input 
                type="text" 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                {/* <label>Password</label><br />
                <input type="text" name="password" placeholder="password"/><br /> */}
                <button type="submit">Login</button>
            </form>
            <h1>Welcome! {user}</h1>
          
        </div>
    )
}

export default Login