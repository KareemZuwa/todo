import React, { useState } from "react";
import { AddTaskForm } from "./AddTaskForm";
import { UpdateTaskForm } from "./UpdateTaskForm";
import { TodoList } from "./TodoList";

export interface ToDos {
  id: number;
  title: string;
  status: boolean;
}

const defaultEmptyTask: ToDos = {
  id: 0,
  title: "",
  status: false,
};

export const Main = () => {
  const [toDos, setToDos] = useState<ToDos[]>([]);

  const [newTask, setNewTask] = useState<string>("");
  const [updateData, setUpdateData] = useState<ToDos>(defaultEmptyTask);

  const [nextId, setNextId] = useState(1);

  const [isUpdateMode, setFormModeUpdate] = useState<boolean>(false);
  const toggleFormMode = () => {
    setFormModeUpdate(!isUpdateMode);
  };

  // Add task
  const addTask = () => {
    if (newTask) {
      setToDos([...toDos, { id: nextId, title: newTask, status: false }]);
      setNextId(nextId + 1);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id: number) => {
    const newTasks = toDos.filter((task) => task.id !== id);
    console.log(newTasks);
    const updatedTasksWithReassignedIds = newTasks.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    setToDos(updatedTasksWithReassignedIds);
  };

  // Mark task as done
  const markTaskAsDone = (id: number) => {
    setToDos(
      toDos.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  // Change task
  const editTask = (targetValue: string) => {
    setUpdateData({ ...updateData, title: targetValue });
  };

  // Cancel Update
  const cancelUpdateTask = () => {
    setUpdateData(defaultEmptyTask);
    toggleFormMode();
  };

  // Update task
  const updateTask = () => {
    const filteredTasks = [...toDos].filter(
      (task) => task.id !== updateData.id
    );
    setToDos([...filteredTasks, updateData]);

    setUpdateData(defaultEmptyTask);
    toggleFormMode();
  };

  return (
    <div className="space-y-8">
      <section>
        {isUpdateMode ? (
          <UpdateTaskForm
            updateData={updateData}
            editTask={editTask}
            updateTask={updateTask}
            cancelUpdateTask={cancelUpdateTask}
            formMode={isUpdateMode}
          />
        ) : (
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}
      </section>
      <section>
        {toDos.length === 0 ? (
          <div className="flex justify-center py-2">No Tasks...</div>
        ) : (
          toDos
            .sort((a, b) => a.id - b.id)
            .map((todo) => (
              <div key={todo.id} className="py-2">
                <TodoList
                  todo={todo}
                  deleteTask={deleteTask}
                  markTaskAsDone={markTaskAsDone}
                  setUpdateData={setUpdateData}
                  toggleFormMode={toggleFormMode}
                />
              </div>
            ))
        )}
      </section>
    </div>
  );
};
