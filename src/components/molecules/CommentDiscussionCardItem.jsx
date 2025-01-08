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
import ActionButton from '../atoms/ActionButton';
import Colors from '../atoms/Colors';

function CommentDiscussionCardItem({
  comment = {},
  like,
  unlike,
  neutralize,
  authUser,
}) {
  const {
    id = '',
    owner = { idUser: '', name: '', photo: '' },
    comment: commentText = '',
    createdAt = '',
    upVotesBy = [],
    downVotesBy = [],
  } = comment;

  const isCommentLiked = upVotesBy.includes(authUser);
  const isCommentUnliked = downVotesBy.includes(authUser);

  const handleLike = () => {
    if (!isCommentLiked) {
      like(id);
    } else {
      neutralize(id);
    }
  };

  const handleUnlike = () => {
    if (!isCommentUnliked) {
      unlike(id);
    } else {
      neutralize(id);
    }
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
        <Typography variant="body1" paragraph>
          {commentText}
        </Typography>
        <Box display="flex" alignItems="center" gap={2} marginTop={2}>
          <ActionButton
            Icon={isCommentLiked ? BiSolidLike : BiLike}
            label={upVotesBy?.length}
            color={Colors.primary.soft}
            onClick={handleLike}
          />
          <ActionButton
            Icon={isCommentUnliked ? BiSolidDislike : BiDislike}
            label={downVotesBy?.length}
            color={Colors.primary.soft}
            onClick={handleUnlike}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

const commentDiscussionItemShape = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    idUser: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string,
};

CommentDiscussionCardItem.propTypes = {
  comment: PropTypes.shape(commentDiscussionItemShape).isRequired,
  like: PropTypes.func,
  unlike: PropTypes.func,
  neutralize: PropTypes.func,
  authUser: PropTypes.string,
};

CommentDiscussionCardItem.defaultProps = {
  like: null,
  unlike: null,
  neutralize: () => {},
  authUser: '',
};

export { commentDiscussionItemShape };

export default CommentDiscussionCardItem;
