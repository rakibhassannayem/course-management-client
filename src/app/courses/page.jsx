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
      <h1 className="text-4xl font-bold text-secondary mb-1">Explore Our Courses</h1>
      <p className="text-accent text-xl mb-5">Discover Thousands of courses taught by expert instructors</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>
    </div>
  );
}
