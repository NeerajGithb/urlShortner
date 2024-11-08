import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-purple-600 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[92vh] px-6 py-16 ">
        {/* Left Column (Text) */}
        <div className="flex flex-col gap-6 items-center justify-center text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-400">BitLinks</span>
          </h1>
          <p className="text-xl font-medium max-w-xl mx-auto">
            Your trusted link shortener. BitLinks is the world’s most reliable and efficient link shortener. It makes your links shorter, cleaner, and easier to share!
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <Link href="/sorten">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/vectorr.png"
            alt="Link Shortening Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>
    </main>
  );
}
