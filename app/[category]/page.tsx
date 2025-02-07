// app/[category]/page.tsx
import { notFound } from "next/navigation";
import CoursePage from "@/components/Courses/CoursePage";
import { courseTypes } from "@/utils/courseTypes";

type PageProps = {
  params: Promise<{ category: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function CategoryPage(props: PageProps) {
  const params = await props.params;
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

// Generate static params for all categories
export async function generateStaticParams() {
  return Object.keys(courseTypes).map((category) => ({
    category,
  }));
}