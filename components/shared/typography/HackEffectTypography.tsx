import React from 'react';
import { Typography } from '@mui/material';

import useLetterSwitchEffect from '@/lib/hooks/useLetterSwitchEffect';

interface PropsI {
  value: string
}

const HackEffectTypography = ({ value }: PropsI) => {
  const { convertedText } = useLetterSwitchEffect(value);

  return (
        <Typography className='md:leading-tall select-none line transition-all duration-500 font-enhanced text-center text-white text-3xl md:text-6xl'>
          {convertedText}
        </Typography>
  );
};

export default HackEffectTypography;