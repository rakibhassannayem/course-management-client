import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default async function details({ params }) {
  const { id } = await params;
  const res = await fetch(`https://course-management-server-lyart.vercel.app/courses/${id}`);
  const course = await res.json();

  const { title, imageUrl, fullDescription, price, priority } = course;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        // onClick={() => navigate(-1)}
        className="group flex items-center text-slate-400 hover:text-white mb-8 transition"
      >
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-primary transition duration-1000 cursor-pointer">
          <FaArrowLeft />
        </div>
        Back to collection
      </button>

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <div className=""></div>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="badge badge-primary text-white text-lg font-semibold py-3">
              {priority}
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-secondary mb-6">
              {title}
            </h1>
            <p className="text-4xl text-primary font-semibold">${price}</p>

            <p className="text-accent">{fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
