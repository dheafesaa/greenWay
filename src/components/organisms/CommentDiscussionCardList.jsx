import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CommentDiscussionCardItem, { commentDiscussionItemShape } from '../molecules/CommentDiscussionCardItem';

function CommentDiscussionCardList({
  comments, like, unlike, neutralize, authUser,
}) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {comments.map((comment) => (
          <Grid item xs={12} key={comment.id}>
            <CommentDiscussionCardItem
              comment={comment}
              like={like}
              unlike={unlike}
              neutralize={neutralize}
              authUser={authUser}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CommentDiscussionCardList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentDiscussionItemShape)),
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
  neutralize: PropTypes.func.isRequired,
  authUser: PropTypes.string,
};

CommentDiscussionCardList.defaultProps = {
  comments: [],
  authUser: null,
};

export default CommentDiscussionCardList;
