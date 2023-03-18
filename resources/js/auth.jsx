import './bootstrap';
import React from 'react';
import reactDOM from 'react-dom/client';
import Auth from './src/Auth';
import { Provider } from 'react-redux';
import admin_store from './stores/admin-store';
import {ThemeProvider} from '@mui/material';
import {createTheme} from './src/theme/index';


const theme = createTheme();

const root = reactDOM.createRoot(document.getElementById('admin-root'));

root.render(
    <ThemeProvider theme={theme}>
        <Provider store={admin_store}>
            <Auth />
        </Provider>
    </ThemeProvider>
    );

