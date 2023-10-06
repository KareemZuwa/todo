import React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";

interface AddTaskFormProps {
  newTask: string;
  setNewTask: (value: string) => void;
  addTask: () => void;
}

export const AddTaskForm = ({
  newTask,
  setNewTask,
  addTask,
}: AddTaskFormProps) => {
  return (
    <>
      <div className="xs:flex w-full justify-between xs:space-x-4 space-y-8 xs:space-y-0">
        <InputField
          value={newTask}
          onChange={setNewTask}
          placeholder="Add task here..."
        />
        <Button type="submit" title="Add Task" onClick={addTask} />
      </div>
    </>
  );
};
