import React, { Fragment, ReactElement } from 'react';
import { Box } from '@mui/material';

import PulsatingBackground from '@/components/shared/background';
import Particle from '@/components/shared/particle';

interface PropsI {
  children: ReactElement;
  showParticles: boolean;
}

const AnimatedBackgroundLayout = ({ children, showParticles }: PropsI) => {
  return (
      <Fragment>
        <Box className='min-h-screen z-40 w-screen relative'>
            {children}
        </Box>
        <PulsatingBackground/>
          {showParticles && <Particle/>}
      </Fragment>
  );
};

export default AnimatedBackgroundLayout;