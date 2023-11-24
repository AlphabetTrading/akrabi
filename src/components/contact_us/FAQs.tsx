import React from "react";

type Props = {};

const faqs = [
  {
    id: 1,
    q: "What does Akraabi mean?",
    a: "Akraabi is an amharic word (አቅራቢ), meaning an entity that provides. Akraabi was founded with the aim of humanizing the previously anonymous producers behind our coffee, seeking to put a face to the names associated with our exceptional product.",
  },
  {
    id: 2,
    q: "Where does your green coffee come from?",
    a: "We directly source our amazing green coffee beans from trusted producers across renowned coffee-growing regions such as Gedeb, Guji, Limmu, Sidamo & Yirgacheffe",
  },
  {
    id: 3,
    q: "How do you ensure sustainability in coffee production?",
    a: "We ensure sustainability by partnering with farmers who embrace environmentally friendly growing techniques, such as water conservation, and natural pest control methods. Additionally, we actively support social programs that empower farmers and their communities, promoting fair wages and ethical working conditions.",
  },
  {
    id: 4,
    q: "How can I get in touch with your team for further inquiries or orders?",
    a: "You can get in touch with us via email- Henock@alphabettrading.com or contact us through the phone via +25191 126 1233.",
  },
];

const FAQs = (props: Props) => {
  return (
    <div className="bg-primary w-full flex flex-col items-center gap-y-4 lg:gap-y-8 py-8 lg:py-16">
      <h1 className="text-5xl">FAQs</h1>
      <div className="w-11/12 lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {faqs.map((faq, index) => {
          return (
            <div key={index} className="col-span-1">
              <h1 className="text-2xl font-semibold mb-2 lg:mb-3">{faq.q}</h1>
              <h1 className="text-xl font-light text-[#000000]/[75%]">
                {faq.a}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
