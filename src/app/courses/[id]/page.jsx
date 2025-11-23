import React from "react";

export default async function details({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/courses/${id}`);
  const course = await res.json();

  const { title, imageUrl, fullDescription, price, priority } = course;

  return <div>Details of product - {title}</div>;
}
