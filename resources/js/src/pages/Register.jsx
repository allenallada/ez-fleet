import { useState } from 'react';
import {
    Box,
    Button,
    Link,
    Stack,
    TextField,
    Typography,
    Grid
} from '@mui/material';
import { Layout as AuthLayout} from '../layout/auth/Layout';
import { Link as ReactLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Auth from '../api/auth';

const Register = () => {

    const formik = useFormik({
        initialValues: {
            userName: '',
            firstName: '',
            lastName: '',
            password: '',
            cPassword: '',
            submit: null
        },
        validationSchema: Yup.object({
            userName: Yup.string()
            .max(20)
            .min(3)
            .required('Username is required'),
            firstName: Yup.string()
            .max(50)
            .required('First Name is required'),
            lastName: Yup.string()
            .max(50)
            .min(3),
            password: Yup.string()
            .max(50)
            .min(8)
            .required('Password is required'),
            cPassword: Yup.string()
            .max(50)
            .min(8)
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: async (values, helpers) => {
            Auth.post('/register', values).then(response => {
                console.log(response)
            }

            );
        }
      });


    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <AuthLayout>
            <Box
                sx={{ backgroundColor: 'background.paper', flex: '1 1 auto', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <Box sx={{ maxWidth: 550, px: 3, py: '100px', width: '100%' }}
                >
                <div>
                    <Stack spacing={1} sx={{ mb: 3 }} >
                    <Typography variant="h4">
                        Register
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        Already Have an Account? &nbsp;
                        <Link component={ReactLink} to="/" underline="hover" variant="subtitle2">
                             Sign In Here
                        </Link>
                    </Typography>
                    </Stack>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={3}>
                            <TextField fullWidth label="User Name" name="userName" type="text" 
                                error={!!(formik.touched.userName && formik.errors.userName)}
                                helperText={formik.touched.userName && formik.errors.userName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.userName}
                            />
                            <Grid container>
                                <Grid xs={12} md={6}>
                                    <TextField fullWidth label="First Name" name="firstName" type="text"
                                        error={!!(formik.touched.firstName && formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                    />
                                </Grid>
                                <Grid xs={12} md={6} mt={{ xs: 3, md: 0}}>
                                    <TextField fullWidth pr={2} label="Last Name" name="lastName" type="text"
                                    error={!!(formik.touched.lastName && formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                    />
                                </Grid>
                            </Grid>
                            <TextField label="Password" name="password" type="password"
                                error={!!(formik.touched.password && formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <TextField label="Confirm Password" name="cPassword" type="password"
                                error={!!(formik.touched.cPassword && formik.errors.cPassword)}
                                helperText={formik.touched.cPassword && formik.errors.cPassword}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.cPassword}
                            />
                        </Stack>
                        <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained" >
                            Sign Up!
                        </Button>
                    </form>
                </div>
                </Box>
            </Box>
        </AuthLayout>
        
    );
}

export default Register;
