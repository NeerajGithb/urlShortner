import clientPromise from "@/lib/mongodb";

export async function DELETE(request) {
    try {
        const { shortUrl } = await request.json(); // Get shortUrl from the request body

        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        // Find the URL document to delete by shortUrl
        const result = await collection.deleteOne({ shortUrl });

        if (result.deletedCount === 0) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "URL not found",
                }),
                { status: 404 }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "URL deleted successfully",
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting URL:", error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Failed to delete URL",
                details: error.message,
            }),
            { status: 500 }
        );
    }
}
