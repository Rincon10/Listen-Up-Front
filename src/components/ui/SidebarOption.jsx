import handleNavigate from 'components/helpers/navigate';
import React from 'react';
import '../../css/sideBarOption.css';

const SidebarOption = ({ active, text, Icon, name }) => {
    return (
        <div
            className={`sidebarOption ${active && 'sidebarOption--active'}`}
            onClick={() => {
                handleNavigate(name);
            }}
        >
            <Icon />
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;
