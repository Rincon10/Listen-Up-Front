import React from 'react';

import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/ui/Sidebar';
import Forums from '../../components/forum/Forums';

import '../../css/home.css';

const HomeScreen = () => {
    return (
        <div className="app">
            <Sidebar />
            <Feed component={<Forums all={false} />} />
        </div>
    );
};

export default HomeScreen;
