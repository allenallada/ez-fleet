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
    Typography
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
        page = 0,
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
                                            if (event.target.checked) {
                                                onSelectAll?.();
                                            } else {
                                                onDeselectAll?.();
                                            }
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    Plate Number
                                </TableCell>
                                <TableCell>
                                    Brand
                                </TableCell>
                                <TableCell>
                                    Model
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                                <TableCell>
                                    Driver
                                </TableCell>
                                <TableCell>
                                    Added
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((vehicle) => {
                                const isSelected = selected.includes(vehicle.id);
                                return (
                                    <TableRow hover key={vehicle.id} selected={isSelected} >
                                        <TableCell padding="checkbox">
                                            <Checkbox style={{zIndex:'1'}} checked={isSelected}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        onSelectOne?.(vehicle.id);
                                                    } else {
                                                        onDeselectOne?.(vehicle.id);
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {vehicle.plate_number}
                                        </TableCell>
                                        <TableCell>
                                            {vehicle.brand}
                                        </TableCell>
                                        <TableCell>
                                            {vehicle.model}
                                        </TableCell>
                                        <TableCell>
                                            {vehicle.status}
                                        </TableCell>
                                        <TableCell>
                                            <Stack alignItems="center" direction="row" spacing={2} >
                                                <Avatar style={{zIndex:'1'}} src={vehicle.driver.avatar}>
                                                    {vehicle.driver.name}
                                                    {/* {getInitials(customer.name)} */}
                                                </Avatar>
                                                <Typography variant="subtitle2">
                                                    {vehicle.driver.name}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>
                                            {vehicle.created_at}
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
    selected: PropTypes.array
};
