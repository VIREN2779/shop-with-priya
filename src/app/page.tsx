import Footer from "./Footer";
import Navbar from "./Navbar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-8">
        main content part
      </main>
      <Footer />
    </div>
  );
}
