const API_URL = "https://api.openai.com/v1/chat/completions";

export const generateAIResponse = async (userMessage: string) => {
  console.log("Generating AI response for:", userMessage);
  
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a knowledgeable travel assistant helping users plan their perfect trip. Provide personalized recommendations for destinations, accommodations, activities, and local experiences based on their preferences. Keep responses concise and focused on travel advice.",
          },
          { role: "user", content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate AI response");
    }

    const data = await response.json();
    console.log("AI response received:", data);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "I apologize, but I'm having trouble processing your request right now. Please try again in a moment.";
  }
};