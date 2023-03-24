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
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateToast } from '../../../stores/admin-store';
import Admin from '../../axios/admin';
import AvatarSelect from '../../components/select-avatar-dialog';
import { profileConfig } from '../../utils/avatar-list-config';
  
export const AccountProfile = () => {

    const dispatch = useDispatch();
    const {details} = useSelector(state => {
        return  {details : state.admin.details}
    });

    //update mode
    const [mode, setMode] = useState(false);
    const [avatarSrc, setSrc] = useState(details.image_src);
    const [event, setEvent] = useState(null);

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

    useEffect(() => {
        setSrc(details.image_src);
    }, [details])
    
    const confirmHandler = () => {
        setMode(false);
        Admin.updAvatar({image_src : avatarSrc}).then(res => res.data)
        .then(data => {
            if (data.success === true) {
                dispatch(updateToast({
                    message : 'Avatar updated',
                    severity : 'success'
                }));
            } else {
                dispatch(updateToast({
                    message : 'Something went wrong',
                    severity : 'error'
                }));
            }
        });
    }

    return (
        <Card>
            {event && <AvatarSelect selectHandler={selectHandler} config={profileConfig} event={event}/>}
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
        </Card>
    )
};
  