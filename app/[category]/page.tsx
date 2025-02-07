// app/[category]/page.tsx
import { Metadata } from 'next'
import { notFound } from "next/navigation";
import CoursePage from "@/components/Courses/CoursePage";
import { courseTypes } from "@/utils/courseTypes";

interface Props {
  params: {
    category: string;
  };
}

// This is important for Next.js 13+ typing
export default async function CategoryPage({ params }: Props) {
  const category = params.category.toLowerCase();
  
  // Get courses for the specific category
  const categoryCourses = courseTypes[category];
  
  if (!categoryCourses) {
    notFound();
  }
  
  return <CoursePage courseType={categoryCourses} category={category} />;
}

// Generate static params
export async function generateStaticParams() {
  return Object.keys(courseTypes).map((category) => ({
    category,
  }));
}

// Optional: Add metadata
export const metadata: Metadata = {
  title: 'Courses',
  description: 'Browse our courses by category',
}