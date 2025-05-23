
import React from "react";
import Navbar from "@/components/Navbar";
import { LoginForm } from "@/components/AuthForms";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
