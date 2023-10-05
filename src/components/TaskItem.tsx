import React from "react";
import { ToDos } from "../App";
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
      <div className="flex space-x-4">
        <div className="rounded-full border px-2 text-sm flex items-center">
          {todo.id}
        </div>
        <div className={`${todo.status === true && "line-through opacity-50"}`}>
          {todo.title}
        </div>
      </div>
      <div className="flex space-x-2">
        <span
          title="Completed / Not Completed"
          onClick={(e) => completeTaskToggle(todo.id)}
        >
          <CheckCircleIcon
            className={`w-5 cursor-pointer hover:text-yellow-200 ${
              todo.status === true ? "text-green-400" : "text-white"
            }`}
          />
        </span>
        {todo.status ? null : (
          <span
            title="Edit"
            onClick={() => {
              setUpdateData({
                id: todo.id,
                title: todo.title,
                status: todo.status ? true : false,
              });
              toggleFormMode();
            }}
          >
            <PencilIcon className="w-5 cursor-pointer hover:text-yellow-200" />
          </span>
        )}
        <span title="Delete" onClick={() => deleteTask(todo.id)}>
          <TrashIcon className="w-5 cursor-pointer hover:text-yellow-200" />
        </span>
      </div>
    </div>
  );
};
