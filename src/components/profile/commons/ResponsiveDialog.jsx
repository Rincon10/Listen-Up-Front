import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { types } from 'components/types/types';
import { useContext } from 'react';
import { UserContext } from 'context/UserContext';

const ResponsiveDialog = ({ label = 'Edit Profile' }) => {
    const theme = useTheme();
    const title = 'Edit your profile';
    const { user, dispatch } = useContext(UserContext);

    const [bio, setBio] = useState('');
    const [open, setOpen] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = event => {
        const { value } = event.target;
        setBio(value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = () => {
        user.bio = bio;
        const action = { type: types.login, payload: user };
        dispatch(action);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                {label}
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            id="edit-profile-form"
                            component="form"
                            sx={{ m: 1 }}
                        >
                            <label>Edit Your Bio</label>
                            <textarea
                                name="textarea"
                                id="text-area"
                                cols="30"
                                rows="10"
                                style={{ width: '497px', height: '376px' }}
                                onChange={handleChange}
                            ></textarea>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleUpdate}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

ResponsiveDialog.propTypes = {
    label: PropTypes.string,
};
export default ResponsiveDialog;
