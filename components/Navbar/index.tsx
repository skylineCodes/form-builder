import React, { useState } from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
import LOGO from '@/components/assets/svgs/formpilot_small.svg';
import { Button, buttonVariants } from '../ui/button';
import { MdArrowForward } from 'react-icons/md';
import ThemeSwitcher from '../ThemeSwitcher';
import MobileNav from '../MobileNav';

const Navbar = () => {
  const [user, setUser] = useState<any>();

  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between'>
          <Link href='/' className='flex z-40 font-semibold'>
            <LOGO />
          </Link>

          <MobileNav isAuth={!!user} />

          <div className='hidden items-center space-x-4 sm:flex'>
            <Link
              href='/pricing'
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
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar