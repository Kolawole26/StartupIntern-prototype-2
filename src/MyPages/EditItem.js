import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';

function EditItem() {
    const [openLink, setOpenLink] = useState(false)

        const toggleNavbar = () => {
            setOpenLink(!openLink)
        }

    return (
        <div>
            <nav className="navbar">
                    <div className="left-side" id={openLink ? "open" : "close"}>
                        <Link to='/'><h2>Eventful Momemts.</h2></Link>
                        <div className="hiddenLink">
                        <Link to='/login'>Logout</Link> 
                       <Link to='/'>My Bucket</Link>
                        </div>
                    </div>
                    <div className="right-side" >
                        <Link to='/login'>Logout</Link> 
                       <Link to='/'>My Bucket</Link>
                       <button onClick={toggleNavbar}>
                       <ReorderIcon />
                       </button>
                    </div>
                    
                </nav>
           <div className="add">
                
                <form >
                        <div className="form-control" >
                        <label htmlFor="date">Date in the future</label>
                        <input type="text" name="date" />
                        </div>
                        <div className="form-control ">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title"  />
                        </div>
                        <div className="form-control bt-p">
                        <label htmlFor="details">Details</label>
                        <textarea name="details" id="" cols="30" rows="10" ></textarea>
                        </div>
                        <button className="btn">Update</button>
                        
                    </form>
            </div> 
        </div>
    )
}

export default EditItem
