import Sidebar from 'components/ui/Sidebar';
import React from 'react';

const ForumScreen = ({ idForum }) => {
    return (
        <div className="app">
            <Sidebar />
            {idForum}
        </div>
    );
};

export default ForumScreen;
