import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from './Register'; 
import Login from './Login';
import { Box } from '@mui/system';

const Auth = () => {
    return (
        <Box className="App" sx={{height: '100%'}} >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="Register" element={<Register />} />
            </Routes>
        </Box>
    );
}

export default Auth;
