import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/MyBuckets.css'
import { useEffect } from 'react';

function MyBuckets( {secondLinks} ) {
    
    useEffect(() => {
        secondLinks()

     });
    
    return (
        <div className="bucket">
            

                <div className="wrap">
                <header>
                    <div className="display">
                    <div className="head">
                    <h1>Welcome John Doe,</h1>
                    </div>
                    <Link to='addItem'><button className="btn">Add item</button></Link>
                    </div>
                    <p>Here are items in your eventful moment bucket.</p>
                </header>
                    <div className="grid">
                        <div className="grid-box">
                            <div className="text">
                                <div className="content">
                                <h5>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h5>
                                <p>
                                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                                </p>
                                </div>
                                <div className="grid-flex">
                                <Link to='myItem'>View Details</Link>
                                    <div className="date">
                                        <p>20/05/2021</p>
                                        <p>20/05/2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-box">
                            <div className="text">
                                <div className="content">
                                <h5>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h5>
                                <p>
                                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                                </p>
                                </div>
                                <div className="grid-flex">
                                <Link to='myItem'>View Details</Link>
                                    <div className="date">
                                        <p>20/05/2021</p>
                                        <p>20/05/2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-box">
                            <div className="text">
                                <div className="content">
                                <h5>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h5>
                                <p>
                                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                                </p>
                                </div>
                                <div className="grid-flex">
                                <Link to='myItem'>View Details</Link>
                                    <div className="date">
                                        <p>20/05/2021</p>
                                        <p>20/05/2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-box">
                            <div className="text">
                                <div className="content">
                                <h5>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h5>
                                <p>
                                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                                </p>
                                </div>
                                <div className="grid-flex">
                                <Link to='myItem'>View Details</Link>
                                    <div className="date">
                                        <p>20/05/2021</p>
                                        <p>20/05/2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
             </div>
            
        </div>
    )
}

export default MyBuckets
