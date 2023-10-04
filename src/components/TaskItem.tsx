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
}

export const TaskItem = ({ todo, deleteTask }: TaskItemProps) => {
  return (
    <div className="flex justify-between bg-teal-400 py-1.5 rounded px-4 text-white">
      <div className="flex space-x-4">
        <div className="rounded-full border px-2 text-sm flex items-center">
          {todo.id}
        </div>
        <div>{todo.title}</div>
      </div>
      <div className="flex space-x-2">
        <span>
          <CheckCircleIcon className="w-5 cursor-pointer hover:text-yellow-400" />
        </span>
        <span>
          <PencilIcon className="w-5 cursor-pointer hover:text-yellow-400" />
        </span>
        <span title="Delete" onClick={() => deleteTask(todo.id)}>
          <TrashIcon className="w-5 cursor-pointer hover:text-yellow-400" />
        </span>
      </div>
    </div>
  );
};
