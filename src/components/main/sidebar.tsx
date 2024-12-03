"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Home, Users, Briefcase, Settings, Calendar, LogOut, Laptop, Award, LayoutDashboard, FileText } from 'lucide-react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null); // Create a ref for the sidebar

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);  // Toggle sidebar state
  };

  // Function to close sidebar if click is outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setSidebarOpen(false);  // Close sidebar if click is outside
    }
  };

  useEffect(() => {
    // Add event listener for click outside when sidebar is open
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener when component is unmounted or sidebar is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Button to toggle sidebar */}
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="fixed top-6 left-4 p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        ref={sidebarRef} // Attach the ref to the sidebar element
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} // Toggle class based on isSidebarOpen state
        aria-label="Sidebar"
      >
        <div className="h-full py-6 px-3 overflow-y-auto bg-blue-50 dark:bg-gray-800">
          <span className="flex justify-center text-center text-black mb-4 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
            <LayoutDashboard size={28} className='sm:mr-2 mr-1' />Bill<span className='text-blue-600'>Pro</span>
          </span>
          <ul className="space-y-2 font-medium">
            {/* Sidebar menu items */}
            <li>
              <Link href="/" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Home className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="ms-3">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Laptop className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
              </Link>
            </li>
            <li>
              <Link href="/invoice" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 ms-3 whitespace-nowrap">Invoice</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
              </Link>
            </li>
            <li>
              <a href="#" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <LogOut className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
