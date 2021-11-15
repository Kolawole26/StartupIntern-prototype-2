import React from 'react'
import '../Styles/Login.css'
import { useEffect } from 'react';




function Login( {firstLinks} ) {
   
    useEffect(() => {
        firstLinks()

     });
        
    return (
        <div className="login">
                
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
