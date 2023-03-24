import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout as DashboardLayout } from '../layout/dashboard/layout';
import { AccountProfile } from '../sections/account/account-profile';
import { AccountProfileDetails } from '../sections/account/account-profile-details';
import { useDispatch } from "react-redux"
import { updateDetails } from "../../stores/admin-store";
import Auth from '../axios/auth';

const Account = () => {
    const dispatch = useDispatch();
    const {details} = useSelector(state => {
        return  {details : state.admin.details}
    });

    const reloadDetails = () => {
        dispatch(updateDetails(false));
        Auth.details().then(res => res.data).then(data => {
            dispatch(updateDetails(data));
        })
    }
    
    useEffect(reloadDetails, []);

    return (details && 
    <>
        <Box  component="main" sx={{ flexGrow: 1, py: 8 }} >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <div>
                        <Typography variant="h4">
                            Account
                        </Typography>
                    </div>
                    <div>
                        <Grid container spacing={3} >
                            <Grid  xs={12} md={6} lg={4} >
                                <AccountProfile />
                            </Grid>
                            <Grid xs={12} md={6} lg={8} >
                                <AccountProfileDetails />
                            </Grid>
                        </Grid>
                    </div>
                </Stack>
            </Container>
        </Box>
    </>)
};

Account.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);


export default Account;
