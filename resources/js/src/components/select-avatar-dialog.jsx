import { Divider, Unstable_Grid2 as Grid, Avatar, Button, Dialog, DialogContent, Box,  DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";

const AvatarSelect = (props) => {

    const {event, selectHandler} = props;

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

    const avatars = [
        `${domain}/img/avatars/avatar-alcides-antonio.png`,
        `${domain}/img/avatars/avatar-anika-visser.png`,
        `${domain}/img/avatars/avatar-cao-yu.png`,
        `${domain}/img/avatars/avatar-carson-darrin.png`,
        `${domain}/img/avatars/avatar-chinasa-neo.png`,
        `${domain}/img/avatars/avatar-fran-perez.png`,
        `${domain}/img/avatars/avatar-iulia-albu.png`,
        `${domain}/img/avatars/avatar-jane-rotanson.png`,
        `${domain}/img/avatars/avatar-jie-yan-song.png`,
        `${domain}/img/avatars/avatar-marcus-finn.png`,
        `${domain}/img/avatars/avatar-miron-vitold.png`,
        `${domain}/img/avatars/avatar-nasimiyu-danai.png`,
        `${domain}/img/avatars/avatar-neha-punita.png`,
        `${domain}/img/avatars/avatar-omar-darboe.png`,
        `${domain}/img/avatars/avatar-penjani-inyene.png`,
        `${domain}/img/avatars/avatar-seo-hyeon-ji.png`,
        `${domain}/img/avatars/avatar-siegbert-gottfried.png`,
    ]

    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle display="flex" justifyContent="center">Select an Avatar</DialogTitle>
            <Divider />
            <DialogContent>
                <Box>
                    <Grid container spacing={1} display="flex" justifyContent="center">
                        {
                            avatars.map(avatar => (
                                <Grid xs={3} md={2} >
                                    <Button variant="standard" type="submit" onClick={() => confirm(avatar)}>
                                        <Avatar sx={{ height: 60, width: 60 }} src={avatar}/>
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