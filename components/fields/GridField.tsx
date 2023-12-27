'use client';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../FormElements';
import { Label } from '../ui/label';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { JSX, useEffect } from 'react';
import useDesigner from '../hooks/useDesigner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { LuGrid } from 'react-icons/lu';
import { Slider } from '../ui/slider';

const type: ElementsType = 'GridField';

const extraAttributes = {
  column: 1, // fr
};

const propertiesSchema = z.object({
  column: z.number().min(1).max(5),
});

export const GridFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: LuGrid,
    label: 'Grid',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { column } = element.extraAttributes;

  // function displayColumnByCount(column: number) {
  //   setTimeout(() => {
  //     let gridFieldDiv: any = document.getElementById('gridfield');
  //     console.log(gridFieldDiv);
  //     const currentDiv = (gridFieldDiv.innerHTML +=
  //       "<div className='flex flex-col h-full border border-sky-500 border-dashed items-center'>hello</div>");
  //   }, 500);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     const gridfield = document.getElementById('gridfield');
  //     const cells: any = gridfield?.getElementsByTagName('div');

  //     for (const cell of cells) {
  //       cell.remove();
  //     }
  //   }, 200);

  //   for (let i = 0; i < Number(column); i++) {
  //     // Delay each iteration by 1 second
  //     setTimeout(
  //       function () {          
  //         let gridFieldDiv: any = document.getElementById('gridfield');
  //         console.log(gridFieldDiv);
  //         const currentDiv = (gridFieldDiv.innerHTML +=
  //           "<div className='gridItem flex flex-col h-full border border-sky-500 border-dashed items-center'>hello</div>");
  //       },
  //       500 * i,
  //       i
  //     );
  //   }
  // }, [column])

  return (
    // <div className='flex h-[400px] flex-col gap-2 w-full items-center'>
    <>
      {column === 1 && (
        <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
          hello
        </div>
      )}
      {column === 2 && (
        <>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
        </>
      )}
      {column === 3 && (
        <>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
        </>
      )}
      {column === 4 && (
        <>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
        </>
      )}
      {column === 5 && (
        <>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
          <div className='flex flex-col items-center h-full border border-sky-500 border-dashed'>
            hello
          </div>
        </>
      )}
    </>
    // </div>
  );
}

function FormComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { height } = element.extraAttributes;
  return <div style={{ height, width: '100%' }}></div>;
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { updateElement } = useDesigner();
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: 'onBlur',
    defaultValues: {
      column: element.extraAttributes.column,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { column } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        column,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='space-y-3'
      >
        <FormField
          control={form.control}
          name='column'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Column (px): {form.watch('column')}</FormLabel>
              <FormControl className='pt-2'>
                <Slider
                  defaultValue={[field.value]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(value) => {
                    field.onChange(value[0]);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
