"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

import { TbCircleDashedLetterE } from "react-icons/tb";
import { TbCircleDashedLetterJ } from "react-icons/tb";
import { TbCircleDashedLetterP } from "react-icons/tb";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/courses"}>Courses</Link>
      </li>
      <li>
        <Link href={"/pricing"}>Pricing</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          href={"/"}
          className="btn btn-ghost text-xl text-secondary font-bold"
        >
          <div className="flex text-primary">
            <TbCircleDashedLetterE size={22} />
            <TbCircleDashedLetterJ size={22} />
            <TbCircleDashedLetterP size={22} />
          </div>
          Course
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              {user?.displayName}
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/dashboard/addCourse"}>Add Course</Link>
              </li>
              <li>
                <Link href={"/dashboard/manageCourse"}>Manage Course</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href={"/login"} className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
