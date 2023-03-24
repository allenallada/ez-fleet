import { Divider, Unstable_Grid2 as Grid, Avatar, Button, Dialog, DialogContent, Box,  DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";

const AvatarSelect = (props) => {

    const {event, selectHandler, config} = props;

    const domain = import.meta.env.VITE_APP_URL;

    const [open, setOpen] = useState(false);

    const close = () => {
        setOpen(false);
    }

    useEffect(()=> {
        setOpen(true);
    }, [event])

    const confirm = (src) => {
        selectHandler(src);
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle display="flex" justifyContent="center">Select an Avatar</DialogTitle>
            <Divider />
            <DialogContent>
                <Box>
                    <Grid container justifyContent="center">
                        {
                            config.avatarList.map(avatar => (
                                <Grid display="flex" justifyContent="center" mx={0} xs={config.gridConfig.xs} md={config.gridConfig.md} sm={config.gridConfig.sm}>
                                    <Button padding="0" variant="standard" type="submit" onClick={() => confirm(avatar)}>
                                        <Avatar sx={{ height: config.avatarDimension.height, width: config.avatarDimension.width }} src={avatar}/>
                                    </Button>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default AvatarSelect;