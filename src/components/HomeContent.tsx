"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Hero from "./Hero";
import Subjects from "./Subjects";
import LatestCourses from "./LatestCourses";

function HomeInner() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || undefined;

  return (
    <>
      {!search && <Hero />}
      <Subjects />
      <LatestCourses searchQuery={search} />
    </>
  );
}

export default function HomeContent() {
  return (
    <Suspense>
      <HomeInner />
    </Suspense>
  );
}
