import React from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';

function Navigation( {links} ) {

    const [openLink, setOpenLink] = useState(false)

        const toggleNavbar = () => {
            setOpenLink(!openLink)
        }

        

    return (
        <>
            <nav className="navbar">
                    <div className="left-side" id={openLink ? "open" : "close"}>
                        <Link to='/'><h2>Eventful Momemts.</h2></Link>
                        <div className="hiddenLink">
                       {links ? 
                       <div>
                            <Link to='/login'>Login</Link> 
                            <Link to='register'>Register</Link> 
                       </div>
                        :
                        <div>
                            <Link to='/login'>Logout</Link> 
                            <Link to='/'>My Bucket</Link>
                        </div>
                       }
                        </div>
                    </div>
                    <div className="right-side" >
                    {links ? 
                       <div>
                            <Link to='/login'>Login</Link> 
                            <Link to='register'>Register</Link> 
                       </div>
                        :
                        <div>
                            <Link to='/login'>Logout</Link> 
                            <Link to='/'>My Bucket</Link>
                        </div>
                       }
                       <button onClick={toggleNavbar}>
                       <ReorderIcon />
                       </button>
                    </div>
                    
                </nav>
        </>
    )
}

export default Navigation
