import Forums from 'components/Forum/Forums';
import React from 'react';

import '../../css/feed.css';
const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <Forums />
        </div>
    );
};

export default Feed;
