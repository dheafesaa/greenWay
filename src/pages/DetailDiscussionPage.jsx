import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncReceiveDetailDiscussion,
  asyncCreateCommentDiscussion,
  asyncToggleLikeComment,
  asyncToggleLikeDetailDiscussion,
  asyncToggleNeutralizeComment,
  asyncToggleNeutralizeDetailDiscussion,
  asyncToggleUnlikeComment,
  asyncToggleUnlikeDetailDiscussion,
} from '../states/discussionDetail/action';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Alert from '../components/atoms/Alert';
import Loader from '../components/atoms/Loader';
import Title from '../components/atoms/Title';
import AddCommentDiscussion from '../components/organisms/AddCommentDiscussion';
import CommentDiscussionCardList from '../components/organisms/CommentDiscussionCardList';
import DetailDiscussion from '../components/organisms/DetailDiscussion';

function DetailDiscussionPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  const loading = useSelector((state) => state.loading.loading);
  const detailDiscussion = useSelector((state) => state.detailDiscussion.detailDiscussion);

  useEffect(() => {
    dispatch(asyncReceiveDetailDiscussion(id));
  }, [id, dispatch]);

  const onLike = (discussionId) => {
    dispatch(asyncToggleLikeDetailDiscussion(discussionId));
  };

  const onUnlike = (discussionId) => {
    dispatch(asyncToggleUnlikeDetailDiscussion(discussionId));
  };

  const onNeutralize = (discussionId) => {
    dispatch(asyncToggleNeutralizeDetailDiscussion(discussionId));
  };

  const onLikeComment = (commentId) => {
    dispatch(asyncToggleLikeComment(detailDiscussion.id, commentId));
  };

  const onUnlikeComment = (commentId) => {
    dispatch(asyncToggleUnlikeComment(detailDiscussion.id, commentId));
  };

  const onNeutralizeComment = (commentId) => {
    dispatch(asyncToggleNeutralizeComment(detailDiscussion.id, commentId));
  };

  const onSubmitComment = (comment) => {
    dispatch(asyncCreateCommentDiscussion(detailDiscussion.id, comment));
  };

  if (!detailDiscussion) {
    return 'Please wait';
  }

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Title title="Detail Diskusi" textAlign="left" />
            <DetailDiscussion
              {...detailDiscussion}
              authUser={authUser ? authUser.id : null}
              like={(discussionId) => onLike(discussionId)}
              unlike={(discussionId) => onUnlike(discussionId)}
              neutralize={(discussionId) => onNeutralize(discussionId)}
            />
            <Box py={4}>
              <Typography variant="h4">
                Balasan (
                {detailDiscussion?.comments?.length}
                )
              </Typography>
              {authUser ? (
                <AddCommentDiscussion onSubmit={onSubmitComment} />
              ) : (
                <Alert
                  title="Izin Diperlukan"
                  body="Silakan masuk atau buat akun untuk memulai diskusi baru!"
                />
              )}
              <CommentDiscussionCardList
                {...detailDiscussion}
                authUser={authUser ? authUser.id : null}
                like={(commentId) => onLikeComment(commentId)}
                unlike={(commentId) => onUnlikeComment(commentId)}
                neutralize={(commentId) => onNeutralizeComment(commentId)}
              />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default DetailDiscussionPage;
