import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Colors from './Colors';

function InputText({
  id, name, type, size, label, variant, value, onChange, multiline, rows,
}) {
  return (
    <TextField
      id={id}
      name={name}
      type={type}
      size={size}
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          borderColor: Colors.secondary.soft,
          backgroundColor: Colors.white,
          borderRadius: '12px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.primary.soft,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.primary.soft,
          },
        },
        '& .MuiInputLabel-root': {
          '&.Mui-focused': {
            color: Colors.primary.soft,
          },
        },
      }}
    />
  );
}

InputText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  value: PropTypes.string,
  onChange: PropTypes.func,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

InputText.defaultProps = {
  id: '',
  type: '',
  size: 'medium',
  variant: 'outlined',
  value: '',
  onChange: () => {},
  multiline: false,
  rows: 1,
};

export default InputText;
