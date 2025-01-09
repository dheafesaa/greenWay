import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Colors from '../atoms/Colors';
import { postedAt } from '../../utils/functions';

function CommentCardItem({
  comment: {
    owner = { idUser: '', name: '', photo: '' },
    comment: commentText = '',
    createdAt = '',
  },
}) {
  return (
    <Card
      sx={{
        border: `1px solid ${Colors.secondary.hard}`,
        borderRadius: '16px',
        padding: 2,
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar
            src={owner.photo}
            sx={{ width: '4rem', height: '4rem', marginRight: 2 }}
          />
          <Box>
            <Typography
              variant="h6"
              color="black"
              fontWeight="bold"
              sx={{ mb: 0 }}
            >
              {owner.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Postingan
              {' '}
              {postedAt(createdAt)}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" paragraph sx={{ mb: 0 }}>
          {commentText}
        </Typography>
      </CardContent>
    </Card>
  );
}

const commentItemShape = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    idUser: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  comment: PropTypes.string.isRequired,
};
CommentCardItem.propTypes = {
  comment: PropTypes.shape(commentItemShape).isRequired,
};

export { commentItemShape };

export default CommentCardItem;
