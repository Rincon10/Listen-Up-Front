import _ from 'lodash';
import { useEffect, useState } from 'react';
import { forumApiClient } from 'services/forumApiClient';

const useForums = (allForums, idForum) => {
    const [forums, setForums] = useState([]);

    useEffect(() => {
        if (allForums === true) {
            forumApiClient
                .getAllForums()
                .then(data => {
                    setForums(data);
                })
                .catch(e => {
                    return [];
                });
        } else {
            setForums([]);
        }
    }, [allForums]);
    return { forums };
};

export default useForums;
