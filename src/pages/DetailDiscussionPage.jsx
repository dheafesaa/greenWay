import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Alert from '../components/atoms/Alert';
import Loader from '../components/atoms/Loader';
import Title from '../components/atoms/Title';
import DetailDiscussion from '../components/organisms/DetailDiscussion';
import CommentDiscussionCardList from '../components/organisms/CommentDiscussionCardList';
import AddCommentDiscussion from '../components/organisms/AddCommentDiscussion';

function DetailDiscussionPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Title title="Detail Discussion" textAlign="left" />
            <DetailDiscussion />
            <Box py={4}>
              <Typography variant="h4">
                Comments 
              </Typography>
              {authUser ? (
                <AddCommentDiscussion />
              ) : (
                <Alert
                  title="Permission Required"
                  body="Please login or create an account to start a new discussion!"
                />
              )}
              <CommentDiscussionCardList />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default DetailDiscussionPage;
