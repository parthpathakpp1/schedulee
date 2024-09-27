import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { checkUser } from "@/lib/checkUser";
import UserMenu from "./user-menu";
import { Button } from "./ui/button";
import { PenBox, Calendar } from "lucide-react";

async function Header() {
  await checkUser();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Calendar className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-900">Schedulee</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/features" className="text-gray-600 hover:text-blue-600">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/events?create=true">
              <Button variant="outline" className="flex items-center gap-2">
                <PenBox size={18} />
                Create Event
              </Button>
            </Link>
            <UserMenu />
          </SignedIn>

          <SignedOut>
            <Link href="/events?create=true">
              <Button variant="outline" className="flex items-center gap-2 ">
                <PenBox size={18} />
                Create Event
              </Button>
            </Link>
            <SignInButton mode="modal">
              <Button
                variant="default"
                className=" bg-blue-600 hover:bg-blue-700"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
