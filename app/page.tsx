// 'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { MdArrowForward } from 'react-icons/md';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen min-w-full bg-background max-h-screen'>
      <Navbar />
      <>
        <MaxWidthWrapper className='mb-12 mt-24 sm:mt-40 flex flex-col items-center justify-center gap-6 text-center'>
          <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
            Build. Share. Analyze. <span className='text-[#4caf50]'>Forms</span>{' '}
            in real-time.
          </h1>
          <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
            FormPilot allows you to build and share business surveys among your
            customers and get instant data-driven impressions.
          </p>

          <Link href='/sign-up'>
            <Button
              variant={'default'}
              size='lg'
              className='gap-2 bg-[#4caf50] hover:bg-[#4caf50] hover:opacity-80'
            >
              Get started <MdArrowForward className='ml-1.5 h-5 w-5' />
            </Button>
          </Link>
        </MaxWidthWrapper>
      </>
    </div>
  );
}

export default Home;