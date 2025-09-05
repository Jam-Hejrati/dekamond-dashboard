"use client";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen";
import { AuthGuardProps } from "./types";

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      if (!token || !user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default AuthGuard;
