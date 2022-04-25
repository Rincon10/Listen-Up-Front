import React from 'react';
import '../../css/sideBarOption.css';

const SidebarOption = ({ active, text, Icon, name }) => {
    const handleClick = event => {
        window.location.href = `${name}`;
    };

    return (
        <div
            className={`sidebarOption ${active && 'sidebarOption--active'}`}
            onClick={handleClick}
        >
            <Icon />
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;
