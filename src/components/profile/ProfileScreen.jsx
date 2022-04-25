import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';

import OutlinedButton from 'components/commons/OutlinedButton';
import ProfileAvatar from 'components/commons/ProfileAvatar';

import BasicTabs from 'components/commons/BasicTabs';
import { UserContext } from 'context/UserContext';
import useProfile from 'components/hooks/useProfile';
import Posts from './commons/Posts';
import { Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import handleNavigate from 'components/helpers/navigate';

const ProfileScreen = () => {
    const { posts } = useProfile();
    const { user } = useContext(UserContext);
    const { avatar } = user;
    const color = '#623a6c';

    const {
        nickname = 'u/gabrielasasilva27',
        followersCantity = '2',
        createdAt,
        bio = 'u/gabrielaasilva26 - 1 karma - 15 d - Mar 15, 2022',
    } = user;

    const [value, setValue] = useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                md={12}
                lg={12}
                sx={{
                    backgroundColor: `${color}`,
                }}
                style={{ padding: '5%' }}
            >
                <Grid
                    width={'100%'}
                    textAlign={'end'}
                    sx={{
                        backgroundColor: `${color}`,
                    }}
                >
                    <Button
                        className="postBox__tweetButton"
                        startIcon={<KeyboardBackspaceIcon />}
                        onClick={() => handleNavigate('home')}
                    >
                        Home
                    </Button>
                </Grid>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'space-between',
                    }}
                >
                    <Grid item xs={6} md={6} lg={6}>
                        <ProfileAvatar src={avatar} />
                    </Grid>
                </div>
                <h2 style={{ color: 'white' }}>{`u/${nickname}`}</h2>
                <p style={{ color: 'white' }}>
                    {followersCantity + ' followers'}
                </p>
                <p style={{ color: 'white' }}>{bio}</p>
                <p style={{ color: 'white' }}>{`Joined: ${createdAt}`}</p>
                <OutlinedButton label="Edit Profile" />
            </Grid>
            <Grid style={{ marginTop: '20px' }} item xs={12} md={12} lg={12}>
                <BasicTabs value={value} handleChange={handleChange} />
                {value === 0 && <Posts posts={posts} />}
            </Grid>
            <hr />
        </Grid>
    );
};
export default ProfileScreen;
