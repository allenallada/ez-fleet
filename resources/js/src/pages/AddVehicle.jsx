import { useState } from 'react';
import {
    Box,
    Button,
    Stack,
    Typography,
    Unstable_Grid2 as Grid,
    Card,
    Container,
    CardContent,
    CardActions,
    Divider,
    Avatar,
    SvgIcon,
    Alert
} from '@mui/material';
import { Layout as DashboardLayout } from '../layout/dashboard/layout';
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import VehicleInformation from '../sections/vehicles/vehicle-information';
import { useFormik } from 'formik';
import AvatarSelect from '../sections/common/select-avatar-dialog';
import Vehicle from '../axios/vehicle';
import { vehicleConfig } from '../utils/avatar-list-config';
import { useDispatch } from 'react-redux';
import { updateToast } from '../../stores/admin-store';
import { getVehicleFormik } from '../utils/formik-config';

const AddVehicles = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [mode, setMode] = useState(false);
    const [event, setEvent] = useState(null);

    const avatarClick = (event) => {
        setEvent(event)
        setMode(true);
    }

    const onSubmit = async (values, helpers) => {
        Vehicle.addVehicle(values).then(res => res.data)
        .then((data) => {
            if(data.success) {
                dispatch(updateToast({
                    message : 'Vehicle Added!',
                    severity : 'success'
                }));
                navigate('/vehicles');
            } else {
                dispatch(updateToast({
                    message : data.message,
                    severity : 'error'
                }));
            }
        });
    }

    const formik = useFormik(getVehicleFormik(onSubmit));

    const selectHandler = (src) => {
        const event = {
            target : {
                value : src,
                name : 'image_src'
            }
        }
        formik.handleChange(event);
        formik.setFieldError('image_src');
    }

    return (
        <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
            {mode && <AvatarSelect selectHandler={selectHandler} config={vehicleConfig} event={event}/>}
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
                                <CardContent>
                                    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                                        <Avatar src={formik.values.image_src} sx={{ height: 80, mb: 2, width: 80 }}>
                                            <Avatar src={`${import.meta.env.VITE_APP_URL}/img/vehicles/fallback.png`} sx={{ height: 80, width: 80 }}/>
                                        </Avatar>
                                        <Typography gutterBottom variant="h5">
                                            {}
                                        </Typography>
                                        {!!(formik.touched.image_src && formik.errors.image_src) && (<Alert severity="error">Please Select an Avatar</Alert>)}
                                    </Box>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <>
                                        <Button fullWidth variant="outlined" onClick={avatarClick} >
                                            Select Avatar
                                        </Button>
                                    </>
                                </CardActions>
                            </Card>
                        </Grid>
                        <VehicleInformation formik={formik} />
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
