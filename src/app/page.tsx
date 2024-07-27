"use client";

import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { LineChartMultiple } from "./components/ui/Charts/LineChartMultiple";
import { CTASection } from "./components/ui/CallToActions/CTA_Default_Right";
import { CTASectionLeft } from "./components/ui/CallToActions/CTA_Default_Left";
import { StickyScroll } from "./components/ui/scroll-reveal";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { FollowerPointerCard } from "./components/ui/FollowingPointer";
import { title } from "process";
import { ParallaxScroll } from "./components/ui/ParallaxScroll";
import { ReviewCard } from "./components/ui/ReviewCard";

// Dynamically import heavy components if needed
const Hero = dynamic(() => import('./components/Home/Hero'), { suspense: true });

const Home = () => {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real-time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

  const reviews = [
    {
      title: "Review 1",
      description: "This is the first review.",
    },
    {
      title: "Review 2",
      description: "This is the second review.",
    },
    {
      title: "Review 3",
      description: "This is the third review.",
    },
    {
      title: "Review 1",
      description: "This is the first review.",
    },
    {
      title: "Review 2",
      description: "This is the second review.",
    },
    {
      title: "Review 3",
      description: "This is the third review.",
    },
    // Add more reviews as needed
  ];

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <FollowerPointerCard title="CodeScience">
          <Hero />
        </FollowerPointerCard>

      </Suspense>

      <CTASection
        Title="Ready to Take Your Coding Skills to the Next Level?"
        subTitle="Join CodeScience today and start your journey where ideas code and tech thrives. Whether you’re a beginner or an experienced developer, we have something for you."
        display={
          <Image
            className="object-cover object-center"
            src="/Untitled_design__1_-removebg-preview.png"
            alt="mockup"
            width={600}
            height={600}
            loading="lazy"
          />
        }
        linkComponent={
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">

            Register
          </Link>
        }
      />
      <div className="py-12">
        <StickyScroll content={content} />
      </div>


      <CTASectionLeft
        Title="Experience the Growth of CodeScience"
        subTitle="Join our thriving community and watch your skills soar. With CodeScience, you'll have access to the best resources and support to accelerate your learning and achieve your goals."
        display={
          <div className="">
            <LineChartMultiple />
          </div>
        }
      />
      <div>
        <ParallaxScroll reviews={reviews} />
      </div>

      <Footer />
    </>
  );
};

export default Home;
