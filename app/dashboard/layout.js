import Footer from "@/components/dashboard/footer.jsx";
import Navbar from "@/components/dashboard/navbar.jsx";
import SideBar from "@/components/dashboard/sidebar.jsx";
import Head from "next/head";
import Script from "next/script";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Script src="./index.js" />
      <Script src="./sidebar.js" />
      <Script src="./dark-mode.js" />
      {/* <Script src="./charts.js" /> */}
      <Script src="./constants.js" />
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
        <script>
          {`if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
          } else {
              document.documentElement.classList.remove('dark')
          }`}
        </script>
      </Head>
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
