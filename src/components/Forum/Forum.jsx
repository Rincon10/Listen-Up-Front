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

import handleNavigate from 'components/helpers/navigate';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CommentIcon from '@mui/icons-material/Comment';

import '../../css/forum.css';

const Forum = ({
    forum = {
        id: '8b862bb4-46b2-41a0-90b5-5a4a16ffb7b5',
        topic: 'topic',
        description: 'description',
        createdAt: 'today',
    },
    show = true,
}) => {
    const {
        id,
        topic,
        description,
        createdAt,
        image = 'https://pbs.twimg.com/profile_images/1305995705631285248/jJivnXkR_400x400.jpg',
    } = forum;

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
                        className="forum-img"
                        component="img"
                        height="250"
                        image={image}
                        alt="Paella dish"
                        onClick={() => {
                            handleNavigate(`forum/${id}`);
                        }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    {show && (
                        <CardActions>
                            <IconButton aria-label="like">
                                <ArrowUpwardIcon style={{ color: '#FFF' }} />
                            </IconButton>
                            <IconButton aria-label="dislike">
                                <ArrowDownwardIcon style={{ color: '#FFF' }} />
                            </IconButton>
                            <IconButton aria-label="comments">
                                <CommentIcon
                                    style={{ color: '#FFF' }}
                                    onClick={() => {
                                        handleNavigate(`forum/${id}`);
                                    }}
                                />
                            </IconButton>
                        </CardActions>
                    )}
                </Card>
            </center>
        </div>
    );
};

export default Forum;
