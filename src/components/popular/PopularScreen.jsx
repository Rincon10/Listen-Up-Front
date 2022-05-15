import React from 'react';

import Feed from 'components/feed/Feed';
import Forums from 'components/forum/Forums';
import Sidebar from 'components/ui/Sidebar';

const PopularScreen = () => {
    return (
        <div className="app">
            <Sidebar activeIndex={1} />
            <Feed name="Popular" component={<Forums allForums={true} />} />
        </div>
    );
};

export default PopularScreen;
