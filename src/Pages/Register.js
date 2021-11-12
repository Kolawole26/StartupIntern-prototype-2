import React, { useState } from 'react'
import { Layout, Menu, Drawer, Button, Form, Input} from 'antd';
import { Link } from 'react-router-dom';


const { Header, Content } = Layout;
function Register() {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>
            <Layout className="mainLayout">
                <Header className="head">
                    <div className="container-fluid">
                        <div className="header">
                           <div className="logo">
                               <Link to="/">Eventful Momemts.</Link>
                            </div> 
                        <div className="mobileHidden">
                        <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </Menu>
                        </div>

                        <div className="mobileVisible">
                            <Button  onClick={showDrawer}>
                            <i class="fas fa-bars"></i>
                            </Button>
                            <Drawer  placement="right" onClose={onClose} visible={visible} >
                                <div className="stroll">
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                                </div>
                            </Drawer>
                        </div>
                       
                        </div>
                    </div>
                   
                </Header>
                <Content>
                    <div className="container wrapper">
                        <h1>Create an account</h1>
                        

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
                                label="Fullname"
                                name="fullname"
                                rules={[
                                {
                                    
                                    message: 'Please input your Fullname!',
                                },
                                ]}
                                className="item"
                            >
                                <Input />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                
                                message: 'Please input your E-mail!',
                            },
                            ]}
                            className="item"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                
                                message: 'Please input your password!',
                            },
                            ]}
                            className="item item-2"
                        >
                            <Input.Password />
                        </Form.Item>
                        
                        
                       
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="btn">
                            Create
                            </Button>
                        </Form.Item>
                    </Form>
                    </div>

                    
                </Content>
            </Layout>
        </div>
    )
}

export default Register
