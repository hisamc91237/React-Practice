export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const url = new URL(req.url);
  const path = url.searchParams.get("path");

  if (!path) {
    return new Response(JSON.stringify({ error: "Path is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const TMDB_KEY = process.env.TMDB_KEY;

  if (!TMDB_KEY) {
    return new Response(JSON.stringify({ error: "TMDB_KEY missing" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const tmdbUrl = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(tmdbUrl, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_KEY.trim()}`,
      },
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to connect to TMDB" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
