import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        const urls = await collection.find({}).toArray();
        return new Response(
            JSON.stringify({ success: true, data: urls }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, message: "Failed to fetch URLs" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
