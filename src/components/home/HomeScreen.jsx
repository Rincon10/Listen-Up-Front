import React from 'react';
import Feed from '../../components/feed/Feed';
import Forums from '../../components/forum/Forums';
import Sidebar from '../../components/ui/Sidebar';

import '../../css/home.css';

const HomeScreen = () => {
    return (
        <div className="app">
            <Sidebar />
            <Feed component={<Forums />} />
        </div>
    );
};

export default HomeScreen;
