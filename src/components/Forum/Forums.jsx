import React, { useEffect } from 'react';
import { useState } from 'react';
import { forumApiClient } from 'services/forumApiClient';
import Forum from './Forum';

const Forums = () => {
    const [forums, setForums] = useState([]);
    useEffect(() => {
        forumApiClient.getAllForums().then(data => {
            setForums(data);
        });
    }, []);

    return (
        <>
            {forums.length === 0 && (
                <center style={{ margin: '200px' }}>
                    <h1>No forums yet</h1>
                </center>
            )}
            {forums.length >= 1 &&
                forums.map(forum => {
                    return <Forum key={forum.id} forum={forum} />;
                })}
        </>
    );
};

export default Forums;
