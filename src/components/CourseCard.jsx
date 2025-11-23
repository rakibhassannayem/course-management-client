import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CourseCard({ course }) {
  const {
    _id,
    title,
    shortDescription,
    price,
    imageUrl,
  } = course;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="h-50">
        <img
          src={
            imageUrl ||
            "https://icons.iconarchive.com/icons/icons8/windows-8/256/City-No-Camera-icon.png"
          }
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{shortDescription || "No desc available"}</p>
        <span className="badge badge-dash text-bold">{price} $</span>
        <div className="card-actions justify-end">
          <Link href={`/courses/${_id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
}
