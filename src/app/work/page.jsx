"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WorkPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#FeaturedWork");

    const timer = setTimeout(() => {
      const section = document.getElementById("FeaturedWork");

      if (section) {
        const y =
          section.getBoundingClientRect().top +
          window.scrollY -
          90;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-[#101010] text-[#eeeae4]" />
  );
}