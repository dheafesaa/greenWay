import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddButton from '../components/atoms/AddButton';
import Alert from '../components/atoms/Alert';
import Loader from '../components/atoms/Loader';
import Title from '../components/atoms/Title';
import DiscussionCardList from '../components/organisms/DiscussionCardList';

function DiscussionPage() {
  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Title title="Discussion Available" textAlign="left" />
            {authUser?.id ? (
              <AddButton link="/discussions/add" />
            ) : (
              <Alert
                severity="info"
                title="Hold Up!"
                body="You need to login or create a new account to start a discussion."
              />
            )}
            <DiscussionCardList />
          </>
        )}
      </Container>
    </Box>
  );
}

export default DiscussionPage;
