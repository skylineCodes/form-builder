"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect } from 'react';

function ErrorPage({ error }: { error: Error }) {
  useEffect(() => console.log(error), [Error]);

  return <div className='flex items-center justify-center w-full h-full flex-col gap-4'>
    <h2 className='text-destructive text-4xl'>Something went wrong!</h2>
    <Button asChild>
      <Link href={'/'}>Go back home</Link>
    </Button>
  </div>;
}

export default ErrorPage