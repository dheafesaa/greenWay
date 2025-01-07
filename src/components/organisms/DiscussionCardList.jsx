import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DiscussionCardItem, { discussionItemShape } from '../molecules/DiscussionCardItem';

function DiscussionCardList({
  discussions, like, unlike, neutralize,
}) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {discussions.map((discussion) => (
          <Grid item xs={12} key={discussion.id}>
            <DiscussionCardItem
              {...discussion}
              like={like}
              unlike={unlike}
              neutralize={neutralize}
              showLikes
              showDislikes
              showComments
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

DiscussionCardList.propTypes = {
  discussions: PropTypes.arrayOf(
    PropTypes.shape({ ...discussionItemShape, authUser: PropTypes.string }),
  ).isRequired,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
  neutralize: PropTypes.func.isRequired,
};

export default DiscussionCardList;
