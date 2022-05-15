import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Post from 'components/post/Post';
import { UserContext } from 'context/UserContext';

const Posts = ({ posts }) => {
    const { lenght } = posts;
    const {
        user: { name, nickname, avatar = './img/avatar.png' },
    } = useContext(UserContext);

    return (
        <div>
            {lenght === 0 && (
                <center>
                    <h1>No posts yet!</h1>
                </center>
            )}
            {lenght !== 0 && (
                <center>
                    <h1>Your posts</h1>
                </center>
            )}
            {lenght !== 0 &&
                posts.map(post => {
                    const { id, url, description, idForum } = post;
                    return (
                        <Post
                            key={id}
                            displayName={name}
                            username={nickname}
                            verified={true}
                            text={description}
                            avatar={avatar}
                            image={url}
                            idForum={idForum}
                        />
                    );
                })}
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.array,
};

export default Posts;
