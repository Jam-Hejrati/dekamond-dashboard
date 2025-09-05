"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// nothing in Home page!
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return null;
}
