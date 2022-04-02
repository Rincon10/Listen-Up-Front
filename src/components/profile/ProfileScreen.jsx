import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import OutlinedButton from 'components/commons/OutlinedButton';
import ProfileAvatar from 'components/commons/ProfileAvatar';
import { profileBackground, profileIcon } from '../constants/Images';
import BasicTabs from 'components/commons/BasicTabs';
import { UserContext } from 'context/UserContext';
import useProfile from 'components/hooks/useProfile';
import Posts from './commons/Posts';
const ProfileScreen = () => {
    const { user } = useContext(UserContext);
    const { posts } = useProfile();
    const {
        nickname = 'u/gabrielasasilva27',
        followersCantity = '2',
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
                    backgroundImage: `url(${profileBackground})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    oppacity: '0.8',
                }}
                style={{ padding: '5%' }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'space-between',
                    }}
                >
                    <Grid item xs={6} md={6} lg={6}>
                        <ProfileAvatar src={profileIcon} />
                    </Grid>
                </div>
                <h2 style={{ color: 'white' }}>{nickname}</h2>
                <p style={{ color: 'white' }}>
                    {followersCantity + ' followers'}
                </p>
                <p style={{ color: 'white' }}>{bio}</p>
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
