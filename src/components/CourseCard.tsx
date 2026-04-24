"use client";

import Image from "next/image";
import Link from "next/link";
import { Course } from "@/types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/?subject=${encodeURIComponent(course.subject)}`}>
      <div className="group rounded-xl overflow-hidden border-2 border-gray-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white dark:bg-gray-800 flex flex-col h-full">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {course.isFree && (
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              مجاني
            </span>
          )}
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src={course.author.avatar}
              alt={course.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{course.author.name}</span>
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-3 flex-1">
            {course.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
            <span className={`font-bold text-lg ${course.isFree ? "text-green-600" : "text-purple-600 dark:text-purple-400"}`}>
              {course.isFree ? "مجاني" : `${course.price} ${course.currency}`}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 bg-purple-50 dark:bg-gray-700 dark:text-purple-400 px-3 py-1.5 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
              التفاصيل
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
