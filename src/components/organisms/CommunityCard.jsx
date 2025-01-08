import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardImage from '../atoms/CardImage';
import ContentCardItem from '../molecules/ContentCardItem';

function CommunityCard({ title, description, imageUrl }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      textAlign={{ xs: 'center', md: 'left' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      gap={6}
    >
      <Box flex={{ xs: '1 1 100%', md: '1 1 50%' }}>
        <ContentCardItem title={title} description={description} />
        <Button
          component={Link}
          to="/thread/list"
          variant="contained"
          size="medium"
          sx={{ mt: { xs: 2, md: 4 } }}
        >
          Join Now
        </Button>
      </Box>
      <Box flex={{ xs: '1 1 100%', md: '1 1 50%' }}>
        <CardImage src={imageUrl} alt={imageUrl} />
      </Box>
    </Box>
  );
}

CommunityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CommunityCard;
