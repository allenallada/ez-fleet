import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';

const Confirm = (props) => {

    const {
        confirmHandler,
        closeHandler,
        open,
        title,
        content,
        showCancel,
        tf_id,
        tf_label,
        tf_type,
        useTextField
    } = props;

    const [value, changeVal] = useState('');

    const close = (e) => {
        changeVal('');
        closeHandler(e, value);
    }

    const confirm = (e) => {
        confirmHandler(e, value);
        changeVal('');
    }

    return (
        <Dialog fullWidth open={open} onClose={close}>
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
                {useTextField && <TextField
                    autoFocus
                    margin="dense"
                    id={tf_id}
                    label={tf_label}
                    type={tf_type}
                    fullWidth
                    value={value}
                    onChange={(e) => changeVal(e.target.value)}
                />}
            </DialogContent>
            <DialogActions>
                {showCancel && <Button variant="outlined" onClick={close}>Cancel</Button>}
                <Button variant="contained" type="submit" onClick={confirm}>Confirm</Button>
        </DialogActions>
  </Dialog>)
}

Confirm.propTypes = {
    confirmHandler : PropTypes.func,
    closeHandler : PropTypes.func,
    open : PropTypes.bool,
    title : PropTypes.string,
    content : PropTypes.string,
    tf_id : PropTypes.string,
    tf_label : PropTypes.string,
    tf_type : PropTypes.string,
    showCancel : PropTypes.bool,
}

Confirm.defaultProps = {
    confirmHandler : () => {},
    closeHandler : () => {},
    open : false,
    title : 'Before updating...',
    content : 'We must confirm that it\'s you, please enter your password',
    tf_id : 'password',
    tf_label : 'Enter your password',
    tf_type : 'password',
    showCancel : true,
    useTextField : true
}

export default Confirm;