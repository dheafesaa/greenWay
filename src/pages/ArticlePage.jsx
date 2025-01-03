import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { asyncReceiveArticles } from '../states/articles/action';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../components/atoms/Header';
import Loader from '../components/atoms/Loader';
import ArticleCardList from '../components/organisms/ArticleCardList';

function ArticlePage() {
  const theme = useTheme();
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const articles = useSelector((state) => state.articles.articles);

  useEffect(() => {
    dispatch(asyncReceiveArticles());
  }, [dispatch]);

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header
              title={(
                <>
                  Read Insightful Articles In
                  {' '}
                  {isTabletOrDesktop && <br />}
                  Your Free Time
                </>
              )}
              subtitle={(
                <>
                  There are many choices of useful articles to read, let&#39;s
                  {' '}
                  {isTabletOrDesktop && <br />}
                  make the best your free time to get inspired.
                </>
              )}
            />
            <ArticleCardList articleCards={articles} />
          </>
        )}
      </Container>
    </Box>
  );
}

export default ArticlePage;
