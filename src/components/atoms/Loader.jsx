import React from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/system';

const bounce = keyframes`
  0%, 100% {
    font-size: 0.75px;
  }
  50% {
    font-size: 1.5px;
  }
`;

const blast = keyframes`
  0%, 40% {
    font-size: 0.5px;
  }
  70% {
    opacity: 1;
    font-size: 4px;
  }
  100% {
    font-size: 6px;
    opacity: 0;
  }
`;

function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 20vh)',
      }}
    >
      <Box
        sx={{
          width: '48px',
          height: '48px',
          position: 'relative',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '48em',
            height: '48em',
            backgroundImage: `
            radial-gradient(circle 10px, #006E6F 100%, transparent 0),
            radial-gradient(circle 10px, #006E6F 100%, transparent 0),
            radial-gradient(circle 10px, #006E6F 100%, transparent 0),
            radial-gradient(circle 10px, #006E6F 100%, transparent 0),
            radial-gradient(circle 10px, #006E6F 100%, transparent 0),
            radial-gradient(circle 10px, #006E6F 100%, transparent 0),
            radial-gradient(circle 10px, #006E6F 100%, transparent 0),
            radial-gradient(circle 10px, #006E6F 100%, transparent 0)
          `,
            backgroundPosition: `
            0em -18em, 0em 18em, 18em 0em, -18em 0em,
            13em -13em, -13em -13em, 13em 13em, -13em 13em
          `,
            backgroundRepeat: 'no-repeat',
            fontSize: '0.5px',
            borderRadius: '50%',
            animation: `${blast} 1s ease-in infinite`,
          },
          '&::after': {
            fontSize: '1px',
            background: '#006E6F',
            animation: `${bounce} 1s ease-in infinite`,
          },
        }}
      />
    </Box>
  );
}

export default Loader;
