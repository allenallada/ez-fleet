import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Layout as DashboardLayout } from '../layout/dashboard/layout';
import { AccountProfile } from '../sections/account/account-profile';
import { AccountProfileDetails } from '../sections/account/account-profile-details';
import { accountFetch } from '../utils/account';

const Account = () => {

    const {details} = useSelector(state => {
        return  {details : state.admin.details}
    });

    !details && accountFetch();

    return (details && <>
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
