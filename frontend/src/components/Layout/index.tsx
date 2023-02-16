import { Layout, Avatar, Space, Typography, ConfigProvider, Dropdown } from 'antd';
import logo from "../../assets/image/logo.svg"
import avatar from "../../assets/image/avatar.webp"
import { Children } from '../../context/interfaceContext';
import { useContext } from 'react';
import { Context as ContextUser } from '../../context/userContext';
import { useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';

const LayoutBase = ({ children }: Children) => {
    const { user, navigate } = useContext(ContextUser);
    const { Header, Content } = Layout;
    const { Title } = Typography;
    const location = useLocation();
    const isDetails = location.pathname !== '/' && location.pathname !== '/account';
    const isDashboard = location.pathname !== '/';
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <Title level={5}>{`${user.first_name} ${user.last_name}`}</Title>,
        },
        {
            key: '2',
            label: <Title level={5}>Settings</Title>,
        },
        {
            key: '3',
            label: (
                <Title level={5} onClick={() => {
                    window.localStorage.removeItem('marvel-tkn')
                    navigate("/")
                }}>
                    Log Out
                </Title>
            ),
        },
    ];



    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#e62429' } }}>
            <Layout style={{ width: '100%', height: isDetails ? '200%' : '100%', background: '#ffffff' }}>
                <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: '#191919' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '7px' }}>
                        <img
                            src={logo}
                            alt="logo-marvel"
                            style={{ width: 120, height: 50 }}
                        />
                        {isDashboard && (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', position: 'absolute', right: 15 }}>
                                <Space wrap size={16}>
                                    <Dropdown menu={{ items }} placement="bottomRight">
                                        <Avatar size={54} >
                                            <img
                                                src={avatar}
                                                alt="logo-marvel"
                                                style={{ width: 50, height: 50, cursor: 'pointer' }}
                                            />
                                        </Avatar>
                                    </Dropdown>
                                </Space>
                            </div>
                        )}
                    </div>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px' }}>
                    {location.pathname === '/account' ? (
                        <div style={{
                            width: '100%',
                            background: '#ffffff',
                            height: '95%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            {children}
                        </div>
                    ) : (
                        <div style={{
                            width: '100%',
                            padding: 24,
                            minHeight: '100%',
                            background: '#ffffff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            
                            {children}
                        </div>
                    )
                    }
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default LayoutBase;