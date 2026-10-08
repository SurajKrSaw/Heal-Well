import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import "@/components/shadcn-space/button-hb.css";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { TfiMenuAlt } from "react-icons/tfi";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b bg-teal-300 pl-3 pr-1 sm:px-6 sm:py-5 py-4">
      {/* Logo */}
      <div>
        <Link href="/">
          <h2 className="text-2xl  tracking-tight text-green-700">HEAL WELL</h2>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden text-lg md:block">
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <Link
              href="/"
              className="group/item relative px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-teal-700"
            >
              Home
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-teal-600 transition-all duration-200 group-hover/item:w-3/4" />
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/services"
              className="group/item relative px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-teal-700"
            >
              Services
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-teal-600 transition-all duration-200 group-hover/item:w-3/4" />
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/about"
              className="group/item relative px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-teal-700"
            >
              About Us
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-teal-600 transition-all duration-200 group-hover/item:w-3/4" />
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/how-it-works"
              className="group/item relative px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-teal-700"
            >
              How It Works
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-teal-600 transition-all duration-200 group-hover/item:w-3/4" />
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/faq"
              className="group/item relative px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-teal-700"
            >
              FAQ
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-teal-600 transition-all duration-200 group-hover/item:w-3/4" />
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* Right side */}
      <div className="flex items-center sm:gap-2 gap-1">
        {/* Contact - visible everywhere */}
        <Link
          href="/contact"
          className="rounded-md bg-green-700 text-white hover:bg-green-800 px-3 py-1"
        >
          Contact Us
        </Link>

        {/* Book Now - visible everywhere */}
        <Link href="/book">
          <Button
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white heartbeateffect cursor-pointer"
          >
            Book Now
          </Button>
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="default"
                className="font-bold text-3xl text-green-900 bg-teal-400 hover:bg-teal-500 md:hidden"
              >
                <TfiMenuAlt className="text-2xl font-bold" />
              </Button>
            }
          />

          <SheetContent className="w-[300px] border-l-green-100 bg-teal-100">
            <SheetHeader className="border-b border-green-100 pb-4">
              <SheetTitle className="text-2xl font-bold tracking-tight text-green-700">
                HEAL WELL
              </SheetTitle>

              <SheetDescription className="text-slate-500">
                Professional healthcare services at home.
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-2 px-4 py-6">
              <Link
                href="/"
                className="rounded-md px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-green-50 hover:text-green-700"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="rounded-md px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-green-50 hover:text-green-700"
              >
                Services
              </Link>

              <Link
                href="/about"
                className="rounded-md px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-green-50 hover:text-green-700"
              >
                About Us
              </Link>

              <Link
                href="/how-it-works"
                className="rounded-md px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-green-50 hover:text-green-700"
              >
                How It Works
              </Link>

              <Link
                href="/faq"
                className="rounded-md px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-green-50 hover:text-green-700"
              >
                FAQ
              </Link>
            </nav>

            <SheetFooter className="flex-col gap-3 border-t border-green-100 pt-5 ">
              <Button className="w-full bg-green-700 font-semibold text-white hover:bg-green-800">
                <Link href="/contact">Contact Us</Link>
              </Button>

              <Button className="w-full bg-red-600 font-semibold text-white shadow-sm hover:bg-red-700">
                <Link href="/book">Book Now</Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
