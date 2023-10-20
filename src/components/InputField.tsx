import React from "react";
interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  value,
  onChange,
  placeholder,
  onKeyDown,
}: InputFieldProps) => {
  return (
    <div className="w-full">
      <label htmlFor="text" className="sr-only">
        Task
      </label>
      <input
        type="text"
        name="text"
        id="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="pl-4 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
};
