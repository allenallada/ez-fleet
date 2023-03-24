import { Layout as DashboardLayout } from '../layout/dashboard/layout';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { VehiclesTable } from '../sections/vehicles/vehicle-table';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelection } from '../utils/use-selection';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Vehicle from '../axios/vehicle';
import { useDispatch } from 'react-redux';
import { updateCount, updateVehicles } from '../../stores/admin-store';

const useVehicleIds = (vehicles) => {
    return useMemo(
      () => {
        return vehicles.map((vehicles) => vehicles.vehicle_no);
      },
      [vehicles]
    );
  };

const Vehicles = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {vehicles, count} = useSelector(state => {
        return {
            vehicles : state.vehicle.vehicles,
            count : state.vehicle.count
        }
    });

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [loading, setLoading] = useState(false);
    const vehicleIds = useVehicleIds(vehicles);
    const vehicleSelection = useSelection(vehicleIds);

    const handlePageChange = useCallback(
        (event, value) => {
            setPage(value);
        },[]
    );

    const handleRowsPerPageChange = useCallback(
        (event) => {
            setPage(0);
            setRowsPerPage(event.target.value);
        },[]
    );

    const getVehicles = () => {
        const searchParams = {
            limit : rowsPerPage,
            offset : page * rowsPerPage
        }
        Vehicle.getVehicles(searchParams).then(res => res.data).then(data => {
            dispatch(updateVehicles(data));
        });
        Vehicle.getCount(searchParams).then(res => res.data).then(data => {
            dispatch(updateCount(data.count));
        });
    };

    useEffect(getVehicles, [page, rowsPerPage]);

    return (
        <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <Stack direction="row" justifyContent="space-between" spacing={4} >
                        <Stack spacing={1}>
                            <Typography variant="h4">
                                Vehicles
                            </Typography>
                        </Stack>
                        <div>
                            <Button onClick={() => navigate('/add-vehicle')} startIcon={( <SvgIcon fontSize="small"> <PlusIcon /> </SvgIcon> )} variant="contained">
                                Add
                            </Button>
                        </div>
                    </Stack>
                    <VehiclesTable
                        count={count}
                        items={vehicles}
                        onDeselectAll={vehicleSelection.handleDeselectAll}
                        onDeselectOne={vehicleSelection.handleDeselectOne}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                        onSelectAll={vehicleSelection.handleSelectAll}
                        onSelectOne={vehicleSelection.handleSelectOne}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        selected={vehicleSelection.selected}
                        loading={loading}
                    />
                </Stack>
            </Container>
        </Box>
    );
}

Vehicles.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Vehicles;
