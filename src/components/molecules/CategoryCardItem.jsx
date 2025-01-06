import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Colors from '../atoms/Colors';

function CategoryCardItem({ title, description }) {
  return (
    <Card sx={{ paddingY: 2, background: Colors.white, textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>{description}</Typography>
      </CardContent>
    </Card>
  );
}

CategoryCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CategoryCardItem;
