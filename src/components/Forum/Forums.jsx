import React from 'react';
import useForums from 'components/hooks/useForums';

import Forum from './Forum';

const Forums = ({ allForums }) => {
    const { forums } = useForums(allForums);

    return (
        <>
            {forums.length === 0 && (
                <center style={{ margin: '200px' }}>
                    <h1>No forums yet</h1>
                </center>
            )}
            {forums.length >= 1 &&
                forums.map(forum => {
                    const { id } = forum;
                    return <Forum id={id} key={id} forum={forum} />;
                })}
        </>
    );
};

export default Forums;
