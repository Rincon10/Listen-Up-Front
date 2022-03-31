import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import OutlinedButton from 'components/commons/OutlinedButton';
import ProfileAvatar from 'components/commons/ProfileAvatar';
import { profileBackground, profileIcon } from '../constants/Images';
import BasicTabs from 'components/commons/BasicTabs';

export default function ProfileScreen(props) {
    const {
        username = 'u/gabrielasasilva27',
        followersCantity = '2',
        description = 'u/gabrielaasilva26 - 1 karma - 15 d - Mar 15, 2022',
    } = props;

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
                <h2 style={{ color: 'white' }}>{username}</h2>
                <p style={{ color: 'white' }}>
                    {followersCantity + ' followers'}
                </p>
                <p style={{ color: 'white' }}>{description}</p>
                <OutlinedButton label="Edit Profile" />
            </Grid>

            <Grid style={{ marginTop: '20px' }} item xs={12} md={12} lg={12}>
                <BasicTabs value={value} handleChange={handleChange} />
            </Grid>
            <hr />
        </Grid>
    );
}
