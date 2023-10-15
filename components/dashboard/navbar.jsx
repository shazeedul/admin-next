"use client";

import { clearUser } from "@/app/Redux/Features/Auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {

  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);

    if (dropdown) {
      // Check if the current dropdown is hidden
      const isHidden = dropdown.classList.contains("hidden");

      // Toggle all dropdowns with the "hidden" class
      const allDropdowns = document.querySelectorAll(".dropdownSelector");
      allDropdowns.forEach((item) => {
        item.classList.add("hidden");
      });

      // If the current dropdown was hidden, remove the "hidden" class
      if (isHidden) {
        dropdown.classList.remove("hidden");
      }
    }
  }

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const router = useRouter();

  const signOut = () => {
    dispatch(clearUser());
    router.push("/login");
  }

  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <a href="#" className="flex ml-2 md:mr-24">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
                width={32}
                height={32}
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-blue-600 dark:text-white">
                Flowbite
              </span>
            </a>
            <form action="#" method="GET" className="hidden lg:block lg:pl-3.5">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              id="dropdownNotificationButton"
              onClick={() => toggleDropdown("dropdownNotification")}
              className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
              type="button"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20"
              >
                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
              </svg>
              <div className="relative flex">
                <div className="relative inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900" />
              </div>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdownNotification"
              className="z-20 hidden dropdownSelector w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
              aria-labelledby="dropdownNotificationButton"
              style={{
                position: "absolute",
                top: "70%",
                transform: "translate(-220px, 20px)",
              }}
            >
              <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                Notifications
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                <a
                  href="#"
                  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full w-11 h-11"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                      width={44}
                      height={44}
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                      <svg
                        className="w-2 h-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                        <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      New message from{" "}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Jese Leos
                      </span>
                      {`: "Hey, what's up? All set for the presentation?"`}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      a few moments ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full w-11 h-11"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Joseph image"
                      width={44}
                      height={44}
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                      <svg
                        className="w-2 h-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Joseph Mcfall
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-gray-900 dark:text-white">
                        5 others
                      </span>{" "}
                      started following you.
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      10 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full w-11 h-11"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie image"
                      width={44}
                      height={44}
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
                      <svg
                        className="w-2 h-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Bonnie Green
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-gray-900 dark:text-white">
                        141 others
                      </span>{" "}
                      love your story. See it and view more stories.
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      44 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full w-11 h-11"
                      src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                      alt="Leslie image"
                      width={44}
                      height={44}
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800">
                      <svg
                        className="w-2 h-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Leslie Livingston
                      </span>{" "}
                      mentioned you in a comment:{" "}
                      <span className="font-medium text-blue-500" href="#">
                        @bonnie.green
                      </span>{" "}
                      what do you say?
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      1 hour ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full w-11 h-11"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="Robert image"
                      width={44}
                      height={44}
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
                      <svg
                        className="w-2 h-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 14"
                      >
                        <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Robert Brown
                      </span>{" "}
                      posted a new video: Glassmorphism - learn how to implement
                      the new design trend.
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      3 hours ago
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="#"
                className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
              >
                <div className="inline-flex items-center ">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 14"
                  >
                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  View all
                </div>
              </a>
            </div>
            <button
              type="button"
              data-dropdown-toggle="apps-dropdown"
              className="hidden p-2 text-gray-500 rounded-lg sm:flex hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </button>
            <div
              className="z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600"
              id="apps-dropdown"
            >
              <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Apps
              </div>
              <div className="grid grid-cols-3 gap-4 p-4">
                <a
                  href="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg
                    className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Sales
                  </div>
                </a>
                <a
                  href="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg
                    className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Users
                  </div>
                </a>
                <a
                  href="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg
                    className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Inbox
                  </div>
                </a>
                <a
                  href="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg
                    className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Profile
                  </div>
                </a>
                <a
                  href="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg
                    className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Settings
                  </div>
                </a>
                <a
                  href="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg
                    className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Products
                  </div>
                </a>
                <a
                  href="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg
                    className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Pricing
                  </div>
                </a>
                <a
                  href="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg
                    className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Billing
                  </div>
                </a>
                <a
                  href="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg
                    className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Logout
                  </div>
                </a>
              </div>
            </div>
            <button
              id="theme-toggle"
              data-tooltip-target="tooltip-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="tooltip-toggle"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
            >
              Toggle dark mode
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              id="dropdownUserAvatarButton"
              onClick={() => toggleDropdown("dropdownAvatar")}
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
                width={32}
                height={32}
              />
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdownAvatar"
              className="z-10 hidden dropdownSelector bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              style={{
                position: "absolute",
                top: "70%",
                transform: "translate(-25px, 20px)",
                zIndex: 100,
              }}
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{user?.name}</div>
                <div className="font-medium truncate">{user?.email}</div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
              >
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
              <div className="py-2">
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={signOut}
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
