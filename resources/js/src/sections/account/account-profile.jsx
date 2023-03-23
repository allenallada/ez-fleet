import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Admin from '../../axios/admin';
import AvatarSelect from '../../components/select-avatar-dialog';
import { ToastAlert } from '../../components/toast-alert';
  
export const AccountProfile = () => {

    const {details} = useSelector(state => {
        return  {details : state.admin.details}
    });

    //update mode
    const [mode, setMode] = useState(false);
    const [avatarSrc, setSrc] = useState(details.image_src);

    const [event, setEvent] = useState(null);

    const [toast, setToast] = useState({
        message : '',
        severity : 'success'
    });

    const avatarClick = (event) => {
        setEvent(event);
    }

    const selectHandler = (src) => {
        if (src !== avatarSrc) {
            setMode(true);
            setSrc(src);
        }

    }

    const cancelHandler = () => {
        setMode(false);
        setSrc(details.image_src);
    }
    
    const confirmHandler = () => {
        setMode(false);
        Admin.updAvatar({image_src : avatarSrc}).then(res => res.data)
        .then(data => {
            if (data.success === true) {
                setToast({
                    message : 'Avatar updated',
                    severity : 'success'
                })
            } else {
                setToast({
                    message : 'Something went wrong',
                    severity : 'error'
                })
            }
        });
    }

    return (<Card>
        <ToastAlert toast={toast} />
        {event && <AvatarSelect selectHandler={selectHandler} event={event}/>}
        <CardContent>
            <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <Avatar src={avatarSrc} sx={{ height: 80, mb: 2, width: 80 }}
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
            {
                !mode && (
                    <>
                        <Button onClick={avatarClick} fullWidth variant="contained" >
                            Change Avatar
                        </Button>
                    </>
                )
            }
            {
                mode && (
                <>
                    <Button onClick={cancelHandler} fullWidth variant="outlined" >
                        Cancel
                    </Button>
                    <Button onClick={confirmHandler} fullWidth variant="contained" >
                        Confirm
                    </Button>
                </>
                )
            }
                
        </CardActions>
    </Card>)
};
  