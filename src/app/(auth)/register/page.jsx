"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../socialLogin/page";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegister = (data) => {
    registerUser(data.email, data.password)
      .then(() => {
        router.push('/')
        toast.success("Registration Successfull!")
      })
      .catch((err) => {
        toast.error(err.code)
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleRegister)} className="card-body py-2">
        <h3 className="text-3xl text-center font-bold">Register</h3>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-primary text-white mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-400 underline font-semibold" href={"/login"}>
            Login
          </Link>
        </p>
      </form>
      <SocialLogin />
    </div>
  );
}
