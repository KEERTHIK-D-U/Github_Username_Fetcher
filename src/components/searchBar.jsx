import React from "react";

export default function SearchBar({ value, onChange, onSubmit, disabled }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      style={{ display: "flex", gap: 8 }}
    >
      <input
        aria-label="GitHub username"
        placeholder="Enter GitHub username (e.g. gaearon)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        style={{ padding: "8px 12px", flex: 1 }}
      />
      <button type="submit" disabled={disabled || !value.trim()}>
        Search
      </button>
    </form>
  );
}
