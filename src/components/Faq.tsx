"use client";
import React, { useRef } from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";

export const Faq = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start center", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.6, 0]);
  const inView = useInView(target);

  return (
    <Container className="!p-0 sticky top-0 h-[120vh] flex items-center">
      <AnimatePresence>
        <motion.div
          ref={target}
          className="w-full max-w-2xl p-2 mx-auto rounded-2xl"
          style={{ scale: inView ? scale : 0 }}
          exit={{ scale: 0 }}
          transition={{ ease: "linear" }}
        >
          {faqdata.map((item) => (
            <div key={item.question} className="mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                      <span>{item.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                      {item.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

const faqdata = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, this you can.",
  },
  {
    question: "What is your refund policy? ",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];
