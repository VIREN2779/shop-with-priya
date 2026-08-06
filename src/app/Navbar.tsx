"use client";

import { Bell, ClipboardList, LogOut, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Dashboard" },
    { href: "/orders", label: "Orders" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
                            <ClipboardList className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">
                            Shop With Priya
                        </span>
                    </Link>
                    <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    pathname === link.href
                                        ? "text-indigo-600"
                                        : "text-gray-500 hover:text-gray-900"
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                        <span className="cursor-not-allowed text-gray-300">
                            Products (Soon)
                        </span>
                        <span className="cursor-not-allowed text-gray-300">
                            Suppliers (Soon)
                        </span>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Search className="h-5 w-5 text-gray-400" />
                    <Bell className="h-5 w-5 text-gray-400" />
                    <LogOut className="h-5 w-5 text-gray-400" />
                </div>
            </div>
        </header>
    )
}