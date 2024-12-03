"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // shadcn Card components
import { Plus } from "lucide-react";
import Sidebar from "@/components/main/sidebar";
import { Home, FileText, LogOut } from "lucide-react";
import Link from "next/link";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import { Skeleton } from "@/components/ui/skeleton";
import BarChart from "@/components/main/charts/barchart";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const DashboardLayout: React.FC = () => {
  const [recentItems, setRecentItems] = useState(["Item 1", "Item 2"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to add a new recent item
  const addRecentItem = () => {
    setRecentItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white flex flex-col items-center py-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 md:ml-64">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6 ml-4">
          <h1 className="text-4xl font-bold">
            <span className={`${caveat.className}`}>
              <span className="text-blue-700">Dashboard</span>
            </span>
          </h1>
          {/* Dropdown */}
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
                    <a
                      href="invoice"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <FileText className="mr-2" size={16} />
                      Invoice
                    </a>
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

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full bg-blue-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full bg-blue-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full bg-blue-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 4</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full bg-blue-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-6 -mt-1">
          {/* Bar Chart Section */}
          <div className="flex-1 bg-white shadow rounded-md p-4">
            <h2 className="text-2xl text-blue-600 font-semibold">
              <span className={`${caveat.className}`}>Bar Chart</span>
            </h2>
            {/* Placeholder for Bar Chart */}
            <div className="ml-10 mt-2 h-[250px] rounded-md">
              <BarChart />
            </div>
          </div>

          {/* Recent Section */}
          <div className="w-full md:w-[30%] h-[325px] bg-white shadow rounded-md p-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-blue-600 font-semibold">
                <span className={`${caveat.className}`}>Recent</span>
              </h2>
              {/* Plus Button */}
              <button
                onClick={addRecentItem}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
              >
                <Plus size={16} />
              </button>
            </div>
            {/* Scrollable Recent Items */}
            <div className="space-y-4 overflow-y-auto h-[270px] -mt-2">
              {recentItems.map((item, index) => (
                <div key={index} className="p-2 bg-blue-50 rounded-md">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
