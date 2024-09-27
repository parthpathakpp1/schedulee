"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Clock,
  LinkIcon,
  CheckCircle,
  Users,
  BarChart,
  PenBox,
} from "lucide-react";
import TestimonialsCarousel from "@/components/testimonials";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered event scheduling that learns your preferences",
  },
  {
    icon: Clock,
    title: "Time Zone Intelligence",
    description: "Automatically adjust for time zones across global teams",
  },
  {
    icon: LinkIcon,
    title: "Customizable Booking Pages",
    description: "Create branded scheduling pages that reflect your style",
  },
  {
    icon: Users,
    title: "Team Coordination",
    description: "Effortlessly manage group availability and meetings",
  },
  {
    icon: CheckCircle,
    title: "Integration Ecosystem",
    description: "Seamlessly connect with your favorite tools and apps",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Gain insights into your scheduling patterns and efficiency",
  },
];

const howItWorks = [
  {
    step: "Sign Up",
    description: "Create your free Schedulee account in seconds",
  },
  {
    step: "Customize",
    description: "Set your preferences, availability, and booking rules",
  },
  {
    step: "Share",
    description:
      "Distribute your unique scheduling link to clients or colleagues",
  },
  {
    step: "Automate",
    description: "Let Schedulee handle the rest, from bookings to reminders",
  },
];

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

const Home = () => {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Key Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-blue-900"
          >
            Powerful Features for Effortless Scheduling
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-blue-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Loved by Professionals Worldwide
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-blue-900"
          >
            How Schedulee Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-blue-900">
                  {step.step}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Scheduling Experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            Join thousands of professionals who trust Schedulrr to streamline
            their time management and boost productivity.
          </motion.p>
          <Link href="/dashboard">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg text-blue-600 hover:bg-white hover:text-blue-700"
            >
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
