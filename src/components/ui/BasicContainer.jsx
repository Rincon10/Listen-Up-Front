import React from 'react';
import Feed from 'components/feed/Feed';

const BasicContainer = ({ component }) => {
    return (
        <center>
            <div style={{ width: '50%' }}>
                <br />
                <Feed name="" component={component} />
            </div>
        </center>
    );
};

export default BasicContainer;
