import React from "react";
import { ToDos } from "./Main";
import {
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

interface TaskItemProps {
  todo: ToDos;
  deleteTask: (todoId: number) => void;
  completeTaskToggle: (todoId: number) => void;
  setUpdateData: (todo: ToDos) => void;
  toggleFormMode: () => void;
}

export const TaskItem = ({
  todo,
  deleteTask,
  completeTaskToggle,
  setUpdateData,
  toggleFormMode,
}: TaskItemProps) => {
  return (
    <div
      className={`flex justify-between bg-[#586994] py-1.5 rounded px-4 text-white`}
    >
      <div className="flex mr-4">
        <div className="flex items-center">
          <div className="rounded-full border w-6 h-6 mr-4 text-sm flex items-center justify-center">
            {todo.id}
          </div>
        </div>

        <div className={`${todo.status === true && "line-through opacity-50"}`}>
          {todo.title}
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          type="button"
          name="Completed / Not Completed"
          onClick={() => completeTaskToggle(todo.id)}
        >
          <CheckCircleIcon
            className={`w-5 cursor-pointer hover:text-yellow-200 ${
              todo.status === true ? "text-green-400" : "text-white"
            }`}
          />
        </button>
        {todo.status ? null : (
          <button
            type="button"
            name="Edit"
            onClick={() => {
              setUpdateData(todo);
              toggleFormMode();
            }}
          >
            <PencilIcon className="w-5 cursor-pointer hover:text-yellow-200" />
          </button>
        )}
        <button type="button" name="Delete" onClick={() => deleteTask(todo.id)}>
          <TrashIcon className="w-5 cursor-pointer hover:text-yellow-200" />
        </button>
      </div>
    </div>
  );
};
