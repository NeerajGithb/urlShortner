import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        const existingUrl = await collection.findOne({ shortUrl: body.shortUrl });
        if (existingUrl) {
            return new Response(
                JSON.stringify({ success: false, message: "URL already exists" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const result = await collection.insertOne({ url: body.url, shortUrl: body.shortUrl });
        return new Response(
            JSON.stringify({ success: true, insertedId: result.insertedId }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, message: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
