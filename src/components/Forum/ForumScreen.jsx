import React from 'react';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/ui/Sidebar';
import PostBox from '../postBox/PostBox';
import Forum from './Forum';

const ForumScreen = ({ idForum }) => {
    const component = (
        <div>
            <Forum show={false} />
            <PostBox />
        </div>
    );

    return (
        <div className="app">
            <Sidebar />
            <Feed name={'name'} component={component} />
        </div>
    );
};

export default ForumScreen;
