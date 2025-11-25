import axios from "axios";
import React from "react";

export default function useAxiosSecure() {
  const axiosSecure = axios.create({
    baseURL: "https://course-management-server-lyart.vercel.app",
  });
  return axiosSecure;
}
