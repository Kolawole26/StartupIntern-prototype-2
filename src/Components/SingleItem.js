import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SingleItem() {
    return (
        <>
           <Navbar expand="lg" className="bg-cyan">
                <Container>
                    <Navbar.Brand className="logo fst-italic fw-bold" style={{ color: "#fff"}}>Eventful Momemts.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav className="me-end my-2 my-3 ">
                            <Link to="/login" className="text-decoration-none nav-link" style={{color: "#fff"}}>Logout</Link>
                            <Link to="/" className="text-decoration-none nav-link" style={{color: "#fff"}}>My Bucket</Link>
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>   

            <Container>
                     <h1 className="mt-5 fw-bold">Lorem ipsum began as scrambled, nonsensical Latin derived 
                        from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h1>
                    <p className="" style={{color: "#5271FF"}}>20/05/2025</p> 

                    <div className="">
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

                    <div className="d-sm-flex block align-items-center my-5">
                        <Link to='addItem' className="">
                            <Button  type="submit" className="buttons py-2  " style={{ color: "#fff", backgroundColor: "#06C3B4", border: "none"}}>
                                Edit
                            </Button>
                        </Link>
                        <Button  type="submit" className="buttons py-2 ms-sm-2  " style={{ color: "#fff", backgroundColor: "#C34F06", border: "none"}}>
                                Delete
                            </Button>
                    </div>
            </Container>
        </>
    )
}

export default SingleItem
