"use client";

import ContactMap from "@/components/contact_uss/ContactMap";
import { Field, Form, Formik, FormikProps, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

type Props = {};

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

const Page = (props: Props) => {
  return (
    <div className="w-full max-h-screen h-screen flex">
      <ContactMap />
      <div className="w-full h-full">
        <div className="w-full flex justify-center">
          <div className="w-5/6 flex flex-col py-16">
            <h1 className="capitalize font-semibold text-4xl">Contact us</h1>
            <h1 className="uppercase text-lg">Get in touch</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, helpers) => {}}
            >
              {(props: FormikProps<any>) => (
                <Form className="flex flex-col gap-y-8 mt-6">
                  <Field
                    className="border-b-2 py-2"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                  />
                  <Field
                    className="border-b-2 py-2"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={5}
                    className="w-full border-b-2 py-2 resize-none"
                  />
                  <button
                    className="w-fit border border-black p-2 px-8 self-end font-semibold"
                    type="submit"
                  >
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="w-full bg-secondary flex justify-center py-6">
          <div className="w-5/6 grid grid-cols-3 text-white">
            <div className="w-full col-span-1 flex items-start gap-x-2">
              <img src="/icons/contact-us/phone.svg" />
              <div className="flex flex-col gap-y-1">
                <h1 className="font-semibold text-2xl uppercase">Phone</h1>
                <h1>(+251) 911261233</h1>
                <h1>(+251) 911261233</h1>
              </div>
            </div>
            <div className="w-full col-span-1 flex items-start gap-x-2">
              <img src="/icons/contact-us/address.svg" />
              <div className="flex flex-col gap-y-1">
                <h1 className="font-semibold text-2xl uppercase">Address</h1>
                <h1>Bel Amour Bldg 5th Floor Addis Ababa, Ethiopia</h1>
              </div>
            </div>
            <div className="w-full col-span-1 flex items-start gap-x-2">
              <img src="/icons/contact-us/email.svg" />
              <div className="flex flex-col gap-y-1">
                <h1 className="font-semibold text-2xl uppercase">Email</h1>
                <h1>henock@alphabettrading.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
