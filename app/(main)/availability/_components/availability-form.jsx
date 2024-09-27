"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { updateAvailability } from "@/actions/availability";
import { availabilitySchema } from "@/app/lib/validators";
import { timeSlots } from "../data";
import useFetch from "@/hooks/use-fetch";

export default function AvailabilityForm({ initialData }) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(availabilitySchema),
    defaultValues: { ...initialData },
  });

  const {
    loading,
    error,
    fn: fnupdateAvailability,
  } = useFetch(updateAvailability);

  const onSubmit = async (data) => {
    await fnupdateAvailability(data);
  };

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {days.map((day, index) => {
          const isAvailable = watch(`${day}.isAvailable`);

          return (
            <motion.div
              key={day}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Controller
                  name={`${day}.isAvailable`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        setValue(`${day}.isAvailable`, checked);
                        if (!checked) {
                          setValue(`${day}.startTime`, "09:00");
                          setValue(`${day}.endTime`, "17:00");
                        }
                      }}
                    />
                  )}
                />
                <span className="font-semibold text-gray-700">
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </span>
              </div>
              {isAvailable && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <Controller
                      name={`${day}.startTime`}
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Start Time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <span>to</span>
                    <Controller
                      name={`${day}.endTime`}
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="End Time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  {errors[day]?.endTime && (
                    <span className="text-red-500 text-sm">
                      {errors[day].endTime.message}
                    </span>
                  )}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-gray-50 p-4 rounded-lg shadow-sm"
      >
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-gray-700">
            Minimum gap before booking (minutes):
          </span>
          <Input
            type="number"
            {...register("timeGap", {
              valueAsNumber: true,
            })}
            className="w-32"
          />
        </div>
        {errors.timeGap && (
          <span className="text-red-500 text-sm mt-2">
            {errors.timeGap.message}
          </span>
        )}
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm"
        >
          {error?.message}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center"
      >
        <Button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {loading ? "Updating..." : "Update Availability"}
        </Button>
      </motion.div>
    </form>
  );
}
