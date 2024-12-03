"use client" ;
import React, { useState } from 'react';
import { toast } from 'sonner'; // Importing Sonner for notifications
import { Card } from '@/components/ui/card'; // Import Card from Shadcn UI
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from '@/components/main/navbarsidebar';
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });


const GeneratePage: React.FC = () => {
  const [history, setHistory] = useState([
    { name: 'Name1', time: 'Time', desc: 'Desc1' },
    { name: 'Name2', time: 'Time', desc: 'Desc2' },
  ]);
  const [preview, setPreview] = useState<{ name: string; desc: string; time: string }[]>([]);
  const [contentType, setContentType] = useState<string>('');
  const [inputText, setInputText] = useState('');

  // Handle content generation
  const handleGenerate = () => {
    const newPreview = {
      name: `NAME ${preview.length + 1}`,
      desc: inputText,
      time: new Date().toLocaleString(),
    };

    setPreview([...preview, newPreview]);
    toast.success('New preview generated!');
  };

  return (
    <div className="">
      {/* Navbar */}
      <Navbar/>

      <div className="flex p-4 space-x-4">
        {/* Left Section: History */}
        <div className="w-2/5">
          <Card className="p-4 space-y-4">
            <div className="flex justify-between items-center mt-2">
            <div className="text-2xl text-gray-600 font-semibold"><span className={`${caveat.className}`}>History</span></div>
            <Avatar className='ml-4'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
            {history.map((item, index) => (
              <div key={index} className="border p-4 rounded-md">
                <h3 className="font-semibold">{item.name}</h3>
                <p>{item.desc}</p>
                <span>{item.time}</span>
              </div>
            ))}
          </Card>
        </div>

        {/* Right Section */}
        <div className="w-3/5 space-y-6">
          {/* Available Points */}
          <Card className="p-4 p-y-6 space-y-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <div><span className="text-2xl font-semibold"><span className={`${caveat.className}`}>Available Points</span></span></div>
                    <div className="text-md text-gray-600 -mt-1">50 credits</div>
                </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Subscribe</button>
            </div>
            </Card>

          {/* Content Type and Input Section */}
          <Card className="p-4 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="contentType" className="text-sm">Content Type (Dropdown)</label>
              <select
                id="contentType"
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="border p-2 rounded-md"
              >
                <option value="">Select Type</option>
                <option value="prompt">Prompt</option>
                <option value="input">Input</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="inputText" className="text-sm">Prompt Input</label>
              <textarea
                id="inputText"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="border p-1 rounded-md w-full h-8"
              />
            </div>

            <button
              onClick={handleGenerate}
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              Generate
            </button>
          </Card>

          {/* Preview Section */}
          <Card className="p-4 space-y-4">
            <h2 className="font-semibold text-2xl"><span className={`${caveat.className}`}>Preview</span></h2>
            {preview.map((item, index) => (
              <div key={index} className="border p-4 rounded-md">
                <h3 className="font-semibold">{item.name}</h3>
                <p>{item.desc}</p>
                <span>{item.time}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;
