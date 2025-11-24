"use client";
import CourseCard from "@/components/CourseCard";
import Skeleton from "@/components/Skeleton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import React, { useEffect, useState } from "react";

export default function Courses() {
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
            Explore Our Courses
          </h1>
          <p className="text-accent text-xl mb-5">
            Discover Thousands of courses taught by expert instructors
          </p>
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>
    </div>
  );
}
