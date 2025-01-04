import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Typography from '@mui/material/Typography';
import Colors from '../atoms/Colors';

function CampaignCardItem({
  id, picture, name, location,
}) {
  return (
    <Card sx={{ borderRadius: '16px', minHeight: '210px', position: 'relative' }}>
      <CardMedia
        component="img"
        height="210"
        image={picture}
        alt={name}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '100%',
        }}
      >
        <Typography
          component={Link}
          to={`/campaigns/${id}`}
          variant="body1"
          color={Colors.white}
          fontWeight="bold"
          sx={{
            marginBottom: 1,
            textDecoration: 'none',
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          color={Colors.white}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <LocationOnRoundedIcon sx={{ marginRight: '4px' }} />
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
}

const campaignCardItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

CampaignCardItem.propTypes = {
  ...campaignCardItemShape,
};

export { campaignCardItemShape };

export default CampaignCardItem;
