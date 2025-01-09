import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  asyncCreateDiscussion,
  asyncReceiveDiscussions,
} from '../states/discussion/action';
import Alert from '../components/atoms/Alert';
import Title from '../components/atoms/Title';
import DiscussionInput from '../components/organisms/DiscussionInput';

function AddDiscussionPage() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);

  const onAddDiscussion = async (title, category, body) => {
    try {
      await dispatch(asyncCreateDiscussion(title, category, body));
      dispatch(asyncReceiveDiscussions());
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to create discussion:', error);
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {authUser ? (
          <>
            <Title title="Buat Diskusi Baru" textAlign="left" />
            <DiscussionInput addDiscussion={onAddDiscussion} />
          </>
        ) : (
          <Alert
            title="Izin Diperlukan"
            body="Silakan masuk atau buat akun untuk memulai diskusi baru!"
          />
        )}
      </Container>
    </Box>
  );
}

export default AddDiscussionPage;
