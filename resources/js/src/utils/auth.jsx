import { useEffect, useState } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { updateLogin } from '../../stores/admin-store';
import Auth from '../axios/Auth';

const GuardedRoutes = () => {
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(true);
    const {auth} = useSelector(state => {
        return {auth : state.admin.login}
    });
    useEffect(()=> {
        !auth && Auth.status().then(res => {
            dispatch(updateLogin(res.data.auth));
            setProgress(false);
        });
    }, [])
    
    return (
        progress && !auth ? <></> : auth ? <Outlet/> : <Navigate to='/' />
    );
}

export default GuardedRoutes;