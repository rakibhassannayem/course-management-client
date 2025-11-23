import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
      <h3 className="text-3xl text-center font-bold">Register</h3>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
          />

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account?{" "}
          <Link
            className="text-blue-400 underline"
            href={"/login"}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default page;