import React from "react";

export default function UserCard({ user }) {
  if (!user) return null;

  return (
    <div style={{
      border: "1px solid #e2e8f0",
      borderRadius: 8,
      padding: 16,
      display: "flex",
      gap: 16,
      alignItems: "center",
      maxWidth: 720
    }}>
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        style={{ width: 96, height: 96, borderRadius: 8 }}
      />
      <div>
        <h3 style={{ margin: 0 }}>{user.name || user.login}</h3>
        <p style={{ margin: "6px 0", color: "#475569" }}>{user.bio}</p>
        <div style={{ display: "flex", gap: 12, color: "#334155", marginTop: 8 }}>
          <div>⭐ {user.public_repos} repos</div>
          <div>👥 {user.followers} followers</div>
          <div>📍 {user.location || "—"}</div>
        </div>
        <a href={user.html_url} target="_blank" rel="noreferrer" style={{ marginTop: 8, display: "inline-block" }}>
          View on GitHub ↗
        </a>
      </div>
    </div>
  );
}
