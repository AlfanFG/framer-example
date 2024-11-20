import React from "react";
import { Container } from "@/components/Container";
import { ScrollAdvanced } from "./ScrollAdvanced";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  range?: number[];
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col  mt-4 h-[120vh] sticky top-36 ${
        props.align === "left" ? "" : "items-center justify-start text-center"
      }`}
    >
      <ScrollAdvanced range={props.range}>
        <>
          {props.preTitle && (
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              {props.preTitle}
            </div>
          )}

          {props.title && (
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {props.title}
            </h2>
          )}

          {props.children && (
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {props.children}
            </p>
          )}
        </>
      </ScrollAdvanced>
    </Container>
  );
};
