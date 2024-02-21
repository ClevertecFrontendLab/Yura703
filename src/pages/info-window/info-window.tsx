import { ErrorLogin } from '@components/error-exist';
import './info-window.scss';
import 'antd/dist/antd.css';
//import { InfoMessage } from '@types/component-types';
import { CheckCircleFilled, CloseCircleFilled, WarningFilled } from '@ant-design/icons';

interface InfoMessage  {
    icon: React.JSX.Element,
    title: string,
    message: string,
    buttonContent: string,
}

export const InfoWindow = (message: InfoMessage) => {
    return (
        <div className='error'>
            <div className="error__wrapper">
                <ErrorLogin props={message}></ErrorLogin>
            </div>
        </div>
    );
};
