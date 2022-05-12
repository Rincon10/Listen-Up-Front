import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { forumApiClient } from 'services/forumApiClient';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/ui/Sidebar';
import PostBox from '../postBox/PostBox';
import Forum from './Forum';

const ForumScreen = ({
    idForum,
    initState = {
        id: '8b862bb4-46b2-41a0-90b5-5a4a16ffb7b5',
        topic: 'topic',
        description: 'description',
        createdAt: 'today',
    },
}) => {
    const [forum, setForum] = useState(initState);
    useEffect(() => {
        forumApiClient
            .getForumById(idForum)
            .then(data => {
                setForum(data);
            })
            .catch(e => {
                setForum({});
            });
    }, [idForum]);

    const { topic } = forum;

    const component = (
        <div>
            <Forum show={false} forum={forum} />
            <PostBox />
        </div>
    );

    return (
        <div className="app">
            <Sidebar />
            <Feed name={topic} component={component} />
        </div>
    );
};

export default ForumScreen;
