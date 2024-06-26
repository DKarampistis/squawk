// lib/fetchHuggingFace.ts

const HUGGING_FACE_API = process.env.NEXT_PUBLIC_HUGGING_FACE_API;

export async function query(data: any) {
    const requestOptions = {
        headers: { 
            Authorization: `Bearer ${HUGGING_FACE_API}`,
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data),
    };

    console.log("Request Options:", requestOptions);  // Print the request options

    try {
        const response = await fetch("https://api-inference.huggingface.co/models/gpt2", requestOptions);
        const responseBody = await response.text();
        console.log("Response Body:", responseBody);  // Log the raw response body
        const result = JSON.parse(responseBody);  // Parse the JSON response
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
