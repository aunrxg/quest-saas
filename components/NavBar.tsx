"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky flex justify-center items-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center">
              <span className="text-primary-foreground font-bold">M</span>
            </span>
            <span className="font-bold text-xl">MixQueue</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium hover:text-violet-600">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-violet-600">
            How It Works
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-violet-600">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-violet-600">
            For Streamers
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Log in
          </Link>
          <Button className="bg-violet-600 hover:bg-violet-700">Sign up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:text-violet-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-violet-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-violet-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-violet-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              For Streamers
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Button onClick={() => setIsMenuOpen(false)}>Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

