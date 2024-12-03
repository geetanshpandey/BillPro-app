"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import NavbarSidebar from "@/components/main/navbarsidebar";
import { toast } from "sonner"; // Import Sonner components
import Link from "next/link";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

interface Document {
  name: string;
  createdTime: string;
  createdDate: string;
  image: string;
}

const DocumentPage: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const id1 = new Date().toLocaleTimeString();
   

  const addDocument = () => {
    const newDocument: Document = {
      name: "New Document",
      createdTime: new Date().toLocaleTimeString(),
      createdDate: new Date().toLocaleDateString(),
      image: "https://via.placeholder.com/50", // Placeholder image
    };
    setDocuments([...documents, newDocument]);

    // Success notification for document creation
    toast.success("New document created successfully!");
  };

  const deleteDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));

    // Error notification for document deletion
    toast.error("Document deleted.");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavbarSidebar />

      {/* Main Section */}
      <main className="p-6 mt-20">

        <div className="ml-2">
        <div className="flex justify-center mt-4">
        <span className="sm:text-lg text-md font-semibold text-gray-500">
          Introducing BillPro!
        </span>
      </div>
        </div>
        <div className="text-center sm:text-5xl text-4xl font-bold mt-4">
        <span className={`${caveat.className}`}><span className="text-blue-700">Easy Billing</span></span>
        </div>
        <div className="text-center sm:text-3xl text-2xl mt-4 font-semibold text-black">
        <span className={`${caveat.className}`}>Your Go-To Tool for Invoice Management</span>
        </div>
        <div className="text-center sm:text-lg text-md mt-4 font-lg text-gray-500">
        <span>BillPro takes the hassle out of invoicing, offering a seamless and <br />intuitive platform to generate professional invoices <br />in seconds. Boost your productivity and leave the paperwork to us!</span>
        </div>
        <div className="flex mt-12 justify-center gap-x-10 text-center">
          <Button className="p-4 bg-blue-600 text-white w-32 hover:bg-blue-500">Try it free</Button>
        </div>
        <div className="flex mt-16 sm:ml-48 ml-16 justify-center border border-gray-300 w-[70%] h-40 rounded-xl">
          <span className="mt-16 text-gray-500">Empty area</span>
        </div>
        <div className="flex mt-8">
          <div className="text-center sm:text-5xl text-4xl font-bold mt-36 md:ml-28 ml-1">
        <span className={`${caveat.className}`}><span className="text-blue-700">Effortless Invoicing</span></span><br />
        <div className="text-center sm:text-4xl text-3xl font-bold mt-8">
        <span className={`${caveat.className}`}><span className="text-gray-700">Make Invoice at your finger tips</span></span>
        </div>
        <div className="text-center sm:text-4xl text-3xl font-bold mt-8">
        <Button className="px-10">
          Try it for free
        </Button>
        </div>
        </div>

        
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[550px] md:max-w-[400px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[522px] bg-white dark:bg-gray-800">
            <img
              src="images/15221.jpg"
              className="dark:hidden h-[426px] md:h-[522px]"
              alt="Tablet Mockup Light"
            />
            <img
              src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
              className="hidden dark:block h-[426px] md:h-[654px]"
              alt="Tablet Mockup Dark"
            />
          </div>
        </div>
        </div>
        <div className="flex justify-center text-center space-y-4 -mb-10 mt-20">
          <span className={`${caveat.className}`}><span className="sm:text-4xl text-2xl text-gray-700 font-semibold"><span className="text-blue-600 pb-20">Add items </span></span></span>
        </div>
        <div className="flex justify-center text-center space-y-4 sm:-mb-10 -mb-20 mt-14">
          <span className={`${caveat.className}`}><span className="sm:text-4xl text-2xl text-gray-700 font-semibold">by one click and create invoices.</span></span>
        </div>
        <div className="flex justify-center items-center h-screen sm:-mt-1 -mt-20">
          <div
            className="relative sm:w-[50vw] w-full sm:h-[65vh] h-[50vh] bg-gray-200  rounded-lg overflow-hidden shadow-lg scale-90"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <img
              src="/images/11485959.jpg"
              alt="Sample"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex mt-8 sm:-ml-44 -ml-1">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[550px] md:max-w-[400px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[522px] bg-white dark:bg-gray-800">
            <img
              src="images/114859591.jpg"
              className="dark:hidden h-[426px] md:h-[522px]"
              alt="Tablet Mockup Light"
            />
            <img
              src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
              className="hidden dark:block h-[426px] md:h-[654px]"
              alt="Tablet Mockup Dark"
            />
          </div>
        </div>
        <div className="sm:mr-36 mr-1">
        <div className="text-center sm:text-5xl text-4xl font-bold mt-36 sm:-ml-28 ml-1">
        <span className={`${caveat.className}`}><span className="text-blue-700">Streamline Your Invoicing</span></span><br />
        <div className="text-center sm:text-4xl text-3xl font-bold mt-8">
        <span className={`${caveat.className}`}><span className="text-gray-700">Simplify, Manage, and Excel</span></span>
        </div>
        <div className="text-center sm:text-4xl text-3xl font-bold mt-8">
        <Button className="px-10">
          Try it for free
        </Button>
        </div>
        </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default DocumentPage;
