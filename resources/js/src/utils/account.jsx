import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { updateDetails } from "../../stores/admin-store";
import Admin from "../axios/admin"
import nProgress from 'nprogress';


export const accountFetch = () => {
    nProgress.start();
    const dispatch = useDispatch();
    Admin.details().then(res => res.data).then(data => {
        nProgress.done();
        dispatch(updateDetails(data));
    })
}