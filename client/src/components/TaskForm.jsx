import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { createTask } from "../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const TaskForm = () => {
  const { dispatch } = useTaskContext();
  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    if (data.title && data.description) {
      const newTask = {
        title: data.title,
        description: data.description,
        completed: false,
      };
      createTask(newTask)
        .then((response) => {
          dispatch({ type: "ADD_TASK", payload: response });
          toast.success("Task added");
        })
        .catch((error) => {
          console.error("Error adding task:", error);
          toast.error("Error adding task");
        });

      setTitle("");
      setDescription("");
    } else {
      toast.error("Fields are required");
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit(onSubmit)} className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          name="title"
          {...register("title")}
        />
        {errors?.title && <p className="error">{errors?.title?.message}</p>}

        <input
          type="text"
          placeholder="Task Description"
          name="description"
          {...register("description")}
        />
        {errors?.description && (
          <p className="error">{errors?.description?.message}</p>
        )}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
