import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Forum = ({
    forum = { topic: 'topic', description: 'description', createdAt: 'today' },
}) => {
    const { topic, description, createdAt } = forum;
    return (
        <div style={{ border: '1px solid #e7d4ec' }}>
            <center>
                <Card sx={{ maxWidth: 450, margin: '20px 0px' }}>
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                            >
                                {topic[0].toUpperCase()}
                            </Avatar>
                        }
                        title={topic}
                        subheader={createdAt}
                    />
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </center>
        </div>
    );
};

export default Forum;
