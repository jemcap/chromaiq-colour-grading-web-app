"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container align-elements">
        <div className="flex h-14 sm:h-16 items-center justify-between ">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0 ">
            <Image
              src="/chromaiq-logo.png"
              alt="ChromaIQ Logo"
              width={140}
              height={140}
              className="invert hover:opacity-90 transition-opacity duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Input
                type="text"
                placeholder="Search Recipes"
                className="w-48 xl:w-60"
              />

              <Button
                variant="ghost"
                size="sm"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:opacity-90 text-xs px-3 whitespace-nowrap"
              >
                Get Random Recipe
              </Button>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-4 py-3 space-y-3">
              {/* Mobile Search */}
              <div className="pb-2">
                <Input
                  type="text"
                  placeholder="Search Recipes"
                  className="w-full"
                />
              </div>


              <div className="pt-2">
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:opacity-90"
                  onClick={() => setIsOpen(false)}
                >
                  Get Random Recipe
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
