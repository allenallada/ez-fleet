import {
    Box,
    Button,
    Typography,
    Unstable_Grid2 as Grid,
    Card,
    CardContent,
    CardActions,
    Divider,
    Avatar,
    Alert
} from '@mui/material';
import { useState } from 'react';
import AvatarSelect from './select-avatar-dialog';

const AvatarView = (props) => {
    const {formik, fallback = '', config } = props;

    const [mode, setMode] = useState(false);
    const [event, setEvent] = useState(null);

    const selectHandler = (src) => {
        const event = {
            target : {
                value : src,
                name : 'image_src'
            }
        }
        formik.handleChange(event);
        formik.setFieldError('image_src');
    }

    const avatarClick = (event) => {
        setEvent(event)
        setMode(true);
    }

    return (
        <Grid  xs={12} md={6} lg={4} >
            {mode && <AvatarSelect selectHandler={selectHandler} config={config} event={event}/>}
            <Card>
                <CardContent>
                    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                        <Avatar src={formik.values.image_src} sx={{ height: 80, mb: 2, width: 80 }}>
                            <Avatar src={fallback} sx={{ height: 80, width: 80 }}/>
                        </Avatar>
                        <Typography gutterBottom variant="h5">
                            {}
                        </Typography>
                        {!!(formik.touched.image_src && formik.errors.image_src) && (<Alert severity="error">Please Select an Avatar</Alert>)}
                    </Box>
                </CardContent>
                <Divider />
                <CardActions>
                    <>
                        <Button fullWidth variant="outlined" onClick={avatarClick} >
                            Select Avatar
                        </Button>
                    </>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default AvatarView;