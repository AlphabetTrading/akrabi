"use client";

import ContactMap from "@/components/contact_us/ContactMap";
import React from "react";
import FAQs from "@/components/contact_us/FAQs";
import ContactUsDetail from "@/components/contact_us/ContactUsDetail";
import ContactUsForm from "@/components/contact_us/ContactUsForm";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center pt-24 bg-primary">
      <div className="flex flex-col w-11/12 lg:w-5/6 gap-y-12">
        <h1 className="text-5xl font-semibold">Contact us</h1>
        <div className="w-full flex flex-col justify-start lg:flex-row gap-12">
          <ContactUsForm />
          <ContactUsDetail />
        </div>
      </div>
      <div className="w-full flex flex-col items-center my-8 lg:mt-16">
        <ContactMap />
        <FAQs />
      </div>
    </div>
  );
};

export default Page;
