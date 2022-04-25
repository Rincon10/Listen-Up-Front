import Feed from 'components/feed/Feed';
import Sidebar from 'components/ui/Sidebar';
import React from 'react';
import '../../css/home.css';

const HomeScreen = () => {
    return (
        <div className="app">
            <Sidebar />
            <Feed />
        </div>
    );
};

export default HomeScreen;
