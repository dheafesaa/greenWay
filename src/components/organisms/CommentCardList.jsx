import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CommentCardItem, { commentItemShape } from '../molecules/CommentCardItem';

function CommentCardList({ comments }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {comments.map((comment) => (
          <Grid item xs={12} key={comment.id}>
            <CommentCardItem comment={comment} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CommentCardList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)),
};

CommentCardList.defaultProps = {
  comments: [],
};

export default CommentCardList;
