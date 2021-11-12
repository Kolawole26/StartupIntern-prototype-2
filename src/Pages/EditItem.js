import React, { useState } from 'react'
import { Layout, Menu, Drawer, Button, Form, Input} from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const { TextArea } = Input;

function EditItem() {
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
                    <div className="add">
                        
                        <Form
                        name="basic"
                        
                        initialValues={{
                            remember: true,
                        }}
                        
                        autoComplete="off"
                        >
                        {/* <Form.Item
                            label="Username"
                            name="username"
                            
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                            className="item"
                        >
                            <Input />
                        </Form.Item> */}

                        <Form.Item
                            name="date"
                            label="Date in the future"
                            rules={[
                        
                            {
                                
                                message: 'Please input your Date!',
                            },
                            ]}
                            className="item"
                        >
                            <Input />
                        </Form.Item>
                       
                        <Form.Item
                            name="title"
                            label="Title"
                            rules={[
                        
                            {
                                
                                message: 'Please input your Title!',
                            },
                            ]}
                            className="item"
                        >
                            <Input />
                        </Form.Item>
                        
                        <Form.Item
                            name="details"
                            label="Details"
                            rules={[
                        
                            {
                                
                                message: 'Please input your Details!',
                            },
                            ]}
                            className="item"
                        >
                            <TextArea rows={9} />
                        </Form.Item>

                
                        
                        
                       
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="btn">
                            Update
                            </Button>
                        </Form.Item>
                    </Form>
                    </div>

                    
                </Content>
            </Layout>    
        </>
    )
}

export default EditItem
