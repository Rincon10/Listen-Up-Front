import PostBox from 'components/postBox/PostBox';
import React from 'react';

import '../../css/feed.css';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <PostBox />
        </div>
    );
};

export default Feed;
