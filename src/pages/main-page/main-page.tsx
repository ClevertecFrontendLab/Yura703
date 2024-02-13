import './main-page.scss';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

import { Header } from '@components/header';
import { MainContent } from '@components/main-content';
import { Footer } from '@components/footer';
import { MainSider } from '@components/main-sider';

export const MainPage: React.FC = () => {
    return (
        <Layout className='flex'>
            <MainSider></MainSider>
            <Layout>
                <Header></Header>
                <div className='main-bg'>
                    <Content className='main'>
                        <MainContent></MainContent>
                    </Content>
                    <Footer></Footer>
                </div>
            </Layout>
        </Layout>
    );
};
