
import React from "react";
import Navbar from "@/components/Navbar";
import { RegisterForm } from "@/components/AuthForms";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
