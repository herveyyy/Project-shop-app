"use client";
import LandingPage from "@/pages/LandingPage";
import Loading from "@/pages/Loading";
import { useState, useEffect } from "react";
import { Router } from "next/router";
export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const handleComplete = () => {
      setTimeout(() => setLoading(true), 3000); // 3000ms delay
    };
    handleComplete();
  }, []);
  return (
    <>
      {!loading && <Loading />}
      <div className={`${loading ? "opacity-100" : "opacity-0"} duration-700`}>
        <LandingPage />
      </div>
    </>
  );
}
