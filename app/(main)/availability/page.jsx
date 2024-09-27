"use client";

import React from "react";
import AvailabilityForm from "./_components/availability-form";
import { getUserAvailability } from "@/actions/availability";
import { defaultAvailability } from "./data";
import { motion } from "framer-motion";

export default async function AvailabilityPage() {
  const availability = await getUserAvailability();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Set Your Availability
      </h1>
      <AvailabilityForm initialData={availability || defaultAvailability} />
    </motion.div>
  );
}
