import Grid from '@mui/material/Grid';
import OutlinedButton from 'components/commons/OutlinedButton';
import { profileBackground, profileIcon } from '../constants/Images';

export default function ProfileScreen(props) {
    const { username = 'u/gabrielasasilva27' } = props;

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
                    height: '100hv',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid xs={6} md={6} lg={6}>
                        <img src={profileIcon}/>
                    </Grid>
                    <Grid xs={6} md={6} lg={6}>
                        <OutlinedButton label="Edit" />
                    </Grid>
                </div>
                <h2 style={{ color: 'white' }}>{username}</h2>
            </Grid>
        </Grid>
    );
}
