"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import Sidebar from "@/components/main/sidebar";
import { Home, FileText, LogOut, Edit, Download, Mail, Trash, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"; 
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const InvoiceLayout: React.FC = () => {
  const [recentItems, setRecentItems] = useState(["Item 1", "Item 2"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
        <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 sm:ml-64">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6 ml-4">
          <h1 className="text-4xl font-bold">
            <span className={`${caveat.className}`}>
              <span className="text-blue-700 sm:ml-10 ml-12">Invoices</span>
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
                  <Dialog>
                    <DialogTrigger asChild>
                        <a
                        href="#"
                        className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                        <Edit className="mr-2" size={16} />
                        Edit invoice
                        </a>
                    </DialogTrigger>
                    <DialogContent className="p-6 bg-white rounded-lg shadow-xl w-full max-w-3xl scale-95 overflow-y-auto h-[98vh]">
                <DialogHeader>
                    <DialogTitle className="text-xl mt-1 font-bold text-center text-blue-600">Fill in the details below to create a new invoice.</DialogTitle>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {/* Invoice Information */}
                    <div>
                    <label className="block text-sm font-medium mb-1">Draft Name</label>
                    <input
                        type="text"
                        className="border rounded-lg w-full px-3 py-2"
                        placeholder="Enter draft name"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Currency</label>
                    <select className="border rounded-lg w-full px-3 py-2">
                        <option>Select currency</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                    </div>

                    {/* Additional Fields */}
                    <div>
                    <label className="block text-sm font-medium mb-1">From</label>
                    <textarea className="border rounded-lg w-full px-3 py-2" rows={1}></textarea>
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">To</label>
                    <textarea className="border rounded-lg w-full px-3 py-2" rows={1}></textarea>
                    </div>

                    <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input type="date" className="border rounded-lg w-full px-3 py-2" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Invoice Type</label>
                    <select className="border rounded-lg w-full px-3 py-2">
                        <option>Select type</option>
                        <option>Standard</option>
                        <option>Proforma</option>
                    </select>
                    </div>

                    {/* Item Details */}
                    <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <input
                        type="text"
                        className="border rounded-lg w-full px-3 py-2"
                        placeholder="Enter item description"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Quantity</label>
                    <input type="number" className="border rounded-lg w-full px-3 py-2" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Rate</label>
                    <input type="number" className="border rounded-lg w-full px-3 py-2" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Amount</label>
                    <input type="number" className="border rounded-lg w-full px-3 py-2" readOnly />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Subtotal</label>
                    <input type="text" className="border rounded-lg w-full px-3 py-2" readOnly />
                    </div>
                    <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">Note</label>
                    <textarea className="border rounded-lg w-full px-3 py-2" rows={1}></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="col-span-2 flex justify-end gap-4 mt-2">
                    <button
                        type="button"
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                    >
                        Create Invoice
                    </button>
                    </div>
                </form>
                </DialogContent>
                    </Dialog>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    ><Download className="mr-2" size={16} />
                      Download
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    ><Mail className="mr-2" size={16} />
                      Reminder Email
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    ><Trash className="mr-2" size={16} />
                      Delete
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    ><CheckCircle className="mr-2" size={16} />
                      Mark as paid
                    </a>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    ><LogOut className="mr-2" size={16} />
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col mt-8 sm:ml-12 justify-between border border-gray-300 w-[90%] h-[80%] rounded-xl relative p-6">
          {/* Left Side: Heading and Subheading */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              Manage Invoices
            </h2>
            <p className="text-gray-500 mb-8">
              Keep track of your invoice records and details.
            </p>
          </div>

          {/* Right Side: Create Button */}
          <div>
            <Dialog>
                <DialogTrigger asChild>
                <button
                    className="absolute top-4 sm:scale-100 scale-75 right-4 bg-blue-700 text-white px-4 py-2 rounded-full flex items-center shadow-lg hover:bg-blue-800"
                >
                    <Plus className="mr-2" />
                    Create
                </button>
                </DialogTrigger>
                <DialogContent className="p-6 bg-white rounded-lg shadow-xl w-full max-w-3xl scale-95 overflow-y-auto h-[98vh]">
                <DialogHeader>
                    <DialogTitle className="text-xl mt-1 font-bold text-center text-blue-600">Fill in the details below to create a new invoice.</DialogTitle>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {/* Invoice Information */}
                    <div>
                    <label className="block text-sm font-medium mb-1">Draft Name</label>
                    <input
                        type="text"
                        className="border rounded-lg w-full px-3 py-2"
                        placeholder="Enter draft name"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Currency</label>
                    <select className="border rounded-lg w-full px-3 py-2">
                        <option>Select currency</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                    </div>

                    {/* Additional Fields */}
                    <div>
                    <label className="block text-sm font-medium mb-1">From</label>
                    <textarea className="border rounded-lg w-full px-3 py-2" rows={1}></textarea>
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">To</label>
                    <textarea className="border rounded-lg w-full px-3 py-2" rows={1}></textarea>
                    </div>

                    <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input type="date" className="border rounded-lg w-full px-3 py-2" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Invoice Type</label>
                    <select className="border rounded-lg w-full px-3 py-2">
                        <option>Select type</option>
                        <option>Standard</option>
                        <option>Proforma</option>
                    </select>
                    </div>

                    {/* Item Details */}
                    <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <input
                        type="text"
                        className="border rounded-lg w-full px-3 py-2"
                        placeholder="Enter item description"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Quantity</label>
                    <input type="number" className="border rounded-lg w-full px-3 py-2" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Rate</label>
                    <input type="number" className="border rounded-lg w-full px-3 py-2" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Amount</label>
                    <input type="number" className="border rounded-lg w-full px-3 py-2" readOnly />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Subtotal</label>
                    <input type="text" className="border rounded-lg w-full px-3 py-2" readOnly />
                    </div>
                    <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">Note</label>
                    <textarea className="border rounded-lg w-full px-3 py-2" rows={1}></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="col-span-2 flex justify-end gap-4 mt-2">
                    <button
                        type="button"
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                    >
                        Create Invoice
                    </button>
                    </div>
                </form>
                </DialogContent>
            </Dialog>
            </div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
            </Table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLayout;
