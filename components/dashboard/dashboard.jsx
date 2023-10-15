'use client'

import { useGetUserQuery } from "@/app/Redux/api/userApi";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const { data, error, isLoading } = useGetUserQuery();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (data) {
            setUserData(data.data);
        }
    }, [data]);

    return (
        <div className="flex min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.error}</p>
            ) : (
                <h1 className="text-black dark:text-white">
                    Hello, {userData ? userData.email : ''}! Welcome to your dashboard.
                </h1>
            )}
        </div>
    );
};
