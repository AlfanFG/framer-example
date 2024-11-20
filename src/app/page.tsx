"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Lenis from "lenis";

import { benefitOne, benefitTwo } from "@/components/data";
import Customers from "./Customers";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // Listen for the scroll event and log the event data
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Container>
      <Hero />

      <Customers />
      <SectionTitle
        range={[2000, 2500]}
        preTitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>

      <Benefits range={[3000, 3400]} data={benefitOne} />

      <Benefits range={[4000, 4400]} imgPos="right" data={benefitTwo} />

      <SectionTitle
        range={[4900, 5300]}
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        range={[6600, 7000]}
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      {/* <div className="flex flex-col"> */}
      <SectionTitle
        range={[8200, 8700]}
        preTitle="FAQ"
        title="Frequently Asked Questions"
      >
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      {/* </div> */}

      <Cta />
    </Container>
  );
}
