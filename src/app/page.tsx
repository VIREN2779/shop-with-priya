import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dashboard from "./Dashboard";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}
