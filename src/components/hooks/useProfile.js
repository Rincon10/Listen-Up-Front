import { postApiclient } from 'components/services/postApiClient';

import { useEffect, useState } from 'react';

const useProfile = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postApiclient
            .getAllPost()
            .then(response => {
                setPosts(response);
            })
            .catch(error => console.log(error));
    }, []);

    return { posts };
};

export default useProfile;
