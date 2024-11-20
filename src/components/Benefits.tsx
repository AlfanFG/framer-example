"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Container } from "@/components/Container";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ScrollAdvanced } from "./ScrollAdvanced";

interface BenefitsProps {
  imgPos?: "left" | "right";
  range: number[];
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data, range } = props;
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const inView = useInView(target);

  return (
    <Container className="flex flex-wrap mb-20 items-center h-[150vh] sticky -top-40 lg:gap-10 lg:flex-nowrap">
      <ScrollAdvanced range={range}>
        <div className="flex  gap-2">
          <div
            className={`flex items-center justify-center w-full lg:w-1/2 ${
              props.imgPos === "right" ? "lg:order-1" : ""
            }`}
          >
            <div>
              <motion.div
                ref={target}
                style={{ scale: inView ? scale : 0, y }}
                transition={{ duration: 0.3, delay: 1, ease: "linear" }}
              >
                <div>
                  <Image
                    src={data.image}
                    width={521}
                    height={521}
                    alt="Benefits"
                    className={"object-cover"}
                    placeholder="blur"
                    blurDataURL={data.image.src}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div
            className={`flex flex-wrap items-center w-full lg:w-1/2 ${
              data.imgPos === "right" ? "lg:justify-end" : ""
            }`}
          >
            <div>
              <div className="flex flex-col w-full mt-4">
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                  {data.title}
                </h3>

                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                  {data.desc}
                </p>
              </div>

              <div className="w-full mt-5">
                {data.bullets.map((item, index) => (
                  <Benefit key={index} title={item.title} icon={item.icon}>
                    {item.desc}
                  </Benefit>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollAdvanced>
    </Container>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-indigo-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
