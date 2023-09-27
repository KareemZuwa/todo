import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";
import { TaskItem } from "./components/TaskItem";

export interface ToDos {
  id: number;
  title: string;
  status: boolean;
}

export const App = () => {
  const todoTaskArray = [
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
    { id: 3, title: "Task 3", status: false },
  ];
  // Tasks (Todo list) State
  const [toDos, setToDos] = useState<ToDos[]>(todoTaskArray);

  console.log(toDos.length);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  const addTask = () => {};

  // Delete task
  const deleteTask = (id: number) => {};

  // Mark task as done
  const markTaskAsDone = (id: number) => {};

  // Change task
  const changeTask = (e: EventListener) => {};

  // Cancel Update
  const cancelUpdate = () => {};

  // Update task
  const updateTask = () => {};

  return (
    <div className="h-full flex flex-col items-center">
      <header className="m-12">
        <div className="text-2xl font-custom font-semibold">To Do List App</div>
      </header>
      <main className="h-full w-full max-w-2xl space-y-8">
        <section className="flex w-full justify-between space-x-8">
          <InputField />
          <Button />
        </section>
        <section>
          {toDos.length === 0 ? (
            <div className="flex justify-center">No Tasks...</div>
          ) : (
            toDos.map((todo) => (
              <div key={todo.id} className="py-2">
                <TaskItem todo={todo} />
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
};
