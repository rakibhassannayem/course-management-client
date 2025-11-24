"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

import { TbCircleDashedLetterE } from "react-icons/tb";
import { TbCircleDashedLetterJ } from "react-icons/tb";
import { TbCircleDashedLetterP } from "react-icons/tb";
import NavLink from "./NavLink";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/courses"}>Courses</NavLink>
      </li>
      <li>
        <NavLink href={"/pricing"}>Pricing</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
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
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-999">
      <div className="container mx-auto flex flex-col sm:flex-row">
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
            className="btn hover:bg-primary text-primary hover:text-white text-xl font-bold  p-2 rounded-full"
          >
            <div className="flex">
              <TbCircleDashedLetterE size={30} />
              <TbCircleDashedLetterJ size={30} />
              <TbCircleDashedLetterP size={30} />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost avatar">
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/256/User-green-icon.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-md dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow space-y-1"
              >
                <li>
                  <NavLink href={"/dashboard/addCourse"}>Add Course</NavLink>
                </li>
                <li>
                  <NavLink href={"/dashboard/manageCourse"}>Manage Course</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-500 text-white"
                  >
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
    </div>
  );
}
