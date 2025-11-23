import axios from "axios";
import React from "react";

export default function useAxiosSecure() {
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });
  return axiosSecure;
}
