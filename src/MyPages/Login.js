import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'
import ReorderIcon from '@mui/icons-material/Reorder';



function Login() {

        const [openLink, setOpenLink] = useState(false)

        const toggleNavbar = () => {
            setOpenLink(!openLink)
        }
    return (
        <div className="login">
                <nav className="navbar">
                    <div className="left-side" id={openLink ? "open" : "close"}>
                    <Link to='/'><h2>Eventful Momemts.</h2></Link>
                    <div className="hiddenLink">
                    <Link to='/login'>Login</Link> 
                       <Link to='register'>Register</Link>
                    </div>
                    </div>
                    <div className="right-side" >
                       <Link to='/login'>Login</Link> 
                       <Link to='register'>Register</Link>
                       <button onClick={toggleNavbar}>
                       <ReorderIcon />
                       </button>
                    </div>
                    
                </nav>
            <div className="container">
                    <h1>Welcome back,</h1>
                    <p>Hi, my name is Eventful Moments, I am a bucket... no, not the 
                    bucket of water but i store awesome moments you will like to have in coming years.
                    </p>

                    <form>
                        <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                        </div>
                        <div className="form-control bt-p">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                        </div>
                        <button className="btn">Login</button>
                        
                    </form>
                </div>
        </div>
    )
}

export default Login
