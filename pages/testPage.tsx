import React from 'react';
import Link from 'next/link';

const TestPage = () => {
  return (
        <div className='h-screen w-screen bg-gradient-radial'>
          <Link href={'/'}>Main Page</Link>

        </div>
  );
};

export default TestPage;