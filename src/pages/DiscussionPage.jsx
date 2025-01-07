import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDiscussions } from "../states/discussion/action";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddButton from "../components/atoms/AddButton";
import Alert from "../components/atoms/Alert";
import Loader from "../components/atoms/Loader";
import Title from "../components/atoms/Title";
import DiscussionCardList from "../components/organisms/DiscussionCardList";

function DiscussionPage() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  const loading = useSelector((state) => state.loading.loading);
  const discussions = useSelector((state) => state?.discussion);

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(asyncReceiveDiscussions());
  }, [dispatch]);

  const filteredDiscussions = selectedCategory
    ? discussions.filter(
      (discussion) => discussion.category === selectedCategory,
    )
    : discussions;

  const discussionList = filteredDiscussions.map((discussion) => ({
    ...discussion,
    authUser: authUser ? authUser.id : null,
  }));
  
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
            <DiscussionCardList discussions={discussionList} />
          </>
        )}
      </Container>
    </Box>
  );
}

export default DiscussionPage;
