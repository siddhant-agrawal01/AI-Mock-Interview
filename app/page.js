"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import ThemeSwitcher from "../components/ThemeSwitch";
import { cn } from "../lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { TypewriterEffectSmooth } from "../@/components/ui/typewriter-effect";
import { SparklesCore } from "../@/components/ui/sparkles";

const words = [
  {
    text: "Ace",
    className: "text-6xl font-bold dark:text-white",
  },
  {
    text: "Your",
    className: "text-6xl font-bold dark:text-white",
  },
  {
    text: "Interview",
    className: "text-6xl font-bold dark:text-blue-500 dark:text-blue-400",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const areFeaturesInView = useInView(featuresRef, { once: true, amount: 0.1 });
  const heroControls = useAnimation();
  const featuresControls = useAnimation();

  useEffect(() => {
    if (isHeroInView) heroControls.start("visible");
  }, [isHeroInView, heroControls]);

  useEffect(() => {
    if (areFeaturesInView) featuresControls.start("visible");
  }, [areFeaturesInView, featuresControls]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <SparklesCore
          id="sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor="#888"
          particleDensity={70}
          className="w-full h-full opacity-50 dark:opacity-30"
        />
      </div>
      
      {/* Floating orbs */}
      <div 
        className="hidden lg:block absolute w-80 h-80 rounded-full bg-blue-500/10 dark:bg-blue-500/5"
        style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`,
          filter: "blur(80px)",
          transition: "all 2s cubic-bezier(0.075, 0.82, 0.165, 1)"
        }}
      />
      <div 
        className="hidden lg:block absolute w-64 h-64 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5"
        style={{
          right: `${mousePosition.x * 0.01}px`,
          bottom: `${mousePosition.y * 0.01}px`,
          filter: "blur(60px)",
          transition: "all 2.2s cubic-bezier(0.075, 0.82, 0.165, 1)"
        }}
      />

      {/* Theme switcher */}
      <div className="absolute top-5 right-5 z-50">
        <ThemeSwitcher />
      </div>

      {/* Hero section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeInUp}
        className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10"
      >
        <motion.div 
          variants={fadeInUp} 
          className="text-center mb-8"
        >
          <div className="mb-8">
            <TypewriterEffectSmooth words={words} className="justify-center" />
            <motion.h2 
              variants={fadeInUp}
              className="text-xl md:text-2xl font-medium mt-4 dark:text-gray-300 text-gray-700"
            >
              Before Your Actual Interview
            </motion.h2>
          </div>
          
          <motion.p 
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg md:text-xl mb-10 dark:text-gray-300 text-gray-600"
          >
            Practice mock interviews with AI-powered questions, real-time feedback, and a simulated interview environment to land your dream job.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Start Your Mock Interview
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-10"
        >
          <div className="animate-bounce flex flex-col items-center">
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Scroll to explore</p>
            <svg 
              className="w-6 h-6 text-gray-600 dark:text-gray-400" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.section>

      {/* Features section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresControls}
        variants={staggerContainer}
        className="py-20 px-4 md:px-8 relative z-10"
      >
        <motion.h3 
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white"
        >
          Features Designed for Success
        </motion.h3>
        
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {[
            {
              title: "AI-Based Questioning",
              description: "Get personalized questions tailored to your specific industry, role, and experience level.",
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            {
              title: "Real-Time Feedback",
              description: "Receive instant analysis on your responses, body language, and communication style.",
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              )
            },
            {
              title: "Camera & Mic Integration",
              description: "Simulate real interview conditions with full video and audio recording capabilities.",
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "Comprehensive Reports",
              description: "Access detailed analytics on your performance with actionable improvement suggestions.",
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )
            },
            {
              title: "Multiple Fields",
              description: "Choose from dozens of career paths and job roles across various industries.",
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              )
            },
            {
              title: "User-Friendly Interface",
              description: "Navigate effortlessly through our intuitive platform designed for all technical levels.",
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-gray-700">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold ml-3 dark:text-white">{feature.title}</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/20 p-10 md:p-16 rounded-3xl shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Ready to Land Your Dream Job?</h3>
          <p className="text-lg md:text-xl mb-8 dark:text-gray-300 text-gray-600">
            Join thousands of successful job seekers who have used our platform to prepare for their interviews.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg inline-flex items-center"
            >
              Start Practicing Now
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 dark:text-gray-400 relative z-10">
        <p>© {new Date().getFullYear()} Mockster. All rights reserved.</p>
      </footer>
    </div>
  );
}