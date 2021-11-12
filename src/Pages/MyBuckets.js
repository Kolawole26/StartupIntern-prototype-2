import React, { useState } from 'react'
import { Layout, Menu, Drawer, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
function MyBuckets() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
          <Layout className="mainLayout">
                <Header className="head">
                    <div className="container-fluid">
                        <div className="header">
                           <div className="logo">
                               <Link to="/">Eventful Momemts.</Link>
                            </div> 
                        <div className="mobileHidden">
                        <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                            <Link to="/login">Logout</Link>
                            <Link to="/">My Bucket</Link>
                        </Menu>
                        </div>

                        <div className="mobileVisible">
                            <Button  onClick={showDrawer}>
                            <i class="fas fa-bars"></i>
                            </Button>
                            <Drawer  placement="right" onClose={onClose} visible={visible} >
                                <div className="stroll">
                                <Link to="/login">Logout</Link>
                                <Link to="/">My Bucket</Link>
                                </div>
                            </Drawer>
                        </div>
                       
                        </div>
                    </div>
                   
                </Header>
                <Content>
                    <div className="wrap">
                        <header>
                            <div className="display">
                            <div className="head">
                            <h1>Welcome John Doe,</h1>
                            </div>
                            <Link to='addItem'><button className="btns">Add item</button></Link>
                            </div>
                            <p>Here are items in your eventful moment bucket.</p>
                        </header>
                        
                            <div className="box">
                            <Row gutter={[24, 24]}>
                                <Col md={{ span: 12}} className="grid-box " >
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
                                    <Link to='/singleItem'>View Details</Link>
                                        <div className="date">
                                            <p>20/05/2021</p>
                                            <p>20/05/2025</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={{ span: 12}} className="grid-box">
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
                                    <Link to='/singleItem'>View Details</Link>
                                        <div className="date">
                                            <p>20/05/2021</p>
                                            <p>20/05/2025</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={{ span: 12}} className="grid-box">
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
                                    <Link to='/singleItem'>View Details</Link>
                                        <div className="date">
                                            <p>20/05/2021</p>
                                            <p>20/05/2025</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={{ span: 12}} className="grid-box">
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
                                    <Link to='/singleItem'>View Details</Link>
                                        <div className="date">
                                            <p>20/05/2021</p>
                                            <p>20/05/2025</p>
                                        </div>
                                    </div>
                                </Col>
                                
                            </Row>
                            </div>
                        
                    </div>

                    
                </Content>
            </Layout>    
        </>
    )
}

export default MyBuckets
