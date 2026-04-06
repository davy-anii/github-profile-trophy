export default async function handler(req, res) {
  const username = req.query.username || "davy-anii";

  const url = `https://github-profile-trophy.vercel.app/?username=${username}`;

  const response = await fetch(url);
  const svg = await response.text();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}