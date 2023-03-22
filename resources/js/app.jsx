import './bootstrap';
import React, { StrictMode } from 'react';
import reactDOM from 'react-dom/client';
import App from './src/pages/App';
import { Provider } from 'react-redux';
import admin_store from './stores/admin-store';
import {ThemeProvider} from '@mui/material';
import {createTheme} from './src/theme/index';
import { BrowserRouter } from 'react-router-dom';


const theme = createTheme();

const root = reactDOM.createRoot(document.getElementById('admin-root'));

root.render(
    // <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={admin_store}>
                    <App />
                </Provider>
            </ThemeProvider>    
        </BrowserRouter>
    // </StrictMode>
);

