import PropTypes from 'prop-types';
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

const Sidebar = ({ activeIndex = 0 }) => {
    const { dispatch } = useContext(UserContext);

    const handleLogout = () => {
        const action = { type: types.logout };
        dispatch(action);
    };

    return (
        <div className="sidebar">
            <LibraryMusicIcon className="sidebar__twitterIcon" />

            <SidebarOption
                name="home"
                active={activeIndex === 0}
                Icon={HomeIcon}
                text="Home"
            />
            <SidebarOption
                name="popular"
                active={activeIndex === 1}
                Icon={SearchIcon}
                text="Popular"
            />
            <SidebarOption
                name="profile"
                active={activeIndex === 3}
                Icon={PersonIcon}
                text="My Profile"
            />

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

Sidebar.propTypes = {
    activeIndex: PropTypes.number,
};

export default Sidebar;
