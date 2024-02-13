import './header.scss';
import 'antd/dist/antd.css';
import { Button, Typography, Grid } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

export const Header: React.FC = () => {
    const screenMore992 = useBreakpoint().lg;
    const screenMore768 = useBreakpoint().md;

    return (
        <header className='header' >
            <Typography.Text className='header-text'>
                Главная
            </Typography.Text>
            <div className="header-content">
                <Typography.Title level={1}  style={ screenMore992 ? { fontWeight: 700 } : { fontWeight: 500 }}>
                    Приветствуем тебя в CleverFit — приложении,<br/> которое поможет тебе добиться своей мечты!
                </Typography.Title>
                <Button type='text'
                    icon={ (screenMore992 || !screenMore768 ) && <SettingOutlined /> }>
                        { screenMore768 ? "Настройки" : ''}
                </Button>
            </div>
        </header>
    );
};
