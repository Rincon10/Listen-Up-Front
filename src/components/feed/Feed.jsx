import PropTypes from 'prop-types';
import React from 'react';

import '../../css/feed.css';
const Feed = ({ name = 'Home', component }) => {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>{name}</h2>
            </div>
            <>{component}</>
        </div>
    );
};

Feed.propTypes = {
    component: PropTypes.element,
    name: PropTypes.string,
};

export default Feed;
