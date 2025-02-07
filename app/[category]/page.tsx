// app/[category]/page.tsx
import { notFound } from "next/navigation";
import CoursePage from "@/components/Courses/CoursePage";
import { courseTypes } from "@/utils/courseTypes";

interface CategoryPageProps {
  params: { category: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default function CategoryPage({
  params,
  searchParams, // Include this even if unused to match Next.js types
}: CategoryPageProps) {
  const category = params.category.toLowerCase();
  console.log("category:", category);
  
  // Get courses for the specific category
  const categoryCourses = courseTypes[category];
  console.log(categoryCourses);
  
  if (!categoryCourses) {
    notFound();
  }
  
  return <CoursePage courseType={categoryCourses} category={category} />;
}

export async function generateStaticParams() {
  return Object.keys(courseTypes).map((category) => ({
    category,
  }));
}