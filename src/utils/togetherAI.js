import axios from "axios";

const TOGETHER_API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovieRecommendations = async (userQuery) => {
  const prompt = `You are a Bollywood movie recommendation engine. Based on the user's request: "${userQuery}", suggest 5 relevant Indian movies only by name. 
Return the names **only**, comma-separated in one line.
Do not explain or add any extra text. Example format: Movie1, Movie2, Movie3, Movie4, Movie5.`;

  try {
    const response = await axios.post(
      "https://api.together.xyz/v1/chat/completions",
      {
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${TOGETHER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content = response?.data?.choices?.[0]?.message?.content;

    if (!content) throw new Error("No content returned");

    return content.trim();
  } catch (error) {
    console.error("AI Error:", error.message);
    return "Sorry, something went wrong while fetching recommendations.";
  }
};
