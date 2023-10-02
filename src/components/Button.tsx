import React from "react";
interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ title, onClick, type }: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="rounded bg-indigo-600 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 whitespace-nowrap"
      >
        {title}
      </button>
    </>
  );
};
