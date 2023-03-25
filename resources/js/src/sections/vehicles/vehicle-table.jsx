import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    Chip,
    SvgIcon,
    IconButton,
    Stack
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import TrashIcon from '@heroicons/react/24/solid/TrashIcon';
import PencilSquareIcon from '@heroicons/react/24/solid/PencilSquareIcon';

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
        selected = [],
        onDeleteOne,
        onEdit
    } = props;

    const selectedSome = (selected.length > 0) && (selected.length < items.length);
    const selectedAll = (items.length > 0) && (selected.length === items.length);
    return (
        <Card>
            <Box sx={{ minWidth: 800 }}>
                <Scrollbar style={{maxHeight : '55vh'}}>
                    <Table stickyHeader >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" padding="checkbox">
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
                                <TableCell align="center">
                                        Avatar
                                </TableCell>
                                <TableCell align="center">
                                        Plate Number
                                </TableCell>
                                <TableCell align="center">
                                        Brand
                                </TableCell>
                                <TableCell align="center">
                                        Model
                                </TableCell>
                                <TableCell align="center">
                                        Status
                                </TableCell>
                                <TableCell align="center">
                                        Driver
                                </TableCell>
                                <TableCell align="center">
                                        Date Added
                                </TableCell>
                                <TableCell  size="small" padding="none"/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.length === 0 &&
                                <TableRow>
                                    <TableCell align="center" colSpan="8">
                                        No vehicles found
                                    </TableCell>
                                </TableRow>
                            }
                            {items.map((vehicle) => {
                                const createdAt = format(new Date(vehicle.creation_date), 'dd/MM/yyyy');
                                const isSelected = selected.includes(vehicle.vehicle_no);
                                return (
                                    <TableRow hover key={vehicle.vehicle_no} selected={isSelected} >
                                        <TableCell padding="checkbox">
                                            <Checkbox  checked={isSelected}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        onSelectOne?.(vehicle.vehicle_no);
                                                    } else {
                                                        onDeselectOne?.(vehicle.vehicle_no);
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Stack justifyContent="center" alignItems="center" direction="row" spacing={1} >
                                                <Avatar src={vehicle.image_src}>
                                                    {vehicle.plate_number}
                                                </Avatar>
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="subtitle2">
                                                {vehicle.plate_number}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            {vehicle.brand}
                                        </TableCell>
                                        <TableCell align="center">
                                                {vehicle.model}
                                        </TableCell>
                                        <TableCell align="center">
                                            {vehicle.status === 'active' &&  <Chip label="Active" color="success" />}
                                            {vehicle.status === 'inactive' &&  <Chip label="Inactive" />}
                                            {vehicle.status === 'repair' &&  <Chip label="For Repair" color="error" />}
                                        </TableCell>
                                        <TableCell align="center">
                                            not set
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
                                        <TableCell align="center">
                                                {createdAt}
                                        </TableCell>
                                        <TableCell align="center" size="small"  padding="none">
                                            <IconButton color="primary" onClick={() => onEdit(vehicle)}>
                                                <SvgIcon>
                                                    <PencilSquareIcon />
                                                </SvgIcon>
                                            </IconButton >
                                            <IconButton color="error" onClick={() => onDeleteOne(vehicle.vehicle_no)}>
                                                <SvgIcon>
                                                    <TrashIcon />
                                                </SvgIcon>
                                            </IconButton >
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
