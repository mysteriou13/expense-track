"use client";
import { signIn } from "next-auth/react";
export default function FromConnection() {
  return (
    <div className="relative left-[35vw] top-[30vh]  w-[31vw] h-[60%]">
      <form>
        <h1 className="text-2xl mb-4"> Connection</h1>
        <div className="grid gap-5 text-[1.2em]">
          <div className="flex justify-between">
            <label> email</label>
            <input
              className="border-black"
              name="email"
              type="email"
              placeholder="test@test.com"
            />
          </div>
          <div className="flex justify-between">
            <label> mot de pass </label>
            <input
              className="border-black"
              name="pass"
              type="password"
              placeholder="your password"
            />
          </div>
          <div className="flex justify-between">
            connection avec
            <div
              className=" text-blue-600 underline hover:cursor-pointer"
              onClick={() => signIn("github")}
            >
              github
            </div>
            <div
              className=" text-blue-600 underline hover:cursor-pointer"
              onClick={() => signIn("google")}
            >
              google
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
