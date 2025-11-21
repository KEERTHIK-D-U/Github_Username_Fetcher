import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../components/searchBar";
import UserCard from "../components/userCard";
import Loading from "../components/loading";
import { fetchGitHubUser } from "../api";

export default function Home() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // store last successful username for simple caching
  const cache = useRef(new Map());

  // abort controller ref to cancel previous fetches
  const abortRef = useRef(null);

const handleSearch = async () => {
  const username = query.trim();
  if (!username) return;

  setLoading(true);
  setError("");
  setUser(null);

  try {
    const data = await fetchGitHubUser(username);
    setUser(data);
  } catch (err) {
    setError(err.message);
  }

  setLoading(false);
};


  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>GitHub User Finder</h1>
      <SearchBar
        value={query}
        onChange={setQuery}
        onSubmit={handleSearch}
        disabled={loading}
      />

      <div style={{ marginTop: 20 }}>
        {loading && <Loading />}
        {error && <div style={{ color: "crimson" }}>{error}</div>}
        {!loading && !error && !user && <div>Search for a GitHub user above.</div>}
        {user && <UserCard user={user} />}
      </div>
    </div>
  );
}
