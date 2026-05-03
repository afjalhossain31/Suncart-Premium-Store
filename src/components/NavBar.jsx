"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../public/solis-logo.png";
import {
  IoCartOutline,
  IoLogIn,
  IoPersonAdd,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { ArrowRightFromSquare, Gear, Person } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { UserUpdate } from "./UserUpdate";

const NavBar = () => {
  const [isUserUpdateOpen, setIsUserUpdateOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
  ];

  return (
    <div className="bg-orange-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 md:px-0 h-20">
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Solis Logo"
                width={120}
                height={40}
                className="w-auto h-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center gap-2 text-base font-bold transition-all duration-300 uppercase ${
                    isActive
                      ? "text-orange-600"
                      : "text-stone-900 hover:text-orange-500"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-orange-600 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  />
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center justify-center gap-4">
            <button className="flex items-center justify-center w-11 h-11 rounded-full bg-orange-500 text-stone-50 transition-transform active:scale-95 shadow-md cursor-pointer shrink-0">
              <IoCartOutline className="text-2xl" />
            </button>

            {user && (
              <Dropdown placement="bottom">
                <Dropdown.Trigger className="flex items-center justify-center rounded-full outline-none shrink-0">
                  <Avatar
                    size="lg"
                    className="border-2 border-orange-500 rounded-full object-cover cursor-pointer"
                  >
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>

                <Dropdown.Popover className="rounded-xl mt-2" align="center">
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Avatar size="md">
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>
                          {user?.name.charAt(0)}
                        </Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="text-sm leading-5 font-medium">
                          {user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Dropdown.Menu>
                    <Dropdown.Item id="profile">
                      <Link
                        href={"/my-profile"}
                        className="flex w-full items-center justify-between gap-2"
                      >
                        <Label>My Profile</Label>
                        <Person className="size-3.5 text-muted" />
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="settings"
                      textValue="Settings"
                      onAction={() => setIsUserUpdateOpen(true)}
                    >
                      <div
                        className="flex w-full items-center justify-between gap-2 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsUserUpdateOpen(true);
                        }}
                      >
                        <Label className="cursor-pointer">Settings</Label>
                        <Gear className="size-3.5 text-muted" />
                      </div>
                    </Dropdown.Item>

                    <Dropdown.Item id="logout" variant="danger">
                      <div
                        onClick={async () => {
                          await authClient.signOut();
                          router.push("/login");
                          router.refresh();
                        }}
                        className="flex w-full items-center justify-between gap-2"
                      >
                        <Label>Log Out</Label>
                        <ArrowRightFromSquare className="size-3.5 text-danger" />
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            )}

            {!user && (
              <div className="hidden md:flex gap-4 justify-center items-center">
                <Link
                  href={"/login"}
                  className="flex justify-center items-center gap-2 px-8 py-2.5 rounded-full border-2 border-orange-500 text-stone-900 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.2)] transition-all active:scale-95"
                >
                  <IoLogIn size={24} />
                  Login
                </Link>
                <Link
                  href={"/register"}
                  className="flex justify-center items-center gap-2 px-8 py-2.5 rounded-full border-2 border-orange-500 bg-orange-500 text-stone-50 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)] transition-all active:scale-95"
                >
                  <IoPersonAdd />
                  Register
                </Link>
              </div>
            )}

            <button
              className="md:hidden flex items-center justify-center text-stone-900 transition-transform active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-orange-50 border-b border-stone-200 shadow-lg z-50">
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-bold uppercase transition-all duration-300 ${
                      isActive
                        ? "text-orange-600"
                        : "text-stone-900 hover:text-orange-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {!user && (
                <div className="flex flex-col gap-4 mt-2 w-full px-8 sm:px-16">
                  <Link
                    href={"/login"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center items-center gap-2 w-full py-3.5 rounded-full border-2 border-orange-500 text-stone-900 font-bold active:scale-95 transition-all"
                  >
                    <IoLogIn size={24} />
                    Login
                  </Link>
                  <Link
                    href={"/register"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center items-center gap-2 w-full py-3.5 rounded-full border-2 border-orange-500 bg-orange-500 text-stone-50 font-bold active:scale-95 transition-all"
                  >
                    <IoPersonAdd />
                    Register
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
      <UserUpdate
        isOpen={isUserUpdateOpen}
        onOpenChange={setIsUserUpdateOpen}
        customTrigger={<button className="hidden">hidden</button>}
      />
    </div>
  );
};

export default NavBar;
