"use client";

import { useState } from "react";
import Link from "next/link";
import { Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewOrderPage() {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        setImagePreview(URL.createObjectURL(file));
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-8">
                <h1 className="text-2xl font-bold text-gray-900">Create New Order</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Fill in the details below to register a new supplier order.
                </p>

                <form className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
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