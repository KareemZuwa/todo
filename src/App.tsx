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

  const [formMode] = useState("addTask");

  // Tasks (Todo list) State
  const [toDos, setToDos] = useState<ToDos[]>(todoTaskArray);

  console.log(toDos.length);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  const addTask = () => {
    if (newTask) {
      const num = toDos.length + 1;
      const newEntry = { id: num, title: newTask, status: false };
      setToDos([...toDos, newEntry]);
      setNewTask("");
    }
  };

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
        <section>
          {formMode === "addTask" ? (
            <div className="flex w-full justify-between space-x-8">
              <InputField value={newTask} setValue={setNewTask} />
              <Button title="Add Task" onClick={addTask}/>
            </div>
          ) : (
            <div className="flex w-full justify-between space-x-8">
              <InputField value={newTask} setValue={setNewTask} />
              <Button title="Update" />
              <Button title="Cancel" />
            </div>
          )}
        </section>
        <section>
          {toDos.length === 0 ? (
            <div className="flex justify-center">No Tasks...</div>
          ) : (
            toDos
              .sort((a, b) => a.id - b.id)
              .map((todo) => (
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
