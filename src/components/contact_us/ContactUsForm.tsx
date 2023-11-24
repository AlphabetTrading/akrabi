import { sendContactUsEmail } from "@/helpers/sendContactUsEmail";
import clsx from "clsx";
import { Formik, FormikProps, Form, Field } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

type Props = {};

const ContactUsForm = (props: Props) => {
  interface Values {
    name: string;
    email: string;
    message: string;
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(20, "Message must be at least 20 characters")
      .max(300, "Message must be at most 300 characters"),
  });

  const initialValues: Values = {
    name: "",
    email: "",
    message: "",
  };

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values: any, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          try {
            await sendContactUsEmail(values);
            setSubmitting(false);
            resetForm();
          } catch (error: any) {
            setSubmitting(false);
            setErrorMessage(error.message);
          }
        }}
      >
        {(props: FormikProps<any>) => (
          <Form className="flex flex-col gap-y-4 lg:gap-y-8 bg-primary">
            <div className="w-full flex flex-col gap-y-1">
              <Field
                className={clsx(
                  "w-full border-b-2 p-2 bg-primary",
                  props.touched.name && props.errors.name
                    ? "border-red-500"
                    : "border-black/30",
                )}
                name="name"
                type="text"
                placeholder="Full Name"
              />
              <div className="h-2">
                {props.touched.name && props.errors.name && (
                  <h1 className="text-xs lg:text-sm text-red-600 ml-2">
                    {props.errors.name.toString()}
                  </h1>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-1">
              <Field
                className={clsx(
                  "border-b-2 p-2 bg-primary",
                  props.touched.email && props.errors.email
                    ? "border-red-500"
                    : "border-black/30",
                )}
                name="email"
                type="text"
                placeholder="Email"
              />

              <div className="h-2">
                {props.touched.email && props.errors.email && (
                  <h1 className="text-xs lg:text-sm text-red-600 ml-2">
                    {props.errors.email.toString()}
                  </h1>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-1">
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                className={clsx(
                  "w-full border-b-2 p-2 resize-none bg-primary",
                  props.touched.message && props.errors.message
                    ? "border-red-500"
                    : "border-black/30",
                )}
              />
              <div className="h-2">
                {props.touched.message && props.errors.message && (
                  <h1 className="text-xs lg:text-sm text-red-600 ml-2">
                    {props.errors.message.toString()}
                  </h1>
                )}
              </div>
            </div>
            {errorMessage && (
              <div className="bg-[#E4646451] py-1 rounded-md">
                <span className="text-[#E46464] px-4 text-xs lg:text-sm">
                  {errorMessage}
                </span>
              </div>
            )}
            <button
              className="flex justify-center gap-x-3 w-40 bg-secondary text-white p-2 self-end font-semibold"
              type="submit"
            >
              {props.isSubmitting && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsForm;
