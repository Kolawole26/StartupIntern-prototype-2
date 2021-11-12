import React, { useState } from 'react'
import { Layout, Menu, Drawer, Button,} from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

function SingleItem() {
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
                        <Link to='/updateItem'><button className=" btn-cyan">Edit</button></Link>
                        <button className=" btn-red" >Delete</button>
                    </div>
                </section>
                        
                    </div>

                    
                </Content>
            </Layout>  
        </>
    )
}

export default SingleItem
