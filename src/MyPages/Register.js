import React from 'react'
import '../Styles/Register.css'
import { useEffect } from 'react';


function Register( {firstLinks} ) {
    
    useEffect(() => {
        firstLinks()

     });
   
return (
    <div className="register">
            
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
