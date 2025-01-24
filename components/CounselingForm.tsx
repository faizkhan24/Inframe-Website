'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import Image from 'next/image';
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});
// Define Zod schema for validation
const CounselingFormSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  age: z
    .number({ invalid_type_error: 'Age must be a number' })
    .min(10, 'Age must be at least 10')
    .max(100, 'Age must be below 100'),
  reason: z.string().nonempty('Reason for counseling is required'),
  message: z.string().min(20, 'Message must be at least 20 characters').nonempty('Message is required'),
  course: z.string().nonempty('Please select a course'),
});

const CounselingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(CounselingFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log('Form Submitted:', data);
    alert('Form submitted successfully!');
  };

  return (
    <section className="signup-section py-10 bg-yellow-50 font-sans">
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-md relative rounded-md overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Section */}
          <div className="p-10">
            <h2 className={`text-3xl font-bold mb-5 ${poppins.className}`}>Counseling Form</h2>
            <p className="text-gray-600 mb-8">Fill out the form below to book a counseling session.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="form-group">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  {...register('name')}
                  className="w-full"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
  
              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  {...register('email')}
                  className="w-full"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
  
              <div className="form-group">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Your Age"
                  {...register('age', { valueAsNumber: true })}
                  className="w-full"
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
              </div>
  
              <div className="form-group">
                <Label htmlFor="reason">Reason for Counseling</Label>
                <Input
                  id="reason"
                  type="text"
                  placeholder="Reason for Counseling"
                  {...register('reason')}
                  className="w-full"
                />
                {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>}
              </div>
  
              <div className="form-group">
                <Label htmlFor="course">Select Course</Label>
                <Select
                  onValueChange={(value) => setValue('course', value)}
                  defaultValue=""
                >
                  <SelectTrigger id="course" className="w-full">
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="psychology">Psychology</SelectItem>
                    <SelectItem value="career">Career Counseling</SelectItem>
                    <SelectItem value="relationship">Relationship Counseling</SelectItem>
                  </SelectContent>
                </Select>
                {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>}
              </div>
  
              <div>
                <Button type="submit" className={`w-full text-lg font-extrabold text-black  bg-yellow-400 hover:bg-yellow-500  py-4 rounded shadow  transition-all ${poppins.className}`}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
  
          {/* Right Section */}
          <div className="relative p-10 hidden lg:block">
            <div className="absolute inset-0">
              <Image
                src={"/1717492615506 - Copy (2) (1).jpg"}
                alt="Counseling Background"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div> {/* Add overlay */}
            </div>
            <div className="relative z-10 text-white">
              <h2 className={`text-3xl font-extrabold mb-5 ${poppins.className}`}>Welcome to Counseling</h2>
              <p className={`text-lg ${poppins.className}`}>
                We are here to help you through your journey. Fill out the form to get started today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default CounselingForm;
