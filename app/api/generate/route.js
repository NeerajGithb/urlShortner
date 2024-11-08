import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        // Correct way to get the JSON body in Next.js App Router
        const body = await request.json();

        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        const doc = await collection.findOne({ shortUrl: body.shortUrl });
        if (doc) {
            return new Response(JSON.stringify({
                success: false,
                error: true,
                message: "URL already exists",
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const result = await collection.insertOne({
            url: body.url, 
            shortUrl: body.shortUrl
        });

        return new Response(JSON.stringify({
            success: true,
            error: false,
            message: "URL generated successfully",
            insertedId: result.insertedId
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Error inserting URL:", error);
        return new Response(JSON.stringify({
            success: false,
            error: true,
            message: "Failed to generate URL",
            details: error.message
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
