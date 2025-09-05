import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative flex items-center justify-center">
          <span className="animate-spin inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></span>
          <span className="absolute text-primary font-bold text-xl">⏳</span>
        </div>
        <span className="text-lg text-muted-foreground">
          Checking authentication...
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
