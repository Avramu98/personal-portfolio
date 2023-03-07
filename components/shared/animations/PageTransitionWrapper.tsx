import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useRouter } from 'next/router';

import { AnimationWrapperI } from '@/types/index';

const PageTransitionWrapper = ({ children }: AnimationWrapperI) => {
  const router = useRouter();

  return (
      <AnimatePresence mode='wait'>
        <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.5,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              },
              animateState: {
                opacity: 1,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              },
              exitState: {
                clipPath: 'polygon(48% 0, 49% 0, 49% 99%, 48% 100%)',
              },
            }}
        >
            {children}
        </motion.div>
      </AnimatePresence>

  );
};

export default PageTransitionWrapper;