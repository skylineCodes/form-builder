"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement, FormElementInstance, SubmitFunction } from "../FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import useDesigner from "../hooks/useDesigner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { LuImage } from "react-icons/lu";
import Image from "next/image";

const type: ElementsType = "ImageField";

const extraAttributes = {
  title: 'Image field',
  link: 'Image Url',
  width: 0,
  height: 0,
};

const propertiesSchema = z.object({
  title: z.string().min(2).max(70),
  link: z.string().min(2).max(500),
  width: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive().min(1)
    ),
  height: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive().min(1)
    ),
});

export const ImageFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: LuImage,
    label: 'Image field',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: (
    formElement: FormElementInstance,
    currentValue: string
  ): boolean => {
    const element = formElement as CustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { title, link, height, width } = element.extraAttributes;

  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className='text-muted-foreground'>Title field</Label>
      <p className='text-xl'>{title}</p>
    </div>
  );
}

function FormComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { title, link, height, width } = element.extraAttributes;

  return (
    <Image
      src={link}
      alt='Picture of the author'
      width={width}
      height={height}
    />
  );
}

function PropertiesComponent({ elementInstance }: {
  elementInstance: FormElementInstance
}) {  
  const element = elementInstance as CustomInstance;

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const [error, setError] = useState(false);
  
  const { updateElement } = useDesigner();

  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: 'onBlur',
    defaultValues: {
      title: element.extraAttributes.title,
      link: element.extraAttributes.link,
      height: element.extraAttributes.height,
      width: element.extraAttributes.width,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    console.log(values)
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        title: values.title,
        link: values.link,
        height: values.height,
        width: values.width,
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
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='link'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Url</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='height'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  // type='number'
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='width'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Width</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  // type='number'
                  // onChange={(e) => {
                  //   const valid = ImageFieldFormElement.validate(
                  //     element,
                  //     e.target.value
                  //   );
                  //   setError(!valid);
                  //   if (!valid) return;
                  //   setWidth(Number(e.target.value));
                  // }}
                  // onBlur={(e) => {
                  //   const valid = ImageFieldFormElement.validate(
                  //     element,
                  //     e.target.value
                  //   );
                  //   setError(!valid);
                  //   if (!valid) return;
                  //   setWidth(Number(e.target.value));
                  // }}
                  // value={width}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
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