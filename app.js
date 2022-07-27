import fetch from 'node-fetch';

export default async function handler(request, response) {
  const res = await fetch('https://dynaguys-git-feature-lyriclogic-totoero.vercel.app/', {
    method: 'POST',
    body: JSON.stringify({
      client_id: process.env.spotify_API,
      client_secret: process.env.musix_API,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();
  console.log(response)
  return response.status(200).json({ data });
}