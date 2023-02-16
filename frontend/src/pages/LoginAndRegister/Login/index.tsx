import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useContext } from 'react';
import { Context as ContextPage } from '../../../context/pageContext'
import { Context as ContextUser } from '../../../context/userContext'
import { UserDataLogin } from '../../../context/interfaceContext';

const Login = () => {
    const { handleClickForm } = useContext(ContextPage)
    const { loginUser } = useContext(ContextUser)
    const { Title } = Typography;

    const onFinish = (data: UserDataLogin) => {
        loginUser(data);
    };

    return (
        <Form
            name="login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ minWidth: '30%' }}
        >
            <Title level={3} style={{ textAlign: 'center', color: '#e62429', margin: '0 0 30px 0' }}>SIGN IN</Title>
            <Form.Item
                name="email"
                rules={[{
                    required: true,
                    message: 'Please input your Email!'
                },
                {
                    type: 'email',
                    message: 'Please input a valid email!',
                }]}
            >
                <Input name="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    name="password"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />

            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%', borderRadius: '0' }}>
                    SIGN IN
                </Button>
                <Button type="default" htmlType="button" className="login-form-button" style={{ width: '100%', margin: '20px 0 0 0', borderRadius: '0' }} onClick={() => handleClickForm()}>
                    CREATE AN ACCOUNT
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;