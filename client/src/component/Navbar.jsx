import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="application-name">
            </div>
            <div className="navbar-controllers">
                <Link to="/"><div>Home</div></Link>
                <Link to="/rewards"><div>Rewards</div></Link>
                <Link to="/login"><div>Login</div></Link>
                <Link to="/signup"><div>Signup</div></Link>
                {/* <Link><div>About</div></Link> */}
            </div>
        </div>
    )
}

export default Navbar