import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, FileOutlined } from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';
import { Equipment } from './pages/equipment';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <SubMenu key='sub1' icon={<DesktopOutlined />} title='设备管理'>
            <Menu.Item key='3'>
              <Link to='/equipment'>设备台账</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<FileOutlined />} title='工单管理'>
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div
            className='site-layout-background App'
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              <Route exact path='/equipment' component={Equipment} />
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;