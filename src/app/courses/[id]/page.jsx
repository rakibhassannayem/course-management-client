import React from "react";

export default async function details({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return <div>Details of product - {data.name}</div>;
}
