import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

export const ToastAlert = ({toast}) => {

    const [open, setOpen] = useState(false);

    const closeHandler = () => {
        setOpen(false);
    }

    useEffect(() => {
        toast.message.length !== 0 && (() => {
            setOpen(true);
        })();
    }, [toast]);

    return (
        <Snackbar open={open} onClose={closeHandler} autoHideDuration={4000} anchorOrigin={{vertical : 'top', horizontal :'center'}}>
            <Alert onClose={closeHandler} severity={toast.severity} sx={{ width: '100%' }}>
                {toast.message}
            </Alert>
        </Snackbar>
    )
}