import Footer from "@/components/dashboard/footer.jsx";
import Navbar from "@/components/dashboard/navbar";
import SideBar from "@/components/dashboard/sidebar.jsx";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Navbar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SideBar />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          {/* Include shared UI here e.g. a header or sidebar */}
          <main>{children}</main>
          <Footer /> {/* Include shared UI here e.g. a footer */}
        </div>
      </div>
    </>
  );
}
