import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ArticleCardItem({ picture, title, link }) {
  return (
    <Box component={Link} to={link} sx={{ textDecoration: 'none' }}>
      <Card sx={{ borderRadius: '16px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={picture}
            alt={title}
          />
          <CardContent>
            <Typography
              variant="body1"
              sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'normal',
                mb: 0,
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

const articleCardItemShape = {
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

ArticleCardItem.propTypes = {
  ...articleCardItemShape,
};

export { articleCardItemShape };

export default ArticleCardItem;
