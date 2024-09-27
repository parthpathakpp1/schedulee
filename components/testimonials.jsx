"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content:
      "Schedulrr has transformed how I manage my team's meetings. It's intuitive and saves us hours every week!",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "David Lee",
    role: "Freelance Designer",
    content:
      "As a freelancer, Schedulrr helps me stay organized and professional. My clients love how easy it is to book time with me.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Emily Chen",
    role: "Startup Founder",
    content:
      "Schedulrr streamlined our hiring process. Setting up interviews has never been easier!",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Michael Brown",
    role: "Sales Executive",
    content:
      "I've seen a 30% increase in my meeting bookings since using Schedulrr. It's a game-changer for sales professionals.",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const TestimonialsCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-blue-800 text-white shadow-xl">
                <CardContent className="flex flex-col justify-between h-full p-6">
                  <div>
                    <Quote className="w-8 h-8 text-blue-300 mb-4" />
                    <p className="text-blue-100 mb-4">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-blue-300">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-blue-600 text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-blue-100">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-blue-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex text-blue-100 bg-blue-700 hover:bg-blue-600" />
      <CarouselNext className="hidden md:flex text-blue-100 bg-blue-700 hover:bg-blue-600" />
    </Carousel>
  );
};

export default TestimonialsCarousel;
