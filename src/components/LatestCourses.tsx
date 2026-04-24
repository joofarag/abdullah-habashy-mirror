"use client";

import { useState, useEffect } from "react";
import { Course } from "@/types";
import CourseCard from "./CourseCard";

const tabs = ["الكل", "ابواب", "مراجعة"];

export default function LatestCourses({ searchQuery }: { searchQuery?: string }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("الكل");

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (activeTab !== "الكل") params.set("type", activeTab);
    if (searchQuery) params.set("search", searchQuery);

    fetch(`/api/courses?${params}`)
      .then((r) => r.json())
      .then((data) => {
        setCourses(data.courses);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [activeTab, searchQuery]);

  return (
    <section className="py-14 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-purple-800 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            {searchQuery ? `نتائج البحث عن: "${searchQuery}"` : "أحدث المحاضرات"}
          </h2>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-purple-400 hover:text-purple-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-700 rounded-xl h-[380px] animate-pulse" />
            ))}
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <p className="text-lg font-bold">لا توجد نتائج</p>
            <p className="text-sm mt-1">حاول البحث بكلمات مختلفة</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
