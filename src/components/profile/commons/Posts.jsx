import React from 'react';

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map(post => {
                return <h1 key={post.id}>{JSON.stringify(post)}</h1>;
            })}
        </div>
    );
};

export default Posts;
