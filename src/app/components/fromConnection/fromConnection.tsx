"use client";
import { signIn } from "next-auth/react";
export default function FromConnection() {
  return (
    <div>
      <form>
        <h1 className="text-2xl mb-4"> Connection</h1>
        <div className="grid gap-5 text-[1.2em]">
          <div>
            <label> email</label>
            <input
              className="border-black"
              name="email"
              type="email"
              placeholder="test@test.com"
            />
          </div>
          <div>
            <label> mot de pass </label>
            <input
              className="border-black"
              name="pass"
              type="password"
              placeholder="your password"
            />
          </div>
          <div className="flex gap-6">
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
