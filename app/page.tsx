'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { MdArrowForward } from 'react-icons/md';
import Image from 'next/image';
import ReactPlayer from 'react-player';

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
          <p className='mt-5 max-w-prose text-zinc-700 dark:text-white sm:text-lg'>
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

        {/* value proposition section */}
        <div className='mb-12'>
          <div className='relative isolate'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4caf50] to-[#0077CC] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              />
            </div>

            <div>
              <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                <div className='mt-16 mb-12 flow-root sm:mt-24'>
                  <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                    <ReactPlayer
                      url={'http://localhost:3001/dashboard-preview.mp4'}
                      muted={true}
                      playing={true}
                      loop={true}
                      playsinline={true}
                      width={'inherit'}
                      height={'auto'}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden='true'
              className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className='mx-auto mb-32 mt-32 max-w-6xl min-h-[70vh]'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl sm:text-center'>
              <h2 className='mt-2 font-bold text-4xl sm:text-5xl'>
                Start building surveys in minutes
              </h2>
              <p className='mt-4 text-lg'>
                Building business surveys has never been easier than with
                FormPilot.
              </p>
            </div>
          </div>

          {/* steps */}
          <ol className='my-8 space-y-4 pt-4 md:flex md:space-x-12 md:space-y-0'>
            <li className='md:flex-1'>
              <div className='flex flex-col border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                <span className='text-sm font-medium text-[#9089fc]'>
                  Step 1
                </span>
                <div className='flex flex-col gap-4 p-8 border rounded-md mt-8 h-[30vh]'>
                  <span className='text-xl font-semibold'>
                    Create Free Account
                  </span>
                  <p className='mt-2'>
                    Start instantly creating your surveys with our free trial.
                  </p>
                </div>
              </div>
            </li>
            <li className='md:flex-1'>
              <div className='flex flex-col border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                <span className='text-sm font-medium text-[#9089fc]'>
                  Step 2
                </span>
                <div className='flex flex-col gap-4 p-8 border rounded-md mt-8 h-[30vh]'>
                  <span className='text-xl font-semibold'>
                    Build Your Surveys
                  </span>
                  <p className='mt-2'>
                    Build your surveys with our advanced drag-and-drop, easy to
                    use canvas, with customizable elements.
                  </p>
                </div>
              </div>
            </li>
            <li className='md:flex-1'>
              <div className='flex flex-col border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                <span className='text-sm font-medium text-[#9089fc]'>
                  Step 3
                </span>
                <div className='flex flex-col gap-4 p-8 border rounded-md mt-8 h-[30vh]'>
                  <span className='text-xl font-semibold'>
                    Share With Your Customers
                  </span>
                  <p className='mt-2'>
                    Share your forms with your customers with our customized
                    sharable links
                  </p>
                </div>
              </div>
            </li>
          </ol>

          <div className='flex flex-col justify-center items-center mt-16'>
            <Link href='/sign-up'>
              <Button
                variant={'default'}
                size='lg'
                className='gap-2 bg-[#4caf50] hover:bg-[#4caf50] hover:opacity-80'
              >
                Create Free Account{' '}
                <MdArrowForward className='ml-1.5 h-5 w-5' />
              </Button>
            </Link>
          </div>
        </div>

        {/* Analytics */}
        <div className='mx-auto mb-32 mt-12 max-w-7xl min-h-[80vh]'>
          <div className='flex gap-8 sm:mt-24'>
            <div className='flex flex-col gap-12'>
              <h1 className='font-bold text-2xl'>Real-time data analytics</h1>
              <p className='leading-normal tracking-wide text-lg'>
                Find out how your customers are interacting with your surveys
                with real-time data analytics with advanced analytics metrics.
              </p>
            </div>
            <div className='w-[250vw] rounded-xl bg-gray-900/5 lg:rounded-2xl'>
              <Image
                src='/analytics.png'
                alt='Analytics preview'
                width={1900}
                height={900}
                quality={100}
                className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;