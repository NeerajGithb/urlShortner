import Link from 'next/link';

export default function About() {
    return (
        <div className="bg-gradient-to-r from-blue-800 to-purple-600 min-h-screen text-white">
            <div className="max-w-7xl mx-auto py-20 px-6 sm:px-12">
                <div className="text-center space-y-6">
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                        About <span className="text-yellow-400">Bitlinks</span>
                    </h1>
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                        Welcome to Bitlinks, the premium URL shortener that transforms long, cumbersome URLs into
                        short, shareable, and easy-to-remember links. Whether you&apos;re a business looking to track your
                        marketing campaigns or an individual looking to share a quick link, Bitlinks offers an elegant
                        solution.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">What is Bitlinks?</h2>
                        <p className="text-lg">
                            Bitlinks is a state-of-the-art URL shortener designed for both businesses and individuals
                            who need reliable, fast, and professional link management. With Bitlinks, you can track,
                            shorten, and manage your links with ease.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Why Choose Bitlinks?</h2>
                        <ul className="space-y-3 text-lg">
                            <li>🌟 Easy-to-use interface for generating and sharing short URLs.</li>
                            <li>📊 Link analytics to track click-through rates and usage patterns.</li>
                            <li>🔒 Secure, reliable, and fast link redirection technology.</li>
                            <li>🛠️ Customizable short links for personalized branding.</li>
                            <li>⚡ Instant link shortening with no delays or loading times.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Get Started with Bitlinks</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-6">
                        Start shortening your URLs today and experience the power of quick, easy, and trackable
                        links. No sign-up required, just paste and shorten!
                    </p>
                    <Link href="/sorten" className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-500 transition">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}
