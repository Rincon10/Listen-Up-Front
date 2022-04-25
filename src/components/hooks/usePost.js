import { useEffect, useState } from 'react';

const usePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts]);

    return { posts, setPosts };
};

export default usePost;
