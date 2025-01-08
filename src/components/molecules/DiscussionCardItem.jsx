import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BiLike,
  BiSolidLike,
  BiDislike,
  BiSolidDislike,
  BiComment,
} from 'react-icons/bi';
import { postedAt } from '../../utils/functions';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ActionButton from '../atoms/ActionButton';
import Colors from '../atoms/Colors';

function DiscussionCardItem({
  id,
  photo,
  name,
  createdAt,
  title,
  body,
  category,
  upVotesBy,
  downVotesBy,
  comments,
  like,
  unlike,
  authUser,
  neutralize,
  showLikes,
  showDislikes,
  showComments,
}) {
  const navigate = useNavigate();
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

  const handleComment = () => {
    navigate(`/thread/detail/${id}`);
  };

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
            src={photo}
            sx={{ width: '4rem', height: '4rem', marginRight: 2 }}
          />
          <Box>
            <Typography
              variant="h6"
              color="black"
              fontWeight="bold"
              sx={{ mb: 0 }}
            >
              {name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Posted At
              {' '}
              {postedAt(createdAt)}
            </Typography>
          </Box>
        </Box>
        <Typography
          component={Link}
          to={`/thread/detail//${id}`}
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
          {showLikes && (
          <ActionButton
            Icon={isDiscussionLiked ? BiSolidLike : BiLike}
            label={upVotesBy.length}
            color={Colors.primary.soft}
            onClick={handleLike}
          />
          )}
          {showDislikes && (
            <ActionButton
              Icon={isDiscussionUnliked ? BiSolidDislike : BiDislike}
              label={downVotesBy.length}
              color={Colors.primary.soft}
              onClick={handleUnlike}
            />
          )}
          {showComments && (
            <ActionButton
              Icon={BiComment}
              label={comments}
              color={Colors.primary.soft}
              onClick={handleComment}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const discussionItemShape = {
  id: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(userShape),
  authUser: PropTypes.string,
};

DiscussionCardItem.propTypes = {
  ...discussionItemShape,
  like: PropTypes.func,
  unlike: PropTypes.func,
};

DiscussionCardItem.defaultProps = {
  like: null,
  unlike: null,
};

export { discussionItemShape };

export default DiscussionCardItem;
