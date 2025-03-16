import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </span>
              <span className="font-bold text-xl">MixQueue</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              MixQueue is a collaborative music platform that lets everyone vote on what plays next. Perfect for
              parties, gatherings, and soon for streamers.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-violet-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 dark:text-gray-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 dark:text-gray-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 dark:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 dark:text-gray-400">
                  For Streamers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 dark:text-gray-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 dark:text-gray-400">
                  Music Integration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 dark:text-gray-400">
                  Streamer Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 dark:text-gray-400">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} StreamLine. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-500 hover:text-violet-600 dark:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-violet-600 dark:text-gray-400">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-violet-600 dark:text-gray-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

