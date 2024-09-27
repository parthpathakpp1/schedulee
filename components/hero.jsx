import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PenBox, Sparkles } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <motion.div variants={fadeInUp} className="lg:w-1/2">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-blue-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolutionize Your{" "}
              <span className="text-blue-600 relative">
                Scheduling
                <motion.span
                  className="absolute -top-6 -right-6"
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.span>
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 mb-10"
              variants={fadeInUp}
            >
              Schedulrr uses AI to streamline your calendar, boost productivity,
              and eliminate scheduling headaches.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="text-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/events?create=true">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg flex items-center gap-2 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
                >
                  <PenBox size={18} />
                  Create Event
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div
              className="relative w-full max-w-md aspect-square"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src="/poster.png"
                alt="Schedulrr Dashboard"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="text-blue-600 font-semibold">AI-Powered</p>
                <p className="text-gray-600 text-sm">Intelligent Scheduling</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
