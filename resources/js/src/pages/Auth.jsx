import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Register from './Register'; 
import Login from './Login';
import { Box } from '@mui/system';
import nProgress from 'nprogress';
import Overview from './Overview';
import Vehicles from './Vehicles';
import Drivers from './Drivers';
import Account from './Account';
import Settings from './Settings';

const Auth = () => {
    let location = useLocation();
    React.useEffect(() => {
        nProgress.start();
        nProgress.done();
    }, [location.pathname]);
    
    return (
        <Box className="App" sx={{height: '100%'}} >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/account" element={<Account />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Box>
        
    );
}

export default Auth;
