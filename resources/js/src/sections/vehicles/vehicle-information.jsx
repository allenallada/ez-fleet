import {
    Box,
    Button,
    TextField,
    Unstable_Grid2 as Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';

const VehicleInformation = ({formik}) => {

    return (
        <Grid xs={12} md={6} lg={8} >
            <Card>
                <CardHeader subheader="Enter your vehicle information" title="Vehicle Information" />
                <form autoComplete="off" onSubmit={formik.handleSubmit} >
                    <CardContent sx={{ pt: 0 }}>
                        <Box sx={{ m: -1.5 }}>
                            <Grid container spacing={3}>
                                <Grid xs={12}>
                                    <TextField fullWidth label="Plate Number *" type="text"
                                        error={!!(formik.touched.plate_number && formik.errors.plate_number)}
                                        helperText={formik.touched.plate_number && formik.errors.plate_number}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.plate_number}
                                        name="plate_number"
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <TextField fullWidth label="Brand *" type="text"
                                        error={!!(formik.touched.brand && formik.errors.brand)}
                                        helperText={formik.touched.brand && formik.errors.brand}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.brand}
                                        name="brand"
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <TextField fullWidth label="Model *" type="text"
                                        error={!!(formik.touched.model && formik.errors.model)}
                                        helperText={formik.touched.model && formik.errors.model}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.model}
                                        name="model"
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                                    <RadioGroup
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="status"
                                    >
                                        <FormControlLabel value="active" control={<Radio />} label="Active" />
                                        <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
                                        <FormControlLabel value="repair" control={<Radio />} label="For Repair" />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button type="submit" variant="contained">
                        Add Vehicle
                    </Button>
                </CardActions>
                </form>
            </Card>
        </Grid>
    )
}

export default VehicleInformation;