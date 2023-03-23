import { useState } from 'react';
import {
    Box,
    Button,
    Stack,
    TextField,
    Typography,
    Unstable_Grid2 as Grid,
    Card,
    Container,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Avatar,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    SvgIcon
} from '@mui/material';
import { Layout as DashboardLayout } from '../layout/dashboard/layout';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Admin from '../axios/admin';
import nProgress from 'nprogress';

const AddVehicles = () => {

    const navigate = useNavigate();

    return (
        <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
            <Container maxWidth="lg">
            <Stack spacing={3}>
                <Stack direction="row" justifyContent="space-between" spacing={4} >
                    <Button variant="outlined" onClick={() => navigate('/vehicles')}
                        startIcon={( <SvgIcon fontSize="small"> <ArrowLeftIcon /> </SvgIcon> )}> 
                        Back
                    </Button>
                </Stack>
                <Stack>
                    <Grid container spacing={3} >
                        <Grid  xs={12} md={6} lg={4} >
                            <Card>
                                {/* <ToastAlert toast={toast} /> */}
                                {/* {event && <AvatarSelect selectHandler={selectHandler} event={event}/>} */}
                                <CardContent>
                                    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                                    <Avatar sx={{ height: 80, mb: 2, width: 80 }}>
                                        <Avatar src={`${import.meta.env.VITE_APP_URL}/img/vehicles/fallback.png`} sx={{ height: 80, width: 80 }}/>
                                    </Avatar>
                                    <Typography gutterBottom variant="h5">
                                        {}
                                    </Typography>
                                    </Box>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <>
                                        <Button fullWidth variant="outlined" >
                                            Select Avatar
                                        </Button>
                                    </>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid xs={12} md={6} lg={8} >
                            <Card>
                                <CardHeader subheader="Enter your vehicle information" title="Vehicle Information" />
                                <form autoComplete="off" >
                                    <CardContent sx={{ pt: 0 }}>
                                        <Box sx={{ m: -1.5 }}>
                                            <Grid container spacing={3}>
                                                <Grid xs={12}>
                                                    <TextField fullWidth label="Plate Number *" type="text"
                                                        name="plate_number"
                                                    />
                                                </Grid>
                                                <Grid xs={12}>
                                                    <TextField fullWidth label="Brand *" type="text"
                                                        name="brand"
                                                    />
                                                </Grid>
                                                <Grid xs={12}>
                                                    <TextField fullWidth label="Model *" type="text"
                                                        name="model"
                                                    />
                                                </Grid>
                                                <Grid xs={12}>
                                                    <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="row-radio-buttons-group"
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
                    </Grid>
                </Stack>
            </Stack>
            </Container>
        </Box>
        
    );
}

AddVehicles.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
);

export default AddVehicles;
