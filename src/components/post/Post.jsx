import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import '../../css/post.css';

const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref) => {
        return (
            <div className="post" ref={ref}>
                <div className="post__avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                {displayName}{' '}
                                <span className="post__headerSpecial">
                                    {verified && (
                                        <VerifiedUserIcon className="post__badge" />
                                    )}
                                    u/{username}
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <img src={image} alt="" />
                </div>
            </div>
        );
    },
);

export default Post;
