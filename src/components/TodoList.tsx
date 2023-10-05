import React from "react";
import { TaskItem } from "./TaskItem";
import { ToDos } from "./Main";

interface TodoListProps {
  todo: ToDos;
  deleteTask: (id: number) => void;
  markTaskAsDone: (id: number) => void;
  setUpdateData: (Todos: ToDos) => void;
  toggleFormMode: () => void;
}

export const TodoList = ({
  todo,
  deleteTask,
  markTaskAsDone,
  setUpdateData,
  toggleFormMode,
}: TodoListProps) => {
  return (
    <>
      <TaskItem
        todo={todo}
        deleteTask={deleteTask}
        completeTaskToggle={markTaskAsDone}
        setUpdateData={setUpdateData}
        toggleFormMode={toggleFormMode}
      />
    </>
  );
};
