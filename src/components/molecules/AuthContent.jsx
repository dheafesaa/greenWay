import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Colors from '../atoms/Colors';

function AuthContent({
  src, alt, title, body, footer,
}) {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        sx={{
          position: 'absolute',
          height: '100vh',
        }}
      />
      <CardContent sx={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        paddingX: 6,
      }}
      >
        <Typography variant="h2" color={Colors.white}>{title}</Typography>
        <Typography variant="h6" color={Colors.white}>{body}</Typography>
        <Typography variant="h6" color={Colors.white}>{footer}</Typography>
      </CardContent>
    </Card>
  );
}

AuthContent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
};

export default AuthContent;
