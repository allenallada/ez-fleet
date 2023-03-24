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
import AddVehicle from './AddVehicle';
import GuardedRoutes from '../utils/auth';

const App = () => {
    let location = useLocation();
    React.useEffect(() => {
        nProgress.start();
        nProgress.done();
    }, [location.pathname]);

    const unGuarded = [
        {
            path : '/',
            element : Login,
            guarded : false
        },
        {
            path : '/register',
            element : Register
        }
    ];

    const guarded = [
        {
            path : '/overview',
            element : Overview
        },
        {
            path : '/vehicles',
            element : Vehicles
        },
        {
            path : '/drivers',
            element : Drivers
        },
        {
            path : '/account',
            element : Account
        },
        {
            path : '/add-vehicle',
            element : AddVehicle
        }
    ]

    const getRoutes = (routes) => routes.map(route => {
        const getLayout = route.element.getLayout ?? ((page) => page);
        const Element = route.element;
        return (<Route path={route.path} element={getLayout(<Element/>)} />)
    });

    return (
        <Box className="App" sx={{height: '100%'}} >
            <Routes>
                { getRoutes(unGuarded) }
                <Route element={<GuardedRoutes/>} >
                    { getRoutes(guarded) }
                </Route>
            </Routes>
        </Box>
    );
}

export default App;
