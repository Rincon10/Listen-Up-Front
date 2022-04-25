import React, { useContext, useState } from 'react';
import { Avatar, Button } from '@material-ui/core';

import Post from 'components/post/Post';
import FlipMove from 'react-flip-move';
import usePost from 'components/hooks/usePost';

import '../../css/postBox.css';
import swal from 'sweetalert';
import { UserContext } from 'context/UserContext';

const PostBox = (
    initState = {
        message: '',
        image: '',
    },
) => {
    const [newPost, setNewPost] = useState(initState);

    const { posts, setPosts } = usePost();
    const { user } = useContext(UserContext);
    const { nickname, name, avatar } = user;

    const onSubmit = event => {
        event.preventDefault();

        const { message, image } = newPost;

        if (!message) {
            swal({
                title: 'Invalid Input',
                icon: 'warning',
                text: 'You must enter a message',
                timer: '5000',
            });
            return;
        }
        const verified = true;

        const post = {
            displayName: name,
            username: nickname,
            verified: verified,
            text: message,
            image: image,
            avatar: avatar,
        };
        setPosts([post, ...posts]);

        setNewPost({
            message: '',
            image: '',
        });
        document.getElementById('form')?.reset();
    };

    const onInputChange = event => {
        const { name, value } = event.target;
        setNewPost({ ...newPost, [name]: value });
    };

    return (
        <>
            <div className="postBox">
                <form id="form">
                    <div className="postBox__input">
                        <Avatar src={avatar} />
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
