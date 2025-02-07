// app/[category]/page.tsx
import { notFound } from "next/navigation";
import CoursePage from "@/components/Courses/CoursePage";
import { courseTypes } from "@/utils/courseTypes";

type ParamsType = Promise<{ category: string }>;

export default async function CategoryPage({
  params,
}: {
  params: ParamsType;
}) {
  const { category } = await params;
  const categoryLower = category.toLowerCase();
  
  // Get courses for the specific category
  const categoryCourses = courseTypes[categoryLower];
  
  if (!categoryCourses) {
    notFound();
  }
  
  return <CoursePage courseType={categoryCourses} category={categoryLower} />;
}

export async function generateStaticParams() {
  return Object.keys(courseTypes).map((category) => ({
    category,
  }));
}