import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Register from './Register'; 
import Login from './Login';
import { Box } from '@mui/system';
import nProgress from 'nprogress';

const Auth = () => {
    let location = useLocation();
    React.useEffect(() => {
        console.log(location);
        nProgress.start();
        nProgress.done();
    }, [location.pathname]);
    return (
        <Box className="App" sx={{height: '100%'}} >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Box>
        
    );
}

export default Auth;
