import React from "react";
import { ToDos } from "../App";
import {
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

interface TaskItemProps {
  todo: ToDos;
}

export const TaskItem = ({ todo }: TaskItemProps) => {
  return (
    <div className="flex justify-between bg-teal-500 py-1.5 rounded px-4 text-white">
      <div className="flex space-x-4">
        <div className="rounded-full border px-2 text-sm flex items-center">{todo.id}</div>
        <div>{todo.title}</div>
      </div>
      <div className="flex space-x-2">
        <CheckCircleIcon className="w-5" />
        <PencilIcon className="w-5" />
        <TrashIcon className="w-5" />
      </div>
    </div>
  );
};
