import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Colors from './Colors';

function Search({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
    onSearch(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 400,
          border: `2px solid ${Colors.primary.soft}`,
          borderRadius: '12px',
          p: 1,
        }}
      >
        <SearchIcon />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          value={keyword}
          onChange={handleInputChange}
        />
      </Paper>
    </Box>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
