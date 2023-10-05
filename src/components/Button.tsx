import React from "react";
interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  formMode?: boolean;
}

export const Button = ({ title, onClick, type, formMode }: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${
          type === "reset" ? "bg-[#F7A399] hover:bg-[#E14E65]" : "bg-[#748b9a]"
        }
        w-full xs:w-auto rounded px-4 h-9 text-sm font-semibold text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 whitespace-nowrap`}
      >
        {title}
      </button>
    </>
  );
};
