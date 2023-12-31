import React, { useState } from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
import LOGO from '@/components/assets/svgs/formpilot_small.svg';
import { Button, buttonVariants } from '../ui/button';
import { MdArrowForward } from 'react-icons/md';
import ThemeSwitcher from '../ThemeSwitcher';
import MobileNav from '../MobileNav';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [user, setUser] = useState<any>();

  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex h-14 items-center justify-between'
        >
          <Link href='/' className='flex z-40 font-semibold'>
            <LOGO />
          </Link>

          <MobileNav isAuth={!!user} />

          <div className='hidden items-center space-x-4 sm:flex'>
            <Link
              href='/'
              className={buttonVariants({
                variant: 'ghost',
                size: 'lg',
              })}
            >
              Pricing
            </Link>
            <Link
              href='/sign-in'
              className={buttonVariants({
                variant: 'ghost',
                size: 'lg',
              })}
            >
              Sign in
            </Link>
            <Link href='/sign-up'>
              <Button
                variant={'default'}
                className='gap-2 bg-[#4caf50] hover:bg-[#4caf50] hover:opacity-80'
              >
                Get started <MdArrowForward className='ml-1.5 h-5 w-5' />
              </Button>
            </Link>
            <ThemeSwitcher />
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar