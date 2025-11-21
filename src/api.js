// api.js
export async function fetchGitHubUser(username) {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}`;

  const res = await fetch(url);

  if (!res.ok) {
    if (res.status === 404) throw new Error("User not found");
    throw new Error("Failed to fetch user");
  }

  return res.json();
}
