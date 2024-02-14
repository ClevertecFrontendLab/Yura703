import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//import { HashRouter, Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';

import { history, store } from '@redux/configure-store';
import { routes } from "@routes/routes";
import { MainPage } from './pages';
import { Loader } from "@components/loader";

import 'normalize.css';
import './index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                {routes}
            </HistoryRouter>
            <Loader />
        </Provider>
    </React.StrictMode>,
);
