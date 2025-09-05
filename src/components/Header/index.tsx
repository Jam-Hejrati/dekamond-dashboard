"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

type User = {
  username: string;
};

const Header = () => {
  const router = useRouter();
  const username: User = JSON.parse(
    localStorage.getItem("user") || "{username: 'User'}"
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Welcome back, {username.username}!
          </h1>
          <p className="text-sm text-muted-foreground">
            Here's what's happening with your account today.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={handleLogout}
          className="ml-4 bg-transparent"
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
