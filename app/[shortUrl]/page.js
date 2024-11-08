import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const { shortUrl } = await params;

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shortUrl });

    if (doc && doc.url) {
        // Redirect to the original URL if the document exists
        redirect(doc.url);
    } else {
        // Redirect to the fallback URL if the document is not found
        const fallbackUrl = process.env.NEXT_PUBLIC_HOST || "/";
        redirect(fallbackUrl);
    }

    // This return will never be reached due to redirects, but left for completeness.
    return <div>Redirecting...</div>;
}
