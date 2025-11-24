"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../socialLogin/page";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        router.push("/");
        toast.success("login successful")
      })
      .catch((err) => {
        toast.error(err.code)
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body py-2">
        <h3 className="text-3xl text-center font-bold">Login</h3>
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

          <button className="btn btn-primary text-white mt-4">Login</button>
        </fieldset>
        <p>
          Do not have account?{" "}
          <Link className="text-blue-400 underline font-semibold" href={"/register"}>
            Register
          </Link>
        </p>
      </form>
      <SocialLogin />
    </div>
  );
}
