import SignupForm from "@/components/auth/SignupForm";
import React from "react";

const page = () => {
  return (
    <div className="space-y-9 lg:space-y-14  w-11/12 max-w-[400px] m-auto">
      <div className="space-y-2 lg:space-y-4">
        <h1 className="font-bold text-2xl lg:text-5xl">Create Your Account</h1>
        <p className="text-sm lg:text-base">
          Get started by filling in your details.
        </p>
      </div>

      <SignupForm />
    </div>
  );
};

export default page;
