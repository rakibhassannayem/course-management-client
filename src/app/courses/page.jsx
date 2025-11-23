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
      <div className="grid grid-cols-4 gap-8">
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
      <h1 className="text-2xl font-extrabold text-secondary mb-5">Total Courses: {courses.length}</h1>
      <div className="grid grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>
    </div>
  );
}
