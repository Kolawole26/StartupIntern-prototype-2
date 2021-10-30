import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Register.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Register() {
    
    const [openLink, setOpenLink] = useState(false)

    const toggleNavbar = () => {
        setOpenLink(!openLink)
    }
return (
    <div className="register">
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
            <div className="wrapper">
                    <div className="layout">
                        <h1>Create an account</h1>

                        <form>
                            <div className="form-control">
                            <label htmlFor="fullname">Fullname</label>
                            <input type="fullname" name="fullname" />
                            </div>
                            
                            <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                            </div>

                            <div className="form-control bt-p">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />
                            </div>
                            
                            <button className="btn">Create</button>
                            
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Register
