import Link from "next/link";
import { Plus, Search, Bell, LogOut, ClipboardList, Clock, CalendarClock, AlertTriangle } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const priorityStyles: Record<string, string> = {
  today: "bg-red-50 text-red-600",
  this_weekend: "bg-orange-50 text-orange-600",
  in_2_days: "bg-amber-50 text-amber-600",
  in_a_week: "bg-blue-50 text-blue-600",
  custom: "bg-gray-100 text-gray-600",
};

const priorityLabel: Record<string, string> = {
  today: "Today",
  this_weekend: "This Weekend",
  in_2_days: "In 2 Days",
  in_a_week: "In a Week",
  custom: "Custom",
};

const statusStyles: Record<string, string> = {
  pending: "bg-red-50 text-red-600",
  ordered: "bg-amber-50 text-amber-600",
  received: "bg-green-50 text-green-600",
};

const dashboardStats = [
  {
    id: 1,
    icon: <ClipboardList className="h-5 w-5 text-indigo-600" />,
    iconBg: "bg-indigo-50",
    label: "Total Orders",
    value: "1,284",
    tag: "All time",
    tagColor: "text-gray-500 bg-gray-100",
  },
  {
    id: 2,
    icon: <Clock className="h-5 w-5 text-amber-600" />,
    iconBg: "bg-amber-50",
    label: "Pending Today",
    value: "42",
    tag: "Active",
    tagColor: "text-gray-500 bg-gray-100",
  },
  {
    id: 3,
    icon: <CalendarClock className="h-5 w-5 text-blue-600" />,
    iconBg: "bg-blue-50",
    label: "Due This Week",
    value: "156",
    tag: "Weekly",
    tagColor: "text-gray-500 bg-gray-100",
  },
  {
    id: 4,
    icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
    iconBg: "bg-red-50",
    label: "Overdue",
    value: "08",
    tag: "Urgent",
    tagColor: "text-red-600 bg-red-50",
  },
];

const recentOrders = [
  {
    id: "1",
    productName: "Silk Floral Scarf",
    imageUrl: "/placeholder-product.png",
    supplierName: "Handloom Collective",
    orderDate: "Oct 24, 2023",
    priority: "in_a_week",
    status: "ordered",
  },
  {
    id: "2",
    productName: "Ceramic Mug Set",
    imageUrl: "/placeholder-product.png",
    supplierName: "Clay & Co.",
    orderDate: "Oct 23, 2023",
    priority: "custom",
    status: "received",
  },
  {
    id: "3",
    productName: "Leather Tote Bag",
    imageUrl: "/placeholder-product.png",
    supplierName: "Heritage Leathers",
    orderDate: "Oct 22, 2023",
    priority: "today",
    status: "pending",
  },
  {
    id: "4",
    productName: "Cotton Baby Set",
    imageUrl: "/placeholder-product.png",
    supplierName: "Tiny Threads",
    orderDate: "Oct 22, 2023",
    priority: "this_weekend",
    status: "received",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Track your shop orders in one place
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Here&apos;s an overview of your shop&apos;s orders today.
            </p>
          </div>
          <Link
            href="/orders/new"
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4" />
            Add New Order
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardStats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.iconBg}`}
                >
                  {stat.icon}
                </div>

                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${stat.tagColor}`}
                >
                  {stat.tag}
                </span>
              </div>

              <p className="mt-4 text-xs font-medium uppercase text-gray-400">
                {stat.label}
              </p>

              <p className="mt-1 text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <h2 className="font-semibold text-gray-900">
              Recent Orders{" "}
              <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-normal text-gray-500">
                Last 30 days
              </span>
            </h2>
            <Link
              href="/orders"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              View All Orders
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-xs uppercase text-gray-400">
                  <th className="px-6 py-3 font-medium">Product Name</th>
                  <th className="px-6 py-3 font-medium">Supplier</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Priority</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-50 last:border-0">
                    <td className="flex items-center gap-3 px-6 py-3">
                      <div className="h-9 w-9 rounded-md bg-gray-100" />
                      <span className="font-medium text-gray-900">
                        {order.productName}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-indigo-600">
                      {order.supplierName}
                    </td>
                    <td className="px-6 py-3 text-gray-500">{order.orderDate}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyles[order.priority]}`}
                      >
                        {priorityLabel[order.priority]}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusStyles[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
