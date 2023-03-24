import {
    Box,
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
    Unstable_Grid2 as Grid
} from '@mui/material';

export const PasswordForm = ({formik}) => {
    return (
        <>
            <CardHeader subheader="Update your password" title="Password" />
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                        
                            <Grid container spacing={3}>
                                <Grid xs={12} md={6}>
                                    <TextField fullWidth label="New password" type="password"
                                        name="n_password"
                                        error={!!(formik.touched.n_password && formik.errors.n_password)}
                                        helperText={formik.touched.n_password && formik.errors.n_password}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.n_password}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                <TextField fullWidth label="Confirm new password" type="password"
                                        name="c_password"
                                        error={!!(formik.touched.c_password && formik.errors.c_password)}
                                        helperText={formik.touched.c_password && formik.errors.c_password}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.c_password}
                                    />
                                </Grid>
                            </Grid>
                    </Box>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button disabled={!formik.dirty} type="submit" variant="contained">
                        Update Password
                    </Button>
                </CardActions>
            </form>
        </>
    )
}