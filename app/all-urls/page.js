"use client";
import { useEffect, useState } from "react";

export default function AllUrlsPage() {
    const [urls, setUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUrls = async () => {
            try {
                const response = await fetch("/api/getAllUrls");
                if (!response.ok) throw new Error("Failed to fetch URLs");
                const data = await response.json();
                if (data.success) {
                    setUrls(data.data);
                } else {
                    setError("Failed to load shortened URLs.");
                }
            } catch (error) {
                setError("There was an error loading the URLs.");
            } finally {
                setLoading(false);
            }
        };
        fetchUrls();
    }, []);

    // Handle URL deletion
    const deleteUrl = async (shortUrl) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this URL?");
        if (!confirmDelete) return;

        try {
            const response = await fetch("/api/deleteUrl", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ shortUrl }),
            });

            const data = await response.json();
            if (data.success) {
                setUrls(urls.filter((url) => url.shortUrl !== shortUrl)); // Remove the deleted URL from state
            } else {
                setError("Failed to delete the URL.");
            }
        } catch (error) {
            setError("There was an error deleting the URL.");
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto px-4 pt-20">
            <h1 className="sm:text-3xl text-2xl font-bold text-center text-gray-800 mb-8">All Shortened URLs</h1>
            <div className="space-y-4">
                {urls.length === 0 ? (
                    <div className="text-center text-gray-500">
                        <p>No shortened URLs found.</p>
                    </div>
                ) : (
                    urls.map((url, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between sm:p-4 px-4 py-2 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out"
                        >
                            <div className="flex-1">
                                <p className="text-sm hidden sm:block text-gray-600">Shortened URL:</p>
                                <a
                                    href={url.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium text-blue-500 truncate"
                                >
                                    {url.shortUrl}
                                </a>
                            </div>
                            <div className="flex space-x-4 mt-2 sm:mt-0">
                                <a
                                    href={url.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2"
                                >
                                    Visit
                                </a>
                                <button
                                    onClick={() => deleteUrl(url.shortUrl)}
                                    className="text-sm text-white bg-red-500 hover:bg-red-600 rounded px-4 py-2"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
