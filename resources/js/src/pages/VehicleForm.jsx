import {
    Box,
    Button,
    Stack,
    Unstable_Grid2 as Grid,
    Container,
    SvgIcon
} from '@mui/material';
import { Layout as DashboardLayout } from '../layout/dashboard/layout';
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import VehicleInformation from '../sections/vehicles/vehicle-information';
import { useFormik } from 'formik';
import Api from '../axios/vehicle';
import { vehicleConfig } from '../utils/avatar-list-config';
import { useDispatch } from 'react-redux';
import { updateToast } from '../../stores/admin-store';
import { getVehicleFormik } from '../utils/formik-config';
import AvatarView from '../sections/common/avatar-view';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const VehicleForm = ({edit = false}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {form} = useSelector(state => {
        return {
            form : state.vehicle.form
        }
    });

    useEffect(() => {
        form === !edit && navigate('/vehicles');
    }, [edit]);

    const values = edit === false ? {
        plate_number : '',
        brand : '',
        model : '',
        status : 'active',
        image_src : ''
    } : form;
    
    const onSubmit = async (values, helpers) => {
        if (edit === false) {
            Api.addVehicle(values).then(res => res.data)
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
        } else {
            values.vehicle_no = form.vehicle_no;
            Api.updateVehicle(values).then(res => res.data)
            .then((data) => {
                if(data.success) {
                    dispatch(updateToast({
                        message : 'Vehicle Updated!',
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
        
    }

    const formik = useFormik(getVehicleFormik(values, onSubmit));

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
                        <AvatarView config={vehicleConfig} formik={formik} fallback={`${import.meta.env.VITE_APP_URL}/img/vehicles/fallback.png`} />
                        <VehicleInformation edit={edit} formik={formik} />
                    </Grid>
                </Stack>
            </Stack>
            </Container>
        </Box>
    );
}

VehicleForm.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default VehicleForm;
