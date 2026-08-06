"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const priorityOptions = [
    { value: "today", label: "Today", dot: "bg-red-500" },
    { value: "this_weekend", label: "This Weekend", dot: "bg-orange-500" },
    { value: "in_2_days", label: "In 2 Days", dot: "bg-amber-500" },
    { value: "in_a_week", label: "In a Week", dot: "bg-blue-500" },
];

const statusOptions = [
    { value: "pending", label: "Pending Confirmation" },
    { value: "processing", label: "Processing" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
];

export default function NewOrderPage() {
    const router = useRouter();
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [productName, setProductName] = useState("");
    const [supplierName, setSupplierName] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [priority, setPriority] = useState("in_a_week");
    const [status, setStatus] = useState("pending");
    const [submitting, setSubmitting] = useState(false);

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        setImagePreview(URL.createObjectURL(file));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);

        // In future
        // POST /api/orders (and upload image to Cloudinary first)

        console.log({ productName, supplierName, orderDate, priority, status });

        setSubmitting(false);
        router.push("/orders");
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-8">
                <h1 className="text-2xl font-bold text-gray-900">Create New Order</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Fill in the details below to register a new supplier order.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-6 rounded-xl border border-gray-200 bg-white p-6"
                >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                            <label className="text-sm font-semibold text-gray-900">
                                Product Visual
                            </label>
                            <p className="mt-1 text-xs text-gray-500">
                                Upload a clear photo of the product for inventory tracking.
                            </p>
                            <label className="mt-3 flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Product preview"
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                ) : (
                                    <>
                                        <Upload className="h-6 w-6 text-gray-400" />
                                        <span className="mt-2 text-sm text-gray-500">
                                            Click to upload
                                        </span>
                                    </>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Fields */}
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    placeholder="e.g. Organic Cotton T-Shirt"
                                    className="mt-1 w-full rounded-lg text-gray-700 border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Supplier
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={supplierName}
                                    onChange={(e) => setSupplierName(e.target.value)}
                                    placeholder="Supplier name"
                                    className="mt-1 w-full rounded-lg text-gray-700 border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Order Date
                                </label>
                                <input
                                    type="date"
                                    required
                                    value={orderDate}
                                    onChange={(e) => setOrderDate(e.target.value)}
                                    className="mt-1 w-full rounded-lg text-gray-700 border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-100" />

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                            <label className="text-sm font-semibold text-gray-900">
                                Order Priority
                            </label>
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                {priorityOptions.map((option) => (
                                    <button
                                        type="button"
                                        key={option.value}
                                        onClick={() => setPriority(option.value)}
                                        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${priority === option.value
                                            ? "border-indigo-400 bg-indigo-50 text-indigo-700"
                                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className={`h-2 w-2 rounded-full ${option.dot}`} />
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-900">
                                Initial Status
                            </label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="mt-3 w-full rounded-lg text-gray-700 border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                                {statusOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <p className="mt-2 text-xs text-gray-400">
                                Status can be updated from the Order Dashboard later.
                            </p>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-100" />

                    <div className="flex justify-end gap-3">
                        <Link
                            href="/"
                            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                        >
                            {submitting ? "Saving..." : "Save Order"}
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}