import Link from "next/link";
import React from "react";

export default async function courses() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
  return (
    <div className="flex flex-col">
      All Courses -
      {data.map((user) => (
        <Link key={user.id} href={`/courses/${user.id}`}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}
