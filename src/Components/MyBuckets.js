import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function MyBuckets( {secondLinks} ) {

    useEffect(() => {
        secondLinks()

     });

    return (
        <>
           

            <Container className="px-4 px-md-1">
                <div className="d-sm-flex justify-content-between align-items-center mt-5 pt-3">
                    <div>
                        <h1 className="fw-bolder text-center">Welcome John Doe,</h1>
                    </div>
                    <div>
                        <Link to='addItem' className="">
                            <Button variant="primary" type="submit" className="py-2 px-5 btn-a " style={{ color: "#fff"}}>
                                Add item
                            </Button>
                        </Link>
                    </div>
                    
                </div>
                <p className="mb-5 pb-3 text-center text-sm-start">Here are items in your eventful moment bucket.</p>
                <Row className="g-3 mb-5 mx-2">
                    <Col md={6} className=" p-4  shadow  bg-body rounded h ">
                    <h6 className="fw-bold mb-3 lh-base">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h6>
                            <p className="lh-base">
                                    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                    and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                    with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                    was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                    a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                            </p>
                        
                            <div className="d-sm-flex justify-content-between align-items-baseline text-center">
                                <div>
                                <Link to='myItem' className="text-decoration-none">View Details</Link>
                                </div>
                                    <div className="d-md-flex align-items-center">
                                        <div>
                                        <p className="me-md-5 mt-2" style={{color: "#B2B2B2"}}>20/05/2021</p>
                                        </div>
                                       <div>
                                       <p>20/05/2025</p>
                                       </div>
                                    </div>
                                </div>
                    </Col>
                    <Col md={6} className="p-4 shadow  bg-body rounded ">
                    <h6 className="fw-bold mb-3 lh-base">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h6>
                            <p className="lh-base">
                                    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                    and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                    with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                    was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                    a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                            </p>
                        
                            <div className="d-sm-flex justify-content-between align-items-baseline text-center">
                                <div>
                                <Link to='myItem' className="text-decoration-none">View Details</Link>
                                </div>
                                    <div className="d-md-flex align-items-center">
                                        <div>
                                        <p className="me-md-5 mt-2" style={{color: "#B2B2B2"}}>20/05/2021</p>
                                        </div>
                                       <div>
                                       <p>20/05/2025</p>
                                       </div>
                                    </div>
                                </div>
                    </Col>
                    <Col md={6} className="p-4 shadow bg-body rounded">
                    <h6 className="fw-bold mb-3 lh-base">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h6>
                            <p className="lh-base">
                                    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                    and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                    with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                    was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                    a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                            </p>
                        
                            <div className="d-sm-flex justify-content-between align-items-baseline text-center">
                                <div>
                                <Link to='myItem' className="text-decoration-none">View Details</Link>
                                </div>
                                    <div className="d-md-flex align-items-center">
                                        <div>
                                        <p className="me-md-5 mt-2" style={{color: "#B2B2B2"}}>20/05/2021</p>
                                        </div>
                                       <div>
                                       <p>20/05/2025</p>
                                       </div>
                                    </div>
                                </div>
                    </Col>
                    <Col md={6} className="shadow p-4 bg-body rounded">
                    <h6 className="fw-bold mb-3 lh-base">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h6>
                            <p className="lh-base">
                                    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                    and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                    with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                    was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                    a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                            </p>
                        
                            <div className="d-sm-flex justify-content-between align-items-baseline text-center">
                                <div>
                                <Link to='myItem' className="text-decoration-none">View Details</Link>
                                </div>
                                    <div className="d-md-flex align-items-center">
                                        <div>
                                        <p className="me-md-5 mt-2" style={{color: "#B2B2B2"}}>20/05/2021</p>
                                        </div>
                                       <div>
                                       <p>20/05/2025</p>
                                       </div>
                                    </div>
                                </div>
                    </Col>
                    
                </Row>
           
            </Container>
        </>
    )
}

export default MyBuckets
