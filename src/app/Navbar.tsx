import { Bell, ClipboardList, LogOut, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
                            <ClipboardList className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">
                            Shop With Priya
                        </span>
                    </div>
                    <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                        <Link href="/" className="text-indigo-600">
                            Dashboard
                        </Link>
                        <Link href="/orders" className="text-gray-500 hover:text-gray-900">
                            Orders
                        </Link>
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