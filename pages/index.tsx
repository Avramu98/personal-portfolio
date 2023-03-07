import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
        <Box className='border-2 bg-gradient-radial h-screen w-screen font-enhanced'>
          <Link href={'/testPage'}>Test page</Link>
            <Typography className='font-enhanced text-center'>Testing center</Typography>
        </Box>
  );
};

export default Home;