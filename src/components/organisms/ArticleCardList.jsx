import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArticleCardItem, { articleCardItemShape } from '../molecules/ArticleCardItem';

function ArticleCardList({ articleCards }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {articleCards.map((articleCard) => (
          <Grid item xs={12} sm={6} md={3} key={articleCard.id}>
            <ArticleCardItem {...articleCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ArticleCardList.propTypes = {
  articleCards: PropTypes.arrayOf(PropTypes.shape(articleCardItemShape))
    .isRequired,
};

export default ArticleCardList;
