'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { MdArrowForward, MdCheck, MdHelpCenter } from 'react-icons/md';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PLANS } from '@/lib/stripe';
import { cn } from '@/lib/utils';
import { BiMinus } from 'react-icons/bi';
import LOGO from '@/components/assets/svgs/formpilot_small.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Home = () => {
  const [user, setUser] = useState<any>();
  const [date, setDate] = useState<any>(new Date());

  // Number of forms per months
  // Detailed analytics on each forms
  // Customized url
  // Add Brand color to forms
  // Access to other color palettes
  // Access to advanced elements

  const pricingItems = [
    {
      plan: 'Free',
      tagline: 'For solopreneurs and content creators.',
      quota: 5,
      features: [
        {
          text: '5 forms per month',
          footnote: 'The maximum amount of forms per month',
        },
        {
          text: 'Basic analytics for all surveys',
          footnote:
            'Access to basic analytics like submission-rates, bounce-rates, visits.',
        },
        {
          text: 'Mobile-friendly interface',
        },
        {
          text: 'Customizable share link',
          footnote: 'Customize your links with your business usernames',
          negative: true,
        },
        {
          text: 'Add more colors to your forms',
          footnote: 'Choose more colors while building your forms',
          negative: true,
        },
        {
          text: 'Brand colors',
          footnote: 'Customize your forms with your brand colors',
          negative: true,
        },
        {
          text: 'Priority support',
          negative: true,
        },
      ],
    },
    {
      plan: 'Premium',
      tagline:
        'For businesses and content creators with real-time analytics needs.',
      quota: PLANS.find((p) => p.slug === 'premium')!.quota,
      features: [
        {
          text: 'Unlimited forms per month',
          footnote: 'The maximum amount of forms per month',
        },
        {
          text: 'Rich analytics for all surveys',
          footnote:
            'Access to feature-rich analytics like submit-rates, bounce-rates, visits, buttons-clicked, and more.',
        },
        {
          text: 'Mobile-friendly interface',
        },
        {
          text: 'Customizable share link',
          footnote: 'Customize your links with your business usernames',
          negative: false,
        },
        {
          text: 'Add more colors to your forms',
          footnote: 'Choose more colors while building your forms',
          negative: false,
        },
        {
          text: 'Brand colors',
          footnote: 'Customize your forms with your brand colors',
          negative: false,
        },
        {
          text: 'Priority support',
          negative: false,
        },
      ],
    },
  ];

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
        <div className='mx-auto mb-8 mt-8 max-w-6xl h-fit'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl sm:text-center'>
              <h2 className='mt-2 font-bold text-center text-3xl lg:text-4xl sm:text-5xl'>
                Start building surveys in minutes
              </h2>
              <p className='mt-4 text-lg text-center'>
                Building business surveys has never been easier than with
                FormPilot.
              </p>
            </div>
          </div>

          {/* steps */}
          <ol className='flex flex-col lg:flex-row my-8 space-y-4 mx-[10px] lg:mx-[0px] pt-4 md:flex md:space-x-12 md:space-y-0 h-fit'>
            <li className='md:flex-1'>
              <div className='flex flex-col justify-center items-center lg:items-start border-zinc-300 py-2 border-t-2 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
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
              <div className='flex flex-col justify-center items-center lg:items-start border-zinc-300 py-2 border-t-2 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
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
              <div className='flex flex-col justify-center items-center lg:items-start border-zinc-300 py-2 border-t-2 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
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
        <div className='mx-auto mb-8 mt-8 max-w-7xl min-h-[80vh]'>
          <div className='flex flex-col-reverse sm:flex-col-reverse items-center lg:flex-row gap-8 sm:mt-24'>
            <div className='flex flex-col gap-12 mx-[10px]'>
              <h1 className='font-bold text-2xl text-center lg:text-left'>
                Real-time data analytics
              </h1>
              <p className='leading-normal tracking-wide text-lg text-center lg:text-left'>
                Find out how your customers are interacting with your surveys
                with real-time data analytics with advanced analytics metrics.
              </p>
            </div>
            <div className='w-[90vw] sm:w-[70vw] lg:w-[100vw] rounded-xl dark:shadow-md dark:shadow-green-600 lg:rounded-2xl'>
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

        {/* Form Details */}
        <div className='mx-auto mb-8 mt-8 max-w-7xl min-h-[80vh]'>
          <div className='flex flex-col sm:flex-col-reverse items-center lg:flex-row gap-8 sm:mt-24'>
            <div className='w-[90vw] sm:w-[70vw] lg:w-[100vw] rounded-xl dark:shadow-md dark:shadow-green-600 lg:rounded-2xl'>
              <Image
                src='/dashboard-form.png'
                alt='Analytics preview'
                width={1500}
                height={900}
                quality={100}
                className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
            <div className='flex flex-col gap-12 mx-[10px]'>
              <h1 className='font-bold text-2xl text-center lg:text-left'>
                Customized Sharable Link
              </h1>
              <p className='leading-normal tracking-wide text-lg text-center lg:text-left'>
                Beautiful and customizable sharable link to your customers, with
                full details on click-rates, bounce-rates, visits-rates on each
                survey.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Form */}
        <div className='mx-auto mb-8 mt-8 max-w-7xl min-h-[80vh]'>
          <div className='flex flex-col-reverse sm:flex-col-reverse items-center lg:flex-row gap-8 sm:mt-24'>
            <div className='flex flex-col gap-12 mx-[10px]'>
              <h1 className='font-bold text-2xl text-center lg:text-left'>
                Branded photos and banners
              </h1>
              <p className='leading-normal tracking-wide text-lg text-center lg:text-left'>
                Personalize your survey forms with your brand banners and
                photos.
              </p>
            </div>
            <div className='w-[90vw] sm:w-[70vw] lg:w-[100vw] rounded-xl dark:shadow-md dark:shadow-green-600 lg:rounded-2xl'>
              <Image
                src='/form-submit.png'
                alt='Analytics preview'
                width={1500}
                height={900}
                quality={100}
                className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>

        {/* Pricing */}
        <MaxWidthWrapper className='mb-32 px-0 mt-6 text-center max-w-7xl h-fit'>
          <div className='mx-auto max-w-4xl sm:text-center'>
            <h1 className='mt-2 font-bold text-4xl sm:text-5xl'>
              Transparent and flexible pricing
            </h1>
            <p className='mt-4 text-lg'>
              Build your surveys with our cheap and affordable pricing. Publish
              and share for free.
            </p>
          </div>

          <div className='pt-12 pb-12 grid grid-cols-1 gap-10 lg:grid-cols-2'>
            <TooltipProvider>
              {pricingItems.map(({ plan, tagline, quota, features }) => {
                const price =
                  PLANS.find((p) => p.slug === plan.toLowerCase())?.price
                    .amount || 0;

                return (
                  <div
                    key={plan}
                    className={cn('relative rounded-2xl shadow-lg', {
                      'border-2 border-[#4caf50] shadow-[#4caf50]-200':
                        plan === 'Premium',
                      'border border-gray-200': plan !== 'Premium',
                    })}
                  >
                    {plan === 'Premium' && (
                      <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-[#4caf50] to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                        Upgrade now
                      </div>
                    )}

                    <div className='p-5'>
                      <h3 className='my-3 text-center font-display text-3xl font-bold'>
                        {plan}
                      </h3>
                      <p className='text-lg'>{tagline}</p>
                      <p className='my-5 font-display text-6xl font-semibold'>
                        ${price}
                      </p>
                      <p className='text-lg'>per month</p>
                    </div>

                    <div className='flex h-20 items-center justify-center border-b border-t border-gray-200'>
                      <div className='flex items-center space-x-1'>
                        <p>{quota.toLocaleString()} PDFs/mo included</p>

                        <Tooltip delayDuration={300}>
                          <TooltipTrigger className='cursor-default ml-1.5'>
                            <MdHelpCenter className='h-4 w-4 text-[#4caf50]' />
                          </TooltipTrigger>
                          <TooltipContent className='w-80 p-2'>
                            How many PDFs you can upload per month.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    <ul className='my-10 space-y-5 px-8'>
                      {features.map(({ text, footnote, negative }) => (
                        <li key={text} className='flex space-x-5'>
                          <div className='flex-shrink-0'>
                            {negative ? (
                              <BiMinus className='h-6 w-6 text-[#4caf50]-300' />
                            ) : (
                              <MdCheck className='h-6 w-6 text-[#4caf50]-500' />
                            )}
                          </div>
                          {footnote ? (
                            <div className='flex items-center space-x-1'>
                              <p
                                className={cn('text-[#4caf50]-600', {
                                  'text-[#4caf50]-400': negative,
                                })}
                              >
                                {text}
                              </p>
                              <Tooltip delayDuration={300}>
                                <TooltipTrigger className='cursor-default ml-1.5'>
                                  <MdHelpCenter className='h-4 w-4 text-[#4caf50]-500' />
                                </TooltipTrigger>
                                <TooltipContent className='w-80 p-2'>
                                  {footnote}
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          ) : (
                            <p
                              className={cn('text-[#4caf50]-600', {
                                'text-[#4caf50]-400': negative,
                              })}
                            >
                              {text}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className='border-t border-gray-200' />
                    <div className='p-5'>
                      {plan === 'Free' ? (
                        <Link
                          href={user ? '/dashboard' : '/sign-in'}
                          className={buttonVariants({
                            className: 'w-full',
                            variant: 'secondary',
                          })}
                        >
                          {user ? 'Upgrade now' : 'Sign up'}
                          <MdArrowForward className='h-5 w-5 ml-1.5' />
                        </Link>
                      ) : user ? (
                        <Button
                          variant={'default'}
                          className='gap-2 bg-[#4caf50] hover:bg-[#4caf50] hover:opacity-80'
                        >
                          Get started{' '}
                          <MdArrowForward className='ml-1.5 h-5 w-5' />
                        </Button>
                      ) : (
                        <Link href='/sign-in'>
                          <Button
                            variant={'default'}
                            className='w-full gap-2 bg-[#4caf50] hover:bg-[#4caf50] hover:opacity-80'
                          >
                            {user ? 'Upgrade now' : 'Sign up'}
                            <MdArrowForward className='ml-1.5 h-5 w-5' />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </TooltipProvider>
          </div>
        </MaxWidthWrapper>

        {/* Testimonial */}
        <div className='flex flex-col gap-3 justify-center items-center bg-black mb-12 h-fit'>
          <div className='flex flex-col gap-3 mx-[10px] mb-16 w-full max-w-xs lg:max-w-7xl'>
            <h1 className='mt-[7rem] uppercase font-bold text-sm sm:text-sm text-[#4caf50]'>
              Customers
            </h1>
            <div className='flex flex-col gap-2'>
              <p className='mt-4 text-white text-2xl lg:text-5xl font-semibold'>
                Join thousands of teams
              </p>
              <p className='mt-2 text-white text-2xl lg:text-5xl font-semibold'>
                who already use FormPilot
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-5 mx-[10px] mt-10 w-full max-w-xs lg:max-w-7xl'>
            <div className='flex flex-col gap-2'>
              <p className='text-[21px] font-medium mb-4 text-center lg:text-left'>
                "FormPilot has revolutionized the way we collect and manage
                data. The intuitive interface and real-time collaboration
                features have streamlined our processes, saving us time and
                boosting overall efficiency. It&apos;s become an indispensable
                tool in our tech stack."
              </p>
              <div className='flex justify-start items-center gap-3 w-full'>
                <div className='flex flex-row justify-center items-start gap-5 w-full h-[90px]'>
                  <Avatar className='flex flex-col justify-center items-start h-fit w-[50px]'>
                    <AvatarImage
                      src='https://www.aipromptsgalaxy.com/wp-content/uploads/2023/06/subrat_female_avatar_proud_face_Aurora_a_25-year-old_girl_with__fd0e4c59-bb7e-4636-9258-6690ec6a71e7.png'
                      alt='@shadcn'
                    />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col justify-center items-start gap-3 w-full'>
                    <p className='text-sm font-semibold'>Sarah Johnson</p>
                    <p className='text-sm text-gray-400 font-medium'>
                      Founder, TechHub Innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[21px] font-medium mb-4 text-center lg:text-left'>
                "FormPilot&apos;s flexibility and TypeScript integration give us
                the control we need over our forms. The customization options
                and seamless integration with our workflows have significantly
                improved our development speed. It&apos;s a game-changer for any
                development team."
              </p>
              <div className='flex justify-start items-center gap-3 w-full'>
                <div className='flex flex-row justify-center items-start gap-5 w-full h-[90px]'>
                  <Avatar className='flex flex-col justify-center items-start h-fit w-[50px]'>
                    <AvatarImage
                      src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de7105dc-f901-4658-a798-d2154a9c1669/dfy0ik1-ea85612f-627a-4064-a60c-d2af38805744.png/v1/fill/w_1280,h_1280,q_80,strp/male_avatar_issue___spa_01_by_corvinusblack_dfy0ik1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2RlNzEwNWRjLWY5MDEtNDY1OC1hNzk4LWQyMTU0YTljMTY2OVwvZGZ5MGlrMS1lYTg1NjEyZi02MjdhLTQwNjQtYTYwYy1kMmFmMzg4MDU3NDQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ba8AbXcUyD8KdLUvI5B5AXLvC1COA4KotH2qlghMZLE'
                      alt='@shadcn'
                    />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col justify-center items-start gap-3 w-full'>
                    <p className='text-sm font-semibold'>David Rodriguez</p>
                    <p className='text-sm text-gray-400 font-medium'>
                      Lead Developer, ByteCraft Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[21px] font-medium mb-4 text-center lg:text-left'>
                "FormPilot not only enhances the user experience but also
                elevates the aesthetics of our forms. The color scheme options
                and interactive elements make our forms engaging, leaving a
                lasting impression on our clients. It&apos;s a perfect blend of
                functionality and design."
              </p>
              <div className='flex justify-start items-center gap-3 w-full'>
                <div className='flex flex-row justify-center items-start gap-5 w-full h-[90px]'>
                  <Avatar className='flex flex-col justify-center items-start h-fit w-[50px]'>
                    <AvatarImage
                      src='https://letstryai.com/wp-content/uploads/2023/08/memoji-avatar-midjourney-prompt.jpg'
                      alt='@shadcn'
                    />
                    <AvatarFallback>EC</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col justify-center items-start gap-3 w-full'>
                    <p className='text-sm font-semibold'>Emily Chen</p>
                    <p className='text-sm text-gray-400 font-medium'>
                      Marketing Manager, DataDynamics Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className=''>
          <div className='flex flex-col lg:grid lg:grid-cols-[400px_1fr_1fr_1fr_1fr] gap-4 py-[49px] m-auto max-w-xs lg:max-w-7xl'>
            <div className='flex flex-col justify-start items-start gap-3'>
              <Link href='/' className='flex z-40 font-semibold'>
                <LOGO />
              </Link>
              <p className='text-base'>
                FormPilot is more than a tool; it&apos;s a solution crafted to
                empower businesses and individuals alike. Whether you&apos;re
                streamlining internal processes, collecting customer feedback,
                or conducting surveys, FormPilot is your partner in shaping
                meaningful data experiences.
              </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-3'>
              <h2 className='text-base lg:pl-10 pt-6 md:pt-6 font-semibold'>
                Quick Links
              </h2>
              <div className='flex flex-col lg:pl-8 pt-6 gap-3'>
                <Link href={'/'}>
                  <p className='text-base'>Features</p>
                </Link>
                <Link href={'/'}>
                  <p className='text-base'>How It Works</p>
                </Link>
                <Link href={'/'}>
                  <p className='text-base'>Pricing</p>
                </Link>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-3'>
              <h2 className='text-base lg:pl-10 pt-6 md:pt-6 font-semibold'>
                Other Links
              </h2>
              <div className='flex flex-col lg:pl-8 pt-6 gap-3'>
                <Link href={'/'}>
                  <p className='text-base'>Privacy</p>
                </Link>
                <Link href={'/'}>
                  <p className='text-base'>Terms & Conditions</p>
                </Link>
                <Link href={'/'}>
                  <p className='text-base'>Disclaimer</p>
                </Link>
                <Link href={'/'}>
                  <p className='text-base'>FAQs</p>
                </Link>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-3'>
              <h2 className='text-base lg:pl-10 pt-6 md:pt-6 font-semibold'>
                Contacts
              </h2>
              <div className='flex flex-col lg:pl-8 pt-6 gap-3'>
                <Link href={'/'}>
                  <p className='text-base'>+2349131297648</p>
                </Link>
                <Link href={'/'}>
                  <p className='text-base'>hello@formpilot.xyz</p>
                </Link>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-3'>
              <div className='flex justify-center items-center gap-3 lg:pl-10 pt-6 md:pt-6 font-semibold'>
                <BsTwitter className='h-6 w-6 text-[#4caf50]-300' />
                <BsFacebook className='h-6 w-6 text-[#4caf50]-300' />
                <BsLinkedin className='h-6 w-6 text-[#4caf50]-300' />
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-base pb-4'>Copyright© FormPilot {date?.getFullYear()}</p>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;