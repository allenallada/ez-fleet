import { Layout as DashboardLayout } from '../layout/dashboard/layout';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { VehiclesTable } from '../sections/vehicles/vehicle-table';
import { useCallback, useMemo, useState } from 'react';
import { useSelection } from '../utils/use-selection';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const data = [
//     {
//         vehicle_no: '5e887ac47eed253091be10cb',
//         plate_number: 'NA66039',
//         brand: 'Toyota',
//         model: 'Corolla V2',
//         status: 'Active',
//         driver : {
//             avatar : '',
//             name : 'test'
// 	    },
//         created_at: '12-03-2022'
//     }
// ];

const applyPagination = (documents, page, rowsPerPage) => {
    return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

const useVehicles = (data, page, rowsPerPage) => {
    return useMemo(
        () => {
            return applyPagination(data, page, rowsPerPage);
        },
        [page, rowsPerPage]
    );
};

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
    const {data} = useSelector(state => {
        return {
            data : state.vehicle.vehicles
        }
    });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const vehicles = useVehicles(data, page, rowsPerPage);
    const vehicleIds = useVehicleIds(vehicles);
    const vehicleSelection = useSelection(vehicleIds);

    const handlePageChange = useCallback(
        (event, value) => {
            setPage(value);
        },
        []
    );

    const handleRowsPerPageChange = useCallback(
        (event) => {
            setRowsPerPage(event.target.value);
        },
        []
      );

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
                        count={data.length}
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
