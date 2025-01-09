import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncReceiveDetailDestination,
  asyncCreateCommentDestination,
} from "../states/destinations/action";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Alert from "../components/atoms/Alert";
import Loader from "../components/atoms/Loader";
import DestinationDetail from "../components/organisms/DestinationDetail";
import CommentInput from "../components/organisms/CommentInput";
import CommentCardList from "../components/organisms/CommentCardList";

function DestinationDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  const loading = useSelector((state) => state.loading.loading);
  const detailDestination = useSelector(
    (state) => state.destination.detailDestination,
  );

  useEffect(() => {
    dispatch(asyncReceiveDetailDestination(id));
  }, [id, dispatch]);

  const onSubmitComment = (comment) => {
    if (detailDestination) {
      dispatch(
        asyncCreateCommentDestination(detailDestination.idDestination, comment),
      );
    }
  };

  if (!detailDestination) {
    return "Harap Tunggu";
  }

  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <DestinationDetail {...detailDestination} />
            <Box py={4}>
              <Typography variant="h4">
                Komentar ({detailDestination.comments.length})
              </Typography>
              {authUser ? (
                <CommentInput onSubmit={onSubmitComment} />
              ) : (
                <Alert
                  title="Izin Diperlukan"
                  body="Silakan masuk atau buat akun untuk memulai komentar baru!"
                />
              )}
              <CommentCardList comments={detailDestination.comments} />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default DestinationDetailPage;
