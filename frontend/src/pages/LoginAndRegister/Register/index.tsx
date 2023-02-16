import { LockOutlined, UserOutlined, MailOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useContext } from 'react';
import { Context as ContextPage } from '../../../context/pageContext';
import { Context as ContextUser } from '../../../context/userContext';
import { UserDataRegister } from '../../../context/interfaceContext';

const Register = () => {
    const { handleClickForm } = useContext(ContextPage)
    const { registerUser } = useContext(ContextUser)
    const { Title } = Typography;

    const onFinish = (data: UserDataRegister) => {
        registerUser(data);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ minWidth: '30%' }}
        >
            <Title level={3} style={{ textAlign: 'center', color: '#e62429', margin: '0 0 30px 0' }}>CREATE YOUR ACCOUNT</Title>
            <Form.Item
                name="first_name"
                rules={[{ required: true, message: 'Please input your First name!' }]}
            >
                <Input prefix={<UserOutlined
                    className="site-form-item-icon" />}
                    placeholder="First Name"
                />
            </Form.Item>
            <Form.Item
                name="last_name"
                rules={[{ required: true, message: 'Please input your Last name!' }]}
            >
                <Input prefix={<TeamOutlined
                    className="site-form-item-icon" />}
                    placeholder="Last Name"
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input prefix={<MailOutlined 
                    className="site-form-item-icon" />}
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>I have read the </Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="" style={{ color: '#e62429' }}>
                    agreement
                </a>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%', borderRadius: '0' }}>
                    CREATE AN ACCONT
                </Button>
                <Button type="default" htmlType="submit" className="login-form-button" style={{ width: '100%', margin: '20px 0 0 0', borderRadius: '0' }} onClick={() => handleClickForm()}>
                    SIGN IN
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Register;