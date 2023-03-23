import { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
    Unstable_Grid2 as Grid, CircularProgress
} from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import Confirm from '../../components/confirm-password-dialog';
import Admin from '../../axios/admin';
import { ToastAlert } from '../../components/toast-alert';
import { useDispatch } from 'react-redux';
import { updateDetails } from '../../../stores/admin-store';


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
    //toast state
    const [toast, setToast] = useState({
        message : '',
        severity : 'success'
    });

    const initDialog = (handler) => {
        setHandler(handler);
        setOpen(true);
    }

    const profFormik = useFormik({
        initialValues: {
            first_name : details.first_name,
            last_name : details.last_name,
            email : !details.email ? '' : details.email,
            mobile : !details.mobile ? '' : details.mobile
        },
        validationSchema : Yup.object({
            first_name : Yup.string()
            .label('First name')
            .max(50)
            .min(3)
            .required('First name is required'),
            last_name : Yup.string()
            .label('Last name')
            .max(50)
            .min(3)
            .required('Last name is required'),
            email : Yup.string()
            .email('Must be a valid email'),
            mobile : Yup.string().matches(/^[0-9-]*$/, {message: "Please enter valid number.", excludeEmptyString: false})
        }),
        onSubmit : async (values, helpers) => {
            profFormik.dirty && initDialog('pf');
        },
        enableReinitialize : true,
        validateOnChange : false
    });

    const passFormik = useFormik({
        initialValues : {
            n_password : '',
            c_password : ''
        },
        validationSchema : Yup.object({
            n_password : Yup.string()
            .label('Password')
            .max(50)
            .min(8),
            c_password : Yup.string()
                .when('n_password', {
                is : n_password => n_password !== undefined,
                then : () => {
                    return Yup.string().required('You must confirm your password')
                    .oneOf([Yup.ref('n_password')], 'Passwords must match')
                },
                otherwise: () => Yup.string()
            })
        }),
        onSubmit : async (values, helpers) => {
            values.n_password && initDialog('pw');
        },
        enableReinitialize : true,
        validateOnChange : false
    });

    const closeHandler = (e, value) => {
        setOpen(false);
    }

    const profHandler = (e, value) => {
        setOpen(false);
        value && (() => {
            const params = {...profFormik.values, password : value}
            Admin.updProfile(params).then(res => res.data).then(data => {
                if (data.success) {
                    dispatch(updateDetails(data.details));
                    setToast({
                        message : 'Profile updated!',
                        severity : 'success'
                    });
                } else {
                    setToast({
                        message : 'Update failed, pleace check your password',
                        severity : 'error'
                    });
                }
            });
        })();
    }

    const passHandler = (e, value) => {
        setOpen(false);
        value && (() => {
            const params = {...passFormik.values, password : value}
            Admin.updPassword(params).then(res => res.data).then(data => {
                if (data.success) {
                    passFormik.setFieldValue('n_password', '');
                    passFormik.setFieldValue('c_password', '');
                    setToast({
                        message : 'Password updated!',
                        severity : 'success'
                    });
                } else {
                    setToast({
                        message : 'Update failed, pleace check your password',
                        severity : 'error'
                    });
                }
            });
        })();
    }

    return (
        <Card>
            <Confirm confirmHandler={handler === 'pf' ? profHandler : passHandler} closeHandler={closeHandler} open={open} />
            <ToastAlert toast={toast}/>
            <CardHeader subheader="Update your information" title="Profile" />
            <form autoComplete="off" onSubmit={profFormik.handleSubmit}>
                <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                        <Grid container spacing={3}>
                            <Grid xs={12} md={6}>
                                <TextField fullWidth label="First name *" type="text"
                                    name="first_name"
                                    error={!!(profFormik.touched.first_name && profFormik.errors.first_name)}
                                    helperText={profFormik.touched.first_name && profFormik.errors.first_name}
                                    onBlur={profFormik.handleBlur}
                                    onChange={profFormik.handleChange}
                                    value={profFormik.values.first_name}
                                />
                            </Grid>
                            <Grid xs={12} md={6} >
                                <TextField fullWidth label="Last name *" type="text"
                                    name="last_name"
                                    error={!!(profFormik.touched.last_name && profFormik.errors.last_name)}
                                    helperText={profFormik.touched.last_name && profFormik.errors.last_name}
                                    onBlur={profFormik.handleBlur}
                                    onChange={profFormik.handleChange}
                                    value={profFormik.values.last_name}
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField fullWidth label="Email address"
                                    name="email"
                                    error={!!(profFormik.touched.email && profFormik.errors.email)}
                                    helperText={profFormik.touched.email && profFormik.errors.email}
                                    onBlur={profFormik.handleBlur}
                                    onChange={profFormik.handleChange}
                                    value={profFormik.values.email}
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                            <TextField fullWidth label="Mobile number"
                                    name="mobile"
                                    error={!!(profFormik.touched.mobile && profFormik.errors.mobile)}
                                    helperText={profFormik.touched.mobile && profFormik.errors.mobile}
                                    onBlur={profFormik.handleBlur}
                                    onChange={profFormik.handleChange}
                                    value={profFormik.values.mobile}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button disabled={!profFormik.dirty} onClick={profFormik.resetForm} variant="outlined">
                    Reset
                </Button>
                <Button disabled={!profFormik.dirty} type="submit" variant="contained">
                    Save details
                </Button>
            </CardActions>
            </form>
            <Divider />
            <CardHeader subheader="Update your password" title="Password" />
            <form autoComplete="off" onSubmit={passFormik.handleSubmit}>
                <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                        
                            <Grid container spacing={3}>
                                <Grid xs={12} md={6}>
                                    <TextField fullWidth label="New password" type="password"
                                        name="n_password"
                                        error={!!(passFormik.touched.n_password && passFormik.errors.n_password)}
                                        helperText={passFormik.touched.n_password && passFormik.errors.n_password}
                                        onBlur={passFormik.handleBlur}
                                        onChange={passFormik.handleChange}
                                        value={passFormik.values.n_password}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                <TextField fullWidth label="Confirm new password" type="password"
                                        name="c_password"
                                        error={!!(passFormik.touched.c_password && passFormik.errors.c_password)}
                                        helperText={passFormik.touched.c_password && passFormik.errors.c_password}
                                        onBlur={passFormik.handleBlur}
                                        onChange={passFormik.handleChange}
                                        value={passFormik.values.c_password}
                                    />
                                </Grid>
                            </Grid>
                    </Box>
                </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button disabled={!passFormik.dirty} type="submit" variant="contained">
                    Update Password
                </Button>
            </CardActions>
            </form>
        </Card>
    );
};
