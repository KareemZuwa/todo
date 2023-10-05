import React from "react";
import { Main } from "./components/Main";

export interface ToDos {
  id: number;
  title: string;
  status: boolean;
}

export const App = () => {
  return (
    <div className="h-full flex flex-col items-center mx-8">
      <header className="m-12">
        <div className="text-2xl font-custom font-semibold">To Do List App</div>
      </header>
      <main className="h-full w-full max-w-2xl">
        <Main />
      </main>
    </div>
  );
};
