'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NavbarSidebar from "@/components/main/navbarsidebar";
import { useRouter } from "next/navigation";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

type Box = {
  id: number;
  name: string;
  date: string;
};

const SignInPage = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const router = useRouter();

  const handleSave = () => {
    console.log("Saved:", { username, password, role });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Sidebar */}
      <NavbarSidebar />

      <div className="text-center mt-12 mb-8">
        <h1 className="text-5xl font-semibold mb-2 text-blue-600"><span className={`${caveat.className}`}>Welcome to the <span className='text-black'>Live</span>docs</span></h1>
        <p className="text-2xl text-gray-500"><span className={`${caveat.className}`}>Manage your boards and users efficiently</span></p>
      </div>

      {/* Form */}
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create User</h2>
        <form className='scale-95'>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex justify-center text-center'>
          <Button onClick={handleSave} className="w-20 bg-blue-600">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;