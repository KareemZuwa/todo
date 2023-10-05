import React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { ToDos } from "./Main";

interface UpdateTaskFormProps {
  updateData: ToDos;
  changeTask: (targetValue: string) => void;
  updateTask: () => void;
  cancelUpdateTask: () => void;
  formMode: boolean;
}

export const UpdateTaskForm = ({
  updateData,
  changeTask,
  updateTask,
  cancelUpdateTask,
  formMode,
}: UpdateTaskFormProps) => {
  return (
    <>
      <div className="xs:flex w-full justify-between xs:space-x-8 space-y-8 xs:space-y-0">
        <InputField
          value={updateData && updateData.title}
          onChange={changeTask}
        />
        <div className="xs:flex xs:space-x-4 xs:pr-0 space-y-4 xs:space-y-0">
          <Button
            title="Update"
            type="submit"
            onClick={updateTask}
            formMode={formMode}
          />
          <Button title="Cancel" type="reset" onClick={cancelUpdateTask} />
        </div>
      </div>
    </>
  );
};
