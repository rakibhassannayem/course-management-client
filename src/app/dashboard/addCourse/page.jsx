"use client";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function AddCourse() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const handleAddCourse = (data) => {
    axiosSecure
      .post("/courses", data)
      .then(() => {
        toast.success("Course added successfully!");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleAddCourse)} className="card-body py-2">
        <h3 className="text-3xl text-center font-bold">Add Course</h3>
        <fieldset className="fieldset">
          {/* title */}
          <label className="label">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="input"
            placeholder="Title"
          />
          {errors.title?.type === "required" && (
            <p className="text-red-500">Title is required</p>
          )}

          {/* Full desc */}
          <label className="label">Full Description</label>
          <input
            type="text"
            {...register("fullDesc", { required: true })}
            className="input"
            placeholder="Full Description"
          />
          {errors.fullDesc?.type === "required" && (
            <p className="text-red-500">Full Description is required</p>
          )}

          {/* Short Description */}
          <label className="label">Short Description</label>
          <input
            type="text"
            {...register("shortDesc", { required: true })}
            className="input"
            placeholder="Short Description"
          />
          {errors.shortDesc?.type === "required" && (
            <p className="text-red-500">Short Description is required</p>
          )}

          {/* Price */}
          <label className="label">Price</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="input"
            placeholder="Price"
          />
          {errors.price?.type === "required" && (
            <p className="text-red-500">Price is required</p>
          )}

          {/* Photo url */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            {...register("photo")}
            className="input"
            placeholder="Photo URL(optional)"
          />

          <button className="btn btn-neutral mt-4">Add Course</button>
        </fieldset>
      </form>
    </div>
  );
}
