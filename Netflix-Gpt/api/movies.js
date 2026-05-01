export default async function handler(req, res) {
  // Extract path accurately even if it contains nested '?' characters
  const fullUrl = req.url || "";
  const pathMatch = fullUrl.match(/path=([^&]*)/);
  let path = pathMatch ? decodeURIComponent(pathMatch[1]) : null;
  
  if (!path) {
    return res.status(400).json({ error: "Path is required" });
  }

  const TMDB_KEY = process.env.TMDB_KEY;

  if (!TMDB_KEY) {
    console.error("CRITICAL: TMDB_KEY is missing from environment variables.");
    return res.status(500).json({ error: "Server Configuration Error (Missing Keys)" });
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

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("TMDB Proxy Error:", error.message);
    res.status(500).json({ error: "Failed to connect to TMDB" });
  }
}
