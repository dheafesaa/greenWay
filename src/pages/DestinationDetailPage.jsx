import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Loader from "../components/atoms/Loader";
import DetailDestination from "../components/organisms/DetailDestination";

function DestinationDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const detailDestination = useSelector(
    (state) => state.detailDestination.detailDestination,
  );

  useEffect(() => {
    dispatch(asyncReceiveDetailDestination(id));
  }, [id, dispatch]);

  if (!detailDestination) {
    return "Please wait";
  }

  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <DetailDestination {...detailDestination} />
            <Box py={4}>
              <CommentDestinationCardList
                comments={detailDestination.comments}
              />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default DestinationDetailPage;
