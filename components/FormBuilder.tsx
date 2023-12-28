'use client';

import { Form } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import PreviewDialogBtn from './PreviewDialogBtn';
import PublishFormBtn from './PublishFormBtn';
import SaveFormBtn from './SaveFormBtn';
import Designer from './Designer';
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import DragOverlayWrapper from './DragOverlayWrapper';
import useDesigner from './hooks/useDesigner';
import { ImSpinner2 } from 'react-icons/im';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Confetti from 'react-confetti';
import { FaDesktop } from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';

function FormBuilder({ form }: { form: Form }) {
  const { setElements, setSelectedElement, width, setWidth } = useDesigner();
  const [isReady, setIsReady] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    if (isReady) return;
    const elements = JSON.parse(form.content);
    setElements(elements);
    setSelectedElement(null);
    const readyTimeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(readyTimeout);
  }, [form, setElements, isReady, setSelectedElement]);

  if (!isReady) {
    return (
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <ImSpinner2 className='animate-spin h-12 w-12' />
      </div>
    );
  }

  const shareURL = `${window.location.origin}/submit/${form?.shareURL}`;

  if (form.published) {
    return (
      <>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={2000}
        />
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <div className='max-w-lg'>
            <h1 className='text-center text-4xl font-bold text-primary border-b pb-2 mb-10'>
              🎊🎊 Form Published 🎊🎊
            </h1>
            <h2 className='text-2xl'>Share this form</h2>
            <h3 className='text-xl text-muted-foreground border-b pb-10'>
              Anyone with the link can view and submit the form
            </h3>
            <div className='my-4 flex flex-col gap-2 items-center w-full border-b pb-4'>
              <Input className='w-full' readOnly value={shareURL} />
              <Button
                className='mt-2 w-full'
                onClick={() => {
                  navigator.clipboard.writeText(shareURL);
                  toast({
                    title: 'Copied!',
                    description: 'Link copied to clipboard',
                  });
                }}
              >
                Copy link
              </Button>
            </div>
            <div className='flex justify-between'>
              <Button variant={'link'} asChild>
                <Link href={'/'} className='gap-2'>
                  <BsArrowLeft />
                  Go back home
                </Link>
              </Button>
              <Button variant={'link'} asChild>
                <Link href={`/dashboard/forms/${form.id}`} className='gap-2'>
                  Form details
                  <BsArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <DndContext sensors={sensors}>
      <main className='flex flex-col w-full'>
        <nav className='grid grid-cols-3 border-b-2 p-4 gap-3 items-center'>
          <h2 className='truncate font-medium'>
            <span className='text-muted-foreground mr-2'>Form:</span>
            {form.name}
          </h2>
          <div className='flex gap-8 items-center justify-center'>
            <FaDesktop
              className='h-6 w-6 cursor-pointer'
              onClick={() => setWidth('max-w-6xl')}
            />
            <FiSmartphone
              className='h-6 w-6 cursor-pointer'
              onClick={() => setWidth('max-w-sm')}
            />
          </div>
          <div className='flex items-center justify-end gap-2'>
            <PreviewDialogBtn />
            {!form.published && (
              <>
                <SaveFormBtn id={form.id} />
                <PublishFormBtn id={form.id} />
              </>
            )}
          </div>
        </nav>
        <div className='flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-black dark:bg-white'>
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}

export default FormBuilder;
