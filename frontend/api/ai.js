export async function askAI(question, model = "custom") {
    const response = await fetch("http://localhost:8000/api/ai", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, model }),
    });

    if (!response.ok) {
        throw new Error("AI request failed");
    }

    const data = await response.json();
    
    if (data.answer) {
        return data;
    } else if (data.response && data.response.answer) {
        return data.response;
    } else {
        throw new Error("Invalid response structure");
    }
}
