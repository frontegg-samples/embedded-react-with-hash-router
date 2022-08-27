import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';
import {HashRouter} from "react-router-dom";

const contextOptions = {
    baseUrl: 'https://samples-demo.frontegg.com',
    clientId: '2e53360e-517e-4c38-a040-ba0e8639f2c7'
};

ReactDOM.render(
    <HashRouter>
    <FronteggProvider contextOptions={contextOptions} urlStrategy={"hash"}>

            <App />
    </FronteggProvider>
    </HashRouter>,
    document.getElementById('root')
);
