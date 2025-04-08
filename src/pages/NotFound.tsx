
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-6xl font-bold text-college-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">
          <Button className="bg-college-800 hover:bg-college-700">
            Return to Home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
