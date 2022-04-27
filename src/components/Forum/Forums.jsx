import React, { useEffect } from 'react';
import { useState } from 'react';
import { forumApiClient } from 'services/forumApiClient';
import Forum from './Forum';

const Forums = () => {
    const [forums, setForums] = useState([]);
    useEffect(() => {
        forumApiClient
            .getAllForums()
            .then(data => {
                setForums(data);
            })
            .catch(setForums([]));
    }, []);

    return (
        <>
            {forums.map(forum => {
                return <Forum key={forum.id} forum={forum} />;
            })}
        </>
    );
};

export default Forums;
