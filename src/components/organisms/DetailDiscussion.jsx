import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  BiLike,
  BiSolidLike,
  BiDislike,
  BiSolidDislike,
} from 'react-icons/bi';
import { postedAt } from '../../utils/functions';
import Colors from '../atoms/Colors';
import ActionButton from '../atoms/ActionButton';

function DetailDiscussion({
  id,
  createdAt,
  title,
  body,
  category,
  upVotesBy,
  downVotesBy,
  owner,
  like,
  unlike,
  neutralize,
  authUser,
}) {
  const isDiscussionLiked = upVotesBy.includes(authUser);
  const isDiscussionUnliked = downVotesBy.includes(authUser);

  const handleLike = (event) => {
    event.stopPropagation();
    if (!isDiscussionLiked) {
      like(id);
    } else {
      neutralize(id);
    }
  };

  const handleUnlike = (event) => {
    event.stopPropagation();
    if (!isDiscussionUnliked) {
      unlike(id);
    } else {
      neutralize(id);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Card
        sx={{
          border: `1px solid ${Colors.secondary.hard}`,
          borderRadius: '16px',
          padding: 2,
          py: 4,
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
                Posted At
                {' '}
                {postedAt(createdAt)}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h6"
            color="black"
            fontWeight="bold"
            sx={{ mb: 1, textDecoration: 'none' }}
          >
            {title}
          </Typography>
          <Typography variant="body1" paragraph>
            {body}
          </Typography>
          {category && (
          <Typography variant="body1" fontWeight="bold">
            #
            {category}
          </Typography>
          )}
          <Box display="flex" alignItems="center" gap={2} marginTop={2}>
            <ActionButton
              Icon={isDiscussionLiked ? BiSolidLike : BiLike}
              label={upVotesBy.length}
              color={Colors.primary.soft}
              onClick={handleLike}
            />
            <ActionButton
              Icon={isDiscussionUnliked ? BiSolidDislike : BiDislike}
              label={downVotesBy.length}
              color={Colors.primary.soft}
              onClick={handleUnlike}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

const ownerShape = {
  idUser: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

DetailDiscussion.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  authUser: PropTypes.string,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
  neutralize: PropTypes.func.isRequired,
};

DetailDiscussion.defaultProps = {
  authUser: null,
};

export default DetailDiscussion;
