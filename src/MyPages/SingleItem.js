import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/SingleItem.css'
import { useEffect } from 'react';

function SingleItem( {secondLinks} ) {
    useEffect(() => {
        secondLinks()

     });

    return (
        <div>
          
             <div className="details">
                <header>
                    <h1>Lorem ipsum began as scrambled, nonsensical Latin derived 
                        from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h1>
                    <p>20/05/2025</p> 
                </header>
                <section>
                    <div className="para-text">
                        <p>
                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with 
                        which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                        a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                        </p>
                        <p>
                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with 
                        which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                        a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                        </p>
                        <p>
                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with 
                        which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                        a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                        </p>
                        
                    </div>
                    <div className="btn-flex">
                        <Link to='updateItem'><button className="btn btn-cyan">Edit</button></Link>
                        <button className="btn btn-red" >Delete</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SingleItem
