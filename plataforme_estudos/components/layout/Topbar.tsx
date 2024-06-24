"use client";

import {  UserButton, useAuth } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";



const Topbar = () => {
  const { isSignedIn } = useAuth();
  const topRoutes = () => [
    { label: "Instrutor", path: "/instructor/courses" },
    { label: "Aprendizado", path: "/learning" },
  ];
  return (
    <div className="flex items-center justify-between p-4">
      <Link href={"/"}>
        <Image src={"/logo.png"} width={250} height={200} alt="logo" />
      </Link>
      <div className="max-md:hidden w-[400px] rounded-full flex">
        <input
          type="text"
          className="flex-grow  bg-[#f2dcc6] rounded-1-full border-none outline-none text-lg pl-4 py-3 
        text-green-900 w-full font-bold"
          placeholder="Pesquisar  "
        />

        <button className="bg-[#F4A460] rounded-r-full border-none outline-none cursor-pointer px-4">
          <Search className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden flex gap-6">
          {topRoutes().map((route) => (
            <Link
              href={route.path}
              key={route.path}
              className="text-lg font-medium text-[black]"
            >
              {route.label}
            </Link>
          ))}
         </div>
         
         {isSignedIn ? (  
          <UserButton  afterSignOutUrl="/sign-in" />
           ):(  <Link
            href="/sign-in"
            className="text-lg font-medium text-[black]"
          >
          <Button>Entrar</Button>
          </Link>
          )}
      </div>
    </div>
  );
};

export default Topbar;
