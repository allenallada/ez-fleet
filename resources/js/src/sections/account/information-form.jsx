import {
    Box,
    Button,
    CardActions,
    CardContent,
    CardHeader,
    TextField,
    Unstable_Grid2 as Grid
} from '@mui/material';

export const InformationForm = ({formik}) => {
    return (
        <>
            <CardHeader subheader="Update your information" title="Profile" />
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                        <Grid container spacing={3}>
                            <Grid xs={12} md={6}>
                                <TextField fullWidth label="First name *" type="text"
                                    name="first_name"
                                    error={!!(formik.touched.first_name && formik.errors.first_name)}
                                    helperText={formik.touched.first_name && formik.errors.first_name}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.first_name}
                                />
                            </Grid>
                            <Grid xs={12} md={6} >
                                <TextField fullWidth label="Last name *" type="text"
                                    name="last_name"
                                    error={!!(formik.touched.last_name && formik.errors.last_name)}
                                    helperText={formik.touched.last_name && formik.errors.last_name}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.last_name}
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField fullWidth label="Email address"
                                    name="email"
                                    error={!!(formik.touched.email && formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                            <TextField fullWidth label="Mobile number"
                                    name="mobile"
                                    error={!!(formik.touched.mobile && formik.errors.mobile)}
                                    helperText={formik.touched.mobile && formik.errors.mobile}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.mobile}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button disabled={!formik.dirty} onClick={formik.resetForm} variant="outlined">
                        Reset
                    </Button>
                    <Button disabled={!formik.dirty} type="submit" variant="contained">
                        Save details
                    </Button>
                </CardActions>
            </form>
        </>
    )
}