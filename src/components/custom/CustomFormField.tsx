"use client";
import Image from "next/image";
import React from "react";
import { Control } from "react-hook-form";
import { FormFieldTypes } from "../forms/PatientForm";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
interface myProps {
  control: Control<any>;
  formType: FormFieldTypes;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  randerSkeleton?: (field: unknown) => React.ReactNode;
}

const RenderInput = ({ field, props }: { field: any; props: myProps }) => {
  const { control, formType, name, label, placeholder, iconAlt, iconSrc } =
    props;
  switch (formType) {
    case FormFieldTypes.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt || "input"}
              width={20}
              height={20}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input placeholder={placeholder} {...field}
            className="shad-input border-0" />
          </FormControl>
        </div>
      );
    case FormFieldTypes.PHONE_INPUT:
      return (
          <FormControl>
           <PhoneInput
           defaultCountry="US"
           onChange={(value) => field.onChange(value)}
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value}
            className="input-phone"
            />
          </FormControl>
      );

      default:
      return null;
  }
};

const CustomFormField = (props: myProps) => {
  const { control, formType, name, label, placeholder, iconAlt, iconSrc } =
    props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {formType !== FormFieldTypes.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;

{
  /* <FormControl>
    <Input placeholder={placeholder} {...field} />
  </FormControl>
  <FormDescription>This is your public display name.</FormDescription>*/
}
