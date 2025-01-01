"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../components/ThemeSwitch";
import { cn } from "../lib/utils";
import AnimatedGradientText from "../@/components/ui/animated-gradient-text";
import animatedGrid from "../@/components/ui/animatedGrid";
import AnimatedGridPattern from "../@/components/ui/animatedGrid";
import { SparklesCore } from "../@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "../@/components/ui/typewriter-effect";
import { WavyBackground } from "../@/components/ui/wavy-background";
import { Cover } from "../@/components/ui/cover";

import React from "react";

const words = [
  {
    text: "Ace ",
    className: " text-5xl dark:text-white",
  },
  {
    text: " Your ",
    className: " text-5xl dark:text-white",
  },
  {
    text: " Interview",
    className: " text-5xl dark:text-white",
  },
  {
    text: " Before ",
    className: " text-5xl dark:text-white",
  },
  {
    text: " Interview.",
    className: "text-blue-500 text-5xl dark:text-blue-500",
  },
];
export default function GridBackgroundDemo() {
  return (
    <>
      
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-end top-0 right-0">
        <ThemeSwitcher />
        </div>
        {/* <h1
        className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
     Mockster
      </h1> */}

        {/* <div className="flex flex-col items-center justify-center h-[40rem]">
          <TypewriterEffectSmooth words={words} />
        </div> */}

        <main className="container mx-auto p-4">
          <section className="text-center my-10">

  

            <h2 className="text-4xl font-bold mb-4">
              Prepare for Your Dream Job
            </h2>
            <p className="text-lg mb-6">
              Practice mock interviews for any field using AI-based questioning,
              answers, feedback, and real environment simulation with camera and
              mic.
            </p>
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              Start Your Mock Interview
            </Link>
          </section>

          <section className="my-10">
            <h3 className="text-2xl font-bold mb-4 text-center">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">AI-Based Questioning</h4>
                <p>Get questions tailored to your field and experience level.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">Real-Time Feedback</h4>
                <p>
                  Receive instant feedback on your answers to improve your
                  performance.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">
                  Camera & Mic Integration
                </h4>
                <p>
                  Simulate a real interview environment with camera and mic
                  support.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">Comprehensive Reports</h4>
                <p>
                  Get detailed reports on your performance and areas for
                  improvement.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">Multiple Fields</h4>
                <p>Practice interviews for various fields and job roles.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">
                  User-Friendly Interface
                </h4>
                <p>Enjoy a seamless and intuitive user experience.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
