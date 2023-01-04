import React from "react";
import Image from 'next/image'

export default function Login() {
    return (
    <div className="mt-5">
        <Image src="/img.png" width={123} height={166} alt="logo" className="m-auto mt-20"/>
        <h1 className="text-4xl text-center mt-14 underline">Connexion</h1>
        <main className="mt-9 mx-14">
            <label className="flex flex-col-reverse relative focus group">
                <input
                    type="email" name="email" required
                    className="border-2 border-black px-4 py-3 leading-9"/>
                <span className="absolute text-xl transform -translate-y-3 left-4 transition leading-10 group-focus-within:-translate-y-16">Email address *</span>
                <span className="ml-auto leading-10">* Required</span>
            </label>
        </main>
        <main className="mt-12 mx-14">
            <label className="flex flex-col-reverse relative focus group">
                <input
                    type="email" name="email" required
                    className="border-2 border-black px-4 py-3 leading-9"/>
                <span className="absolute text-xl transform -translate-y-3 left-4 transition leading-10 group-focus-within:-translate-y-16">Password *</span>
            </label>
        </main>
        <div className="flex justify-center mt-5">
        <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
            <span>Login</span>
        </button>
        </div>

    </div>

    )
}
