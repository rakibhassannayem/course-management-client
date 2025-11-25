import Link from "next/link";
import React from "react";

export default function CourseCard({ course }) {
  const { _id, title, shortDescription, price, imageUrl } = course;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={
            imageUrl ||
            "https://icons.iconarchive.com/icons/icons8/windows-8/256/City-No-Camera-icon.png"
          }
          alt={title}
          className="h-50 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-accent text-lg">
          {shortDescription || "No desc available"}
        </p>
        <span className="badge badge-dash text-xl font-bold text-primary py-4">
          {price} $
        </span>
        <div className="card-actions justify-end">
          <Link href={`/courses/${_id}`} className="btn btn-primary text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
