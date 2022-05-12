import React, { useContext } from 'react';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@material-ui/core';
import { UserContext } from 'context/UserContext';
import { types } from 'components/types/types';

import '../../css/sideBar.css';

const Sidebar = () => {
    const { dispatch } = useContext(UserContext);

    const handleLogout = () => {
        const action = { type: types.logout };
        dispatch(action);
    };

    return (
        <div className="sidebar">
            <LibraryMusicIcon className="sidebar__twitterIcon" />

            <SidebarOption name="home" active Icon={HomeIcon} text="Home" />
            <SidebarOption name="popular" Icon={SearchIcon} text="Popular" />
            <SidebarOption name="profile" Icon={PersonIcon} text="My Profile" />

            <Button
                variant="outlined"
                className="sidebar__tweet"
                fullWidth
                onClick={handleLogout}
            >
                Log Out
            </Button>
        </div>
    );
};

export default Sidebar;
