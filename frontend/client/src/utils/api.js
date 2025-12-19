export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5173";

export async function apiRequest(url, options) {
  const res = await fetch(API_BASE + url, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
}
