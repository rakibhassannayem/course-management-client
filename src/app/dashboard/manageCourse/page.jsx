"use client";

import Skeleton from "@/components/Skeleton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ManageCourse() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/courses")
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/courses/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Course has been deleted.",
                icon: "success",
              });

              const remainingCourses = courses.filter((course) => course._id !== _id);
              setCourses(remainingCourses);
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 ">
        <div>
          <h1 className="text-4xl font-bold text-secondary mb-1">
            Manage Courses
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          {/* Search */}
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>

          {/* filter */}
          <select
            defaultValue="Filter by Category"
            className="select select-primary"
          >
            <option disabled={true}>Filter by Category</option>
            <option>Developing</option>
            <option>Designing</option>
            <option>Vidio Editing</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>
                  <div className="space-y-2">
                    <div className="font-semibold text-primary text-lg">{course.title}</div>
                    <div className="text-accent">
                      Priority:{" "}
                      <span className={`font-bold ${course.priority === 'High' ? "text-green-500" : course.priority === 'Medium' ? "text-yellow-500" : "text-red-500"}`}>
                        {course.priority}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-primary font-bold text-white">
                    $ {course.price}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="btn bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </td>
                <th>
                  <Link
                    href={`/courses/${course._id}`}
                    className="btn btn-ghost"
                  >
                    Details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
