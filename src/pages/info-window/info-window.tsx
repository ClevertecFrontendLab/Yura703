import './info-window.scss';
import 'antd/dist/antd.css';

import { ErrorLogin } from '@components/error-exist';
import { InfoMessage } from '../../types';

export const InfoWindow = (message: InfoMessage) => {
    return (
        <div className='error'>
            <div className="error__wrapper">
                <ErrorLogin props={message}></ErrorLogin>
            </div>
        </div>
    );
};
