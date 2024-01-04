"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDissabled] = useState(true);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDissabled(false);
    } else {
      setButtonDissabled(true);
    }
  }, [user]);
  const signup = async() => {
    try {
        setLoading(true)
        const response = await axios.post("/api/user/signup",user)
        console.log(response.data,'response in signup')
        router.push("/login")
    } catch (error:any) {
        console.log(error.message, "Signup failed")
        
    }finally{
        setLoading(false)
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
      <h1 className="text-2xl text-black mb-4">{!loading?'Signup':'processing'}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2  mb-4 border-gray-400 rounded-md focus:outline-none focus:border-gray-700"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      ></input>
      <label htmlFor="email">Email</label>
      <input
        className="p-2  mb-4 border-gray-400 rounded-md focus:outline-none focus:border-gray-700"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      ></input>
      <label htmlFor="password">Passoword</label>
      <input
        className="p-2  mb-4 border-gray-400 rounded-md focus:outline-none focus:border-gray-700"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="PJassword"
      ></input>
      <button
        disabled={buttonDisabled}
        onClick={signup}
        className="p-2 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700 bg-white "
      >
        Signup
      </button>
      <div>
        <p>Already have an account Login</p>
        <Link href="/login"> here</Link>
      </div>
    </div>
  );
}
