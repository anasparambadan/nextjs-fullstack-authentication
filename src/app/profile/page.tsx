"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function ProfilePage() {
  const [userData, setUserData] = useState("");
  console.log(userData)
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.get("/api/user/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message, "error");
    }
  };
  const getUserDetails = async () => {
    const res = await axios.get("/api/user/userInfo");
    console.log(res.data,'res.data');
    setUserData(res.data.data._id);
  };
  return (
    <div className="flex flex-col items-center justify-center align-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className="p-2 rounded bg-blue-300">{userData?<Link href={`/profile/${userData}`}>{userData}</Link>:'No user'}</h2>
      <button
        onClick={logout}
        className="mt-4 rounded-md bg-green-300 text-black p-2"
      >Logout</button>
      <button
        onClick={getUserDetails}
        className="mt-4 rounded-md bg-orange-300 text-black p-2"
      >
        User Details
      </button>
    </div>
  );
}
