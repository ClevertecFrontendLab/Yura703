import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import { history, store } from '@redux/configure-store';
import { routes } from "@routes/routes";
import { Loader } from "@components/loader";

import 'normalize.css';
import './index.css';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

//console.log('state1=',  useAppSelector((state) => state.auth.isLoader));

//const isLoader = useState(true);

root.render(


    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                {routes}
            </HistoryRouter>
            {/* { (useAppSelector((state: { toolkit: { isLoader: boolean; }; }) => state.toolkit.isLoader)) ?? <Loader /> } */}
        </Provider>
    </React.StrictMode>,
);
