import React from 'react';
import './main-page.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export const MainPage: React.FC = () => {

    return (
        <Layout>
            <Sider width="208px">
                Sider
            </Sider>
            <Layout>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    );
};
