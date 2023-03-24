import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    Chip
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';

export const VehiclesTable = (props) => {
    const {
        count = 0,
        items = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => {},
        onRowsPerPageChange,
        onSelectAll,
        onSelectOne,
        page = 1,
        rowsPerPage = 0,
        selected = []
    } = props;

    const selectedSome = (selected.length > 0) && (selected.length < items.length);
    const selectedAll = (items.length > 0) && (selected.length === items.length);
    return (
        <Card>
            <Box sx={{ minWidth: 800 }}>
                <Scrollbar style={{maxHeight : '55vh'}}>
                    <Table>
                        <TableHead style={{position:'sticky', top: '0', zIndex:'9999'}}>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox checked={selectedAll} indeterminate={selectedSome} onChange={(event) => {
                                            if (selectedSome) {
                                                onDeselectAll?.();
                                            } else {
                                                selectedAll && onDeselectAll?.();
                                                !selectedAll && onSelectAll?.();
                                            }
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" justifyContent="center">
                                        Plate Number
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" justifyContent="center">
                                        Brand
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" justifyContent="center">
                                        Model
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" justifyContent="center">
                                        Status
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" justifyContent="center">
                                        Driver
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" justifyContent="center">
                                        Date Added
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((vehicle) => {
                                const createdAt = format(new Date(vehicle.creation_date), 'dd/MM/yyyy');
                                const isSelected = selected.includes(vehicle.vehicle_no);
                                return (
                                    <TableRow hover key={vehicle.vehicle_no} selected={isSelected} >
                                        <TableCell padding="checkbox">
                                            <Checkbox style={{zIndex:'1'}} checked={isSelected}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        onSelectOne?.(vehicle.vehicle_no);
                                                    } else {
                                                        onDeselectOne?.(vehicle.vehicle_no);
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" justifyContent="center">
                                                <Stack alignItems="center" direction="row" spacing={2} >
                                                    <Avatar style={{zIndex:'1'}} src={vehicle.image_src}>
                                                        {vehicle.plate_number}
                                                        {/* {getInitials(customer.name)} */}
                                                    </Avatar>
                                                    <Typography variant="subtitle2">
                                                        {/* {vehicle.driver.name} */}
                                                        {vehicle.plate_number}
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" justifyContent="center">
                                                {vehicle.brand}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" justifyContent="center">
                                                {vehicle.model}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" justifyContent="center">
                                                {vehicle.status === 'active' &&  <Chip label="Active" color="success" />}
                                                {vehicle.status === 'inactive' &&  <Chip label="Inactive" />}
                                                {vehicle.status === 'repair' &&  <Chip label="For Repair" color="error" />}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" justifyContent="center">
                                                not set
                                            </Box>
                                            {/* <Stack alignItems="center" direction="row" spacing={2} > */}
                                                {/* <Avatar style={{zIndex:'1'}} src={vehicle.image_src}> */}
                                                    {/* test */}
                                                    {/* {getInitials(customer.name)} */}
                                                {/* </Avatar> */}
                                                {/* <Typography variant="subtitle2"> */}
                                                    {/* {vehicle.driver.name} */}
                                                    {/* test */}
                                                {/* </Typography> */}
                                            {/* </Stack> */}
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" justifyContent="center">
                                                {createdAt}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Scrollbar>
            </Box>
            <TablePagination
                component="div"
                count={count}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

VehiclesTable.propTypes = {
    count: PropTypes.number,
    items: PropTypes.array,
    onDeselectAll: PropTypes.func,
    onDeselectOne: PropTypes.func,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    onSelectAll: PropTypes.func,
    onSelectOne: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    selected: PropTypes.array,
    loading : PropTypes.bool
};
