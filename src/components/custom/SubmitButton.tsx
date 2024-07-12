import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
interface myProps {
  isLoading: boolean;
  className?: string;
  children?: React.ReactNode;
}
const SubmitButton = ({ isLoading, className, children }: myProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ?( 
        <div className="flex ">
          <Image src="/assets/icons/loader.svg" alt="loading" width={20} height={20} />
          Loading...
          </div>
         ): children}
    </Button>
  );
};

export default SubmitButton;
