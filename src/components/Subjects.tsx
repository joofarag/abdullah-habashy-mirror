"use client";

import Image from "next/image";
import { Subject } from "@/types";
import { useEffect, useState } from "react";

export default function Subjects() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/subjects")
      .then((r) => r.json())
      .then((data) => {
        setSubjects(data.subjects);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-purple-800 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">المواد الدراسية</h2>
        </div>

        {loading ? (
          <div className="flex gap-6 flex-wrap">
            {[1, 2].map((i) => (
              <div key={i} className="w-[200px] h-[220px] bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="flex gap-6 flex-wrap">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="group relative w-[200px] rounded-xl overflow-hidden border-2 border-gray-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer bg-white dark:bg-gray-800"
              >
                <div className="p-4 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-3 rounded-lg overflow-hidden bg-purple-50 dark:bg-gray-700 flex items-center justify-center">
                    <Image src={subject.icon} alt={subject.name} width={64} height={64} className="object-cover" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{subject.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subject.grade}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {subject.courseCount} كورسات
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
