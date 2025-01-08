import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useInput from '../../hooks/useInput';
import Alert from '../atoms/Alert';
import InputText from '../atoms/InputText';

function AddCommentDiscussion({ onSubmit }) {
  const [content, onContentChange, setContent] = useInput('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content.trim()) {
      setError('Please fill in the comment field.');
    } else {
      setError('');
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap={2}
      py={4}
      onSubmit={handleSubmit}
    >
      {error && <Alert severity="error" body={error} />}
      <InputText
        id="content"
        name="content"
        label="What's on your mind?"
        value={content}
        onChange={onContentChange}
        multiline
        rows={7}
        required
      />
      <Button variant="contained" size="large" type="submit">Add Comment</Button>
    </Box>
  );
}

AddCommentDiscussion.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddCommentDiscussion;
