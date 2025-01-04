import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Colors from '../atoms/Colors';

function DetailCardItem({
  title, content, isLink, link, isButton,
}) {
  let renderedContent;

  if (isLink) {
    renderedContent = (
      <Typography component={Link} to={link} variant="body1">
        {content}
      </Typography>
    );
  } else if (isButton) {
    renderedContent = (
      <Button component={Link} to={link} variant="contained" size="medium">
        {content}
      </Button>
    );
  } else if (React.isValidElement(content)) {
    renderedContent = content;
  } else {
    renderedContent = <Typography variant="body1">{content}</Typography>;
  }

  return (
    <Card
      sx={{
        borderBottom: `1px solid ${Colors.secondary.hard}`,
        background: 'transparent',
        boxShadow: 'none',
        py: 4,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {renderedContent}
    </Card>
  );
}

DetailCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  isLink: PropTypes.bool,
  link: PropTypes.string,
  isButton: PropTypes.bool,
};

DetailCardItem.defaultProps = {
  isLink: false,
  link: '',
  isButton: false,
};

export default DetailCardItem;
