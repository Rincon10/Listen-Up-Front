import React from 'react';

import Feed from 'components/feed/Feed';

import Sidebar from 'components/ui/Sidebar';
import Forums from 'components/Forum/Forums';

const PopularScreen = () => {
    return (
        <div className="app">
            <Sidebar activeIndex={1} />
            <Feed name="Popular" component={<Forums allForums={true} />} />
        </div>
    );
};

export default PopularScreen;
