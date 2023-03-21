import { useCallback, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
    Unstable_Grid2 as Grid
} from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';


export const AccountProfileDetails = () => {
    
    const {details} = useSelector(state => {
        return {
            details : state.admin.details
        }
    });

    const handleChange = useCallback(
        (event) => {
            setValues((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value
            }));
        },
        []
    );

    const handleSubmit = useCallback(
        (event) => {
        event.preventDefault();
        },
        []
    );

    const profFormik = useFormik({
        initialValues: {
            first_name : details.first_name,
            last_name : details.last_name,
            email : !details.email && '',
            mobile : !details.mobile && '' 
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
            .required('Last name is required'),
            email : Yup.string()
            .email('Must be a valid email'),
            mobile : Yup.number()
            .nullable(true)
        }),
        onSubmit : async (values, helpers) => {
            console.log(values);
        }
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
            .oneOf([Yup.ref('n_password'), null], 'Passwords must match')
        }),
        onSubmit : async (values, helpers) => {
            values.n_password && (()=>{
                console.log(values);
            })()
        }
    });

    return (
        <Card>
            <CardHeader subheader="Update your information" title="Profile" />
            <form autoComplete="off" onSubmit={profFormik.handleSubmit}>
                <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                        <Grid container spacing={3}>
                            <Grid xs={12} md={6}>
                                <TextField fullWidth label="First name" type="text"
                                    name="first_name"
                                    error={!!(profFormik.touched.first_name && profFormik.errors.first_name)}
                                    helperText={profFormik.touched.first_name && profFormik.errors.first_name}
                                    onBlur={profFormik.handleBlur}
                                    onChange={profFormik.handleChange}
                                    value={profFormik.values.first_name}
                                />
                            </Grid>
                            <Grid xs={12} md={6} >
                                <TextField fullWidth label="Last name" type="text"
                                    name="last_name"
                                    error={!!(profFormik.touched.last_name && profFormik.errors.last_name)}
                                    helperText={profFormik.touched.last_name && profFormik.errors.last_name}
                                    onBlur={profFormik.handleBlur}
                                    onChange={profFormik.handleChange}
                                    value={profFormik.values.last_name}
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField fullWidth label="Email address" type="email"
                                    name="email"
                                    error={!!(profFormik.touched.email && profFormik.errors.email)}
                                    helperText={profFormik.touched.email && profFormik.errors.email}
                                    onBlur={profFormik.handleBlur}
                                    onChange={profFormik.handleChange}
                                    value={profFormik.values.email}
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                            <TextField fullWidth label="Mobile number" type="number"
                                    name="phone"
                                    error={!!(profFormik.touched.phone && profFormik.errors.phone)}
                                    helperText={profFormik.touched.phone && profFormik.errors.phone}
                                    onBlur={profFormik.handleBlur}
                                    onChange={profFormik.handleChange}
                                    value={profFormik.values.phone}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button onClick={profFormik.resetForm} variant="outlined">
                    Reset
                </Button>
                <Button variant="contained">
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
                                    <TextField fullWidth label="New password" type="text"
                                        name="n_password"
                                        error={!!(passFormik.touched.n_password && passFormik.errors.n_password)}
                                        helperText={passFormik.touched.n_password && passFormik.errors.n_password}
                                        onBlur={passFormik.handleBlur}
                                        onChange={passFormik.handleChange}
                                        value={passFormik.values.n_password}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                <TextField fullWidth label="Confirm new password" type="text"
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
                <Button type="submit" variant="contained">
                    Update Password
                </Button>
            </CardActions>
            </form>
        </Card>
    );
};
