import React from "react";
interface InputFieldProps {
  value: string;
  setValue: (value: string) => void ;
}

export const InputField = ({ value, setValue }: InputFieldProps) => {
  return (
    <div className="w-full">
      <label htmlFor="text" className="sr-only">
        Email
      </label>
      <input
        type="text"
        name="text"
        id="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pl-4 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Add task here..."
      />
    </div>
  );
};
