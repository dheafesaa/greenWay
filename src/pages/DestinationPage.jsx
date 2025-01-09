import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { asyncReceiveDestinations } from '../states/destinations/action';
import Alert from '../components/atoms/Alert';
import Header from '../components/atoms/Header';
import Loader from '../components/atoms/Loader';
import Search from '../components/atoms/Search';
import DestinationCardList from '../components/organisms/DestinationCardList';

function DestinationPage() {
  const theme = useTheme();
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.loading.loading);
  const destinations = useSelector((state) => state.destination.destinations);

  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    dispatch(asyncReceiveDestinations());
  }, [dispatch]);

  useEffect(() => {
    setFilteredDestinations(
      destinations.filter((destination) => destination.name.toLowerCase()
        .includes(searchKeyword.toLowerCase())),
    );
  }, [destinations, searchKeyword]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    navigate(`?search=${keyword}`);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header
              title=" Temukan Tempat Baru untuk Menjelajahi Keindahan Indonesia"
              subtitle={(
                <>
                  Rasakan pengalaman menjelajahi keindahan alam dan budaya Indonesia.
                  {' '}
                  {isTabletOrDesktop && <br />}
                  Dari pesona pegunungan hingga indahnya pantai,
                  setiap perjalanan membawa cerita yang tak terlupakan.
                </>
              )}
            />
            <Box mt={4}>
              <Search onSearch={handleSearch} />
            </Box>
            {filteredDestinations.length > 0 ? (
              <DestinationCardList destinationCards={filteredDestinations} />
            ) : (
              <Box py={4}>
                <Alert
                  severity="info"
                  title="Informasi"
                  body="Maaf, tidak ada destinasi yang sesuai dengan kriteria pencarian Anda.
                  Silakan coba lagi dengan kata kunci yang berbeda."
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}

export default DestinationPage;
