"use client";

import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Poppins } from "next/font/google";
import { cities, levels, program, states } from '@/utils/constant';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ApplyFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  phone: z.string().nonempty("Phone number is required"),
  state: z.string().nonempty("Please select a state"),
  city: z.string().nonempty("Please select a city"),
  level: z.string().nonempty("Please select a level"),
  program: z.string().nonempty("Please select a program"),
});

interface ApplyNowFormProps {
  isFormOpen: boolean;
  setIsFormOpen: (value: boolean) => void;
  isScrolled: boolean;
}

const ApplyNowForm = ({ isFormOpen, setIsFormOpen, isScrolled }: ApplyNowFormProps) => {
  const [selectedState, setSelectedState] = useState<keyof typeof cities | "">("");
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(ApplyFormSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("https://formspree.io/f/mvgzrnyl", { // Replace with your Formspree form ID
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionMessage("Thanks for applying! We will contact you soon.");
      } else {
        setSubmissionMessage("Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionMessage("An error occurred. Please try again later.");
    }
  };

  const renderFormFields = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <Input
          placeholder="Name"
          className="h-12"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name?.message as string}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email"
          className="h-12"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email?.message as string}</p>
        )}
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Phone Number"
          className="h-12"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
        )}
      </div>

      <div>
        <Select
          onValueChange={(value) => {
            setSelectedState(value as keyof typeof cities);
            setValue("state", value);
          }}
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select State" />
          </SelectTrigger>
          <SelectContent>
            {states.map((state) => (
              <SelectItem key={state} value={state}>{state}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.state && (
          <p className="text-red-500 text-sm mt-1">{errors.state.message as string}</p>
        )}
      </div>

      <div>
        <Select
          disabled={!selectedState}
          onValueChange={(value) => setValue("city", value)}
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            {selectedState && cities[selectedState]?.map((city) => (
              <SelectItem key={city} value={city}>{city}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message as string}</p>
        )}
      </div>

      <div>
        <Select onValueChange={(value) => setValue("level", value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select Level" />
          </SelectTrigger>
          <SelectContent>
            {levels.map((level) => (
              <SelectItem key={level} value={level}>{level}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.level && (
          <p className="text-red-500 text-sm mt-1">{errors.level.message as string}</p>
        )}
      </div>

      <div>
        <Select onValueChange={(value) => setValue("program", value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select Program" />
          </SelectTrigger>
          <SelectContent>
            {program.map((prog) => (
              <SelectItem key={prog} value={prog}>{prog}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.program && (
          <p className="text-red-500 text-sm mt-1">{errors.program.message as string}</p>
        )}
      </div>

      <Button 
        type="submit"
        className={`w-full h-12 mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold ${poppins.className}`}
      >
        Apply Now
      </Button>
    </form>
  );

  return (
    <Sheet open={isFormOpen} onOpenChange={setIsFormOpen}>
      {isScrolled && (
        <SheetTrigger asChild>
          <Button 
            className={`fixed right-0 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-right z-50 
                       bg-yellow-400 hover:bg-yellow-500 text-black  h-12 px-8 font-semibold ${poppins.className}`}
            style={{ transformOrigin: "right bottom" }}
          >
            Apply Now
          </Button>
        </SheetTrigger>
      )}
      
      <SheetContent side="right" className="w-[350px] sm:w-[400px] h-[580px] rounded-l-lg my-40  p-0">
        <SheetHeader>
          <SheetTitle className={`p-6 pb-0 ${poppins.className}`}>Apply Now</SheetTitle>
        </SheetHeader>
        <div className="p-6 bg-white h-full overflow-y-auto">
          {submissionMessage ? (
            <div className="text-center p-5 bg-green-100 text-green-700 rounded-md">
              {submissionMessage}
            </div>
          ) : (
            renderFormFields()
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ApplyNowForm;