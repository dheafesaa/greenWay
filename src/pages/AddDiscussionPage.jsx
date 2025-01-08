import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '../components/atoms/Alert';
import Title from '../components/atoms/Title';
import DiscussionInput from '../components/organisms/DiscussionInput';

function AddDiscussionPage() {
  const authUser = useSelector((state) => state.authUser);

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {authUser ? (
          <>
            <Title title="Create New Discussion" textAlign="left" />
            <DiscussionInput addDiscussion="" />
          </>
        ) : (
          <Alert
            title="Permission Required"
            body="Please login or create an account to start a new discussion!"
          />
        )}
      </Container>
    </Box>
  );
}

export default AddDiscussionPage;
