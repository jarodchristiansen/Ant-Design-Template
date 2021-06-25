import { Layout, Menu, Breadcrumb } from 'antd';
import React from "react";
import "./App.css";
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const { Title } = Typography;
const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
    <Header style={{padding: '20px'}}>
    <Avatar style={{float: 'right'}}icon={<UserOutlined />} />
    <Title style={{color: 'white'}} level={3}>Jarod</Title>
    </Header>
      <Layout>
      <Sider>
      <Menu
        defaultSelectedKeys={['2']}
        mode="inline"
      >
        <Menu.Item key="dashboard"> 
          Dashboard
        </Menu.Item>
        <SubMenu key="sub1" title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content" style={{background: '#fff', padding: 24, minHeight: 400}}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design Example Created By Jarod Christiansen</Footer>
        </Layout>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
