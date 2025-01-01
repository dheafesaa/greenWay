import React from "react";
import PropTypes from "prop-types";
import CardMedia from "@mui/material/CardMedia";

function AuthContent({ src, alt }) {
  return (
    <CardMedia
      component="img"
      image={src}
      alt={alt}
      sx={{
        height: "100vh",
      }}
    />
  );
}

AuthContent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AuthContent;
