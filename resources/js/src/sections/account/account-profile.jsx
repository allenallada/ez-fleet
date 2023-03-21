import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
  
export const AccountProfile = () => {

    const {details} = useSelector(state => {
        return  {details : state.admin.details}
    });

    return (<Card>
        <CardContent>
            <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <Avatar src={details.image_src} sx={{ height: 80, mb: 2, width: 80 }}
            />
            <Typography gutterBottom variant="h5">
                {details.user_name}
            </Typography>
            <Typography color="text.secondary" variant="body2" >
                Admin
            </Typography>
            </Box>
        </CardContent>
        <Divider />
        <CardActions>
            <Button fullWidth variant="text" >
                Upload picture
            </Button>
        </CardActions>
    </Card>)
};
  