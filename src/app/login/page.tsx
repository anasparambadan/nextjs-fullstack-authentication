"use client";
import Link from "next/link";
import React from "react"
import { useRouter } from "next/navigation";
import axios from "axios";




export default function Login() {

    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })
    const login = () => { }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
            <h1 className="text-2xl text-white">signup</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input className="p-2  mb-4 border-gray-400 rounded-md focus:outline-none focus:border-gray-700" id="email" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email"></input>
            <label htmlFor="password">Password</label>
            <input className="p-2  mb-4 border-gray-400 rounded-md focus:outline-none focus:border-gray-700" id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="PJassword"></input>
            <button onClick={login} className="p-2 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700 bg-white ">Signup</button>
            <div>
                <p>Dont have an account? signup</p>
                 <Link href='/signup'> here</Link>
                </div>
        </div>
    )
}