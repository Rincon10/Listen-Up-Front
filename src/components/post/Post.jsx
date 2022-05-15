import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import '../../css/post.css';
import handleNavigate from 'components/helpers/navigate';

const Post = forwardRef(
    (
        {
            displayName,
            username,
            verified,
            text,
            image,
            avatar,
            idForum = '8b862bb4-1-41a0-90b5-5a4a16ffb7b5',
        },
        ref,
    ) => {
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
                        <div
                            className="post__headerDescription"
                            onClick={event => {
                                handleNavigate(`forum/${idForum}`);
                            }}
                        >
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
