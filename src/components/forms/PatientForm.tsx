"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField from "../custom/CustomFormField";
import SubmitButton from "../custom/SubmitButton";
import { Form } from "./../ui/form";
import { UserFormValidation } from "@/lib/validation";

export enum FormFieldTypes {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  RADIO = "radio",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
  PHONE_INPUT = "phoneInput",
  EMAIL_INPUT = "emailInput",
}

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:""
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof UserFormValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setIsLoading(true);
    try {
      // Make an API request or something.
      const userData = {name:values.name, email:values.email, phone:values.phone};
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">
            Let&rsquo;s get started by setting up your account. You will be able to
            manage your health records and appointments.
          </p>
        </section>
        <CustomFormField
          formType={FormFieldTypes.INPUT}
          control={form.control}
          name="Name"
          label="Name"
          placeholder="Enter your full name here"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          formType={FormFieldTypes.INPUT}
          control={form.control}
          name="Email"
          label="Email"
          placeholder="jhon.joe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          formType={FormFieldTypes.PHONE_INPUT}
          control={form.control}
          name="Phone"
          label="Phone Number"
          placeholder="+123XXXXXXXX"
        />
        <SubmitButton isLoading={isLoading}>Get Started </SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
