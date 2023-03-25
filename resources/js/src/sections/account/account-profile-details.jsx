import { useState } from 'react';
import {
    Card,
    Divider,
} from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import Confirm from '../../components/confirm-dialog';
import { useDispatch } from 'react-redux';
import { updateDetails, updateToast } from '../../../stores/admin-store';
import { getPasswordFormik, getProfileFormik } from '../../utils/formik-config';
import { PasswordForm } from './password-form';
import { InformationForm } from './information-form';
import Account from '../../axios/account';

export const AccountProfileDetails = () => {

    const dispatch = useDispatch();
    
    const {details} = useSelector(state => {
        return {
            details : state.admin.details
        }
    });

    //dialog open state
    const [open, setOpen] = useState(false);
    //handler methods, pf = profile, pw = password
    const [handler, setHandler] = useState('pf');
    
    const initDialog = (handler) => {
        setHandler(handler);
        setOpen(true);
    }

    const profFormik = useFormik(getProfileFormik(details, async (values, helpers) => {
        profFormik.dirty && initDialog('pf');
    }));

    const passFormik = useFormik(getPasswordFormik(async (values, helpers) => {
        values.n_password && initDialog('pw');
    }));

    const closeHandler = (e, value) => {
        setOpen(false);
    }

    const profHandler = (e, value) => {
        setOpen(false);
        value && (() => {
            const params = {...profFormik.values, password : value}
            Account.updProfile(params).then(res => res.data).then(data => {
                if (data.success) {
                    dispatch(updateDetails(data.details));
                    dispatch(updateToast({
                        message : 'Profile updated!',
                        severity : 'success'
                    }));
                } else {
                    dispatch(updateToast({
                        message : 'Update failed, pleace check your password',
                        severity : 'error'
                    }));
                }
            });
        })();
    }

    const passHandler = (e, value) => {
        setOpen(false);
        value && (() => {
            const params = {...passFormik.values, password : value}
            Account.updPassword(params).then(res => res.data).then(data => {
                if (data.success) {
                    passFormik.setFieldValue('n_password', '');
                    passFormik.setFieldValue('c_password', '');
                    dispatch(updateToast({
                        message : 'Password updated!',
                        severity : 'success'
                    }));
                } else {
                    dispatch(updateToast({
                        message : 'Update failed, pleace check your password',
                        severity : 'error'
                    }));
                }
            });
        })();
    }

    return (
        <Card>
            <Confirm confirmHandler={handler === 'pf' ? profHandler : passHandler} closeHandler={closeHandler} open={open} />
            <InformationForm formik={profFormik} />
            <Divider />
            <PasswordForm formik={passFormik} /> 
        </Card>
    );
};
