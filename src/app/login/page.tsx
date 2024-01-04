"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDissabled] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDissabled(false);
    } else {
      setButtonDissabled(false);
    }
  }, [user]);
  const login = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/login", user);
      console.log(response.data,'response')
      router.push("/profile")
    } catch (error: any) {
      console.log("login failed", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
      <h1 className="text-2xl mb-4 text-black">Login</h1>
      <hr />
      <label htmlFor="email">Email</label>
      <input
        className="p-2  mb-4 border-gray-400 rounded-md focus:outline-none focus:border-gray-700"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      ></input>
      <label htmlFor="password">Password</label>
      <input
        className="p-2  mb-4 border-gray-400 rounded-md focus:outline-none focus:border-gray-700"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="PJassword"
      ></input>
      <button
        onClick={login}
        className="p-2 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700 bg-white "
      >
        Login
      </button>
      <div>
        <p>Dont have an account? signup</p>
        <Link href="/signup"> here</Link>
      </div>
    </div>
  );
}
