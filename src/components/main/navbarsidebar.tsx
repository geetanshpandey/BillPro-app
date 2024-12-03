"use client";

import React, { useState } from "react";
import { MessageCirclePlus } from "lucide-react";
import { Home, FileText, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <MessageCirclePlus size={28} className="-mr-2" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Bill<span className="text-blue-600">Pro</span>
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* "Try it Free" Button */}
          <Link href="/" className="hidden md:block">
            <Button>Try it free</Button>
          </Link>

          {/* Profile Button */}
          <div className="relative">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <Home className="mr-2" size={16} />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/invoice"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <FileText className="mr-2" size={16} />
                      Invoice
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <LogOut className="mr-2" size={16} />
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
