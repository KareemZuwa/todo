import React from "react";

export const Button = () => {
  return (
    <>
      <button
        type="button"
        className="rounded bg-indigo-600 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 whitespace-nowrap"
      >
        Add Task
      </button>
    </>
  );
};
