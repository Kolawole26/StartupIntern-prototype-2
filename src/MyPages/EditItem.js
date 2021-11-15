import React from 'react'
import { useEffect } from 'react';

function EditItem( {secondLinks} ) {
    
    useEffect(() => {
        secondLinks()

     });

    return (
        <div>
            
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
