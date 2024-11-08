"use client";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setGeneratedUrl(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="flex flex-col  bg-gradient-to-br from-purple-50 to-purple-100 p-6 z-10">
      <div className="mx-auto max-w-lg w-full bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-purple-700 text-center mb-6">
          Generate Your Short URL
        </h2>

        {/* Shortened Instructions */}
        <p className="text-lg sm:text-xl text-gray-700 mb-4 text-center">
          Enter a URL to shorten, or create a custom short link.
        </p>

        <div className="flex flex-col gap-6">
          <input
            type="text"
            value={url}
            placeholder="Enter the long URL (e.g., https://example.com)"
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-purple-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            value={shortUrl}
            placeholder="Enter Custom Short URL (optional)"
            onChange={(e) => setShortUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-purple-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          {/* Generate Button */}
          <button
            onClick={generate}
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition transform hover:scale-105 shadow-lg"
          >
            Generate
          </button>
          <Link
            href="/all-urls"
            className=" flex items-center justify-center w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition transform hover:scale-105 shadow-lg"
          >
            <span>Show All Shortened URLs</span>
          </Link>
        </div>

        {/* Show generated URL */}
        {generatedUrl && (
          <div className="mt-8 text-center">
            <p className="text-lg sm:text-xl font-medium text-purple-800 mb-4">Your Shortened URL:</p>
            <Link
              href={generatedUrl}
              target="_blank"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full shadow-md font-semibold transition transform hover:scale-105"
            >
              {generatedUrl}
            </Link>
            
          </div>
        )}

        {/* Helpful Tips */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>For a custom link, enter your preferred short URL.</p>
          <p>If not, leave it blank for an auto-generated link.</p>
        </div>
      </div>
    </main>
  );
};

export default Page;
