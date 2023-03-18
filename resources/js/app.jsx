import './bootstrap';
import React, { StrictMode } from 'react';
import reactDOM from 'react-dom/client';
import Auth from './src/pages/Auth';
import { Provider } from 'react-redux';
import admin_store from './stores/admin-store';
import {ThemeProvider} from '@mui/material';
import {createTheme} from './src/theme/index';
import { BrowserRouter } from 'react-router-dom';


const theme = createTheme();

const root = reactDOM.createRoot(document.getElementById('admin-root'));

root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={admin_store}>
                    <Auth />
                </Provider>
            </ThemeProvider>    
        </BrowserRouter>
    </StrictMode>

);

