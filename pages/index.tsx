import React from 'react';
import Container from '@mui/material/Container';

import HackEffectTypography from '@/components/shared/typography/HackEffectTypography';
import AnimatedBackgroundLayout from '@/components/shared/layouts/animatedBackgroundLayout';

const Home = () => {

  return (
      <AnimatedBackgroundLayout showParticles={true}>
             <Container maxWidth='lg' className='h-screen grid place-items-center font-enhanced'>
                 <HackEffectTypography value='Hello! Welcome to my portfolio!'/>
             </Container>
      </AnimatedBackgroundLayout>

  );
};

export default Home;