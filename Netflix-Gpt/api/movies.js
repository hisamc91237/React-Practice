export default async function handler(req, res) {
  const { path } = req.query;
  
  if (!path) {
    return res.status(400).json({ error: "Path is required" });
  }

  const TMDB_KEY = process.env.TMDB_KEY;

  if (!TMDB_KEY) {
    return res.status(500).json({ error: "TMDB_KEY not configured on server" });
  }

  try {
    const response = await fetch(`https://api.themoviedb.org/3${path}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_KEY}`,
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from TMDB" });
  }
}
