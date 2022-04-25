import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';

import Post from 'components/post/Post';
import FlipMove from 'react-flip-move';
import usePost from 'components/hooks/usePost';

import '../../css/postBox.css';

const PostBox = (
    initState = {
        message: '',
        image: '',
    },
) => {
    const [newPost, setNewPost] = useState(initState);

    const { posts, setPosts } = usePost();

    const onSubmit = event => {
        event.preventDefault();

        const { message, image } = newPost;

        const post = {
            displayName: 'Camilo Rincon',
            username: 'Rincon10',
            verified: true,
            text: message,
            image: image,
            avatar: 'https://avatars.githubusercontent.com/u/53798019?v=4',
        };
        alert(JSON.stringify(post));
        alert(JSON.stringify(posts));
        setPosts([post, ...posts]);

        setNewPost(initState);
    };

    const onInputChange = event => {
        const { name, value } = event.target;
        setNewPost({ ...newPost, [name]: value });
    };

    return (
        <>
            <div className="postBox">
                <form>
                    <div className="postBox__input">
                        <Avatar src="https://avatars.githubusercontent.com/u/53798019?v=4" />
                        <input
                            id="message"
                            onChange={onInputChange}
                            name="message"
                            placeholder="What's happening?"
                            type="text"
                        />
                    </div>
                    <input
                        id="image"
                        onChange={onInputChange}
                        name="image"
                        className="postBox__imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                    />
                    <Button
                        onClick={onSubmit}
                        type="submit"
                        className="postBox__tweetButton"
                    >
                        Post
                    </Button>
                </form>
            </div>
            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </>
    );
};

export default PostBox;
