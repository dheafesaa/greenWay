import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useInput from '../../hooks/useInput';
import Alert from '../atoms/Alert';
import InputText from '../atoms/InputText';

function DiscussionInput({ addDiscussion }) {
  const navigate = useNavigate();
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !category || !body) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');
    addDiscussion(title, category, body);
    navigate('//thread/list');
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      py={4}
      gap={2}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {error && <Alert severity="error" body={error} />}
      <InputText id="title" name="title" label="Judul" value={title} onChange={onTitleChange} required />
      <InputText id="category" name="category" label="Kategori" value={category} onChange={onCategoryChange} required />
      <InputText
        id="content"
        name="content"
        label="Konten"
        value={body}
        onChange={onBodyChange}
        multiline
        rows={4}
        required
      />
      <Button variant="contained" size="large" type="submit" fullWidth>Simpan</Button>
    </Box>
  );
}

DiscussionInput.propTypes = {
  addDiscussion: PropTypes.func.isRequired,
};

export default DiscussionInput;
