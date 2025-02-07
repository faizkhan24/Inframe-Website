// app/[category]/page.tsx
import { notFound } from "next/navigation";
import CoursePage from "@/components/Courses/CoursePage";
import { courseTypes } from "@/utils/courseTypes";

interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryPage({
  params,
}: CategoryPageProps) {
  const category = params.category.toLowerCase();
  
  // Get courses for the specific category
  const categoryCourses = courseTypes[category];
  
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