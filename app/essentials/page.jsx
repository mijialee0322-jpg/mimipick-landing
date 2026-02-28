"use client";

import Link from "next/link";

export default function EssentialsPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#F6F4EF",
      padding: "40px",
      textAlign: "center"
    }}>
      <h1>Essentials 4</h1>

      <ul style={{ marginTop: 20, lineHeight: "2" }}>
        <li>Choose enough</li>
        <li>Enough to choose</li>
        <li>Live with enough</li>
      </ul>

      <p style={{ marginTop: 40 }}>
        <Link href="/">← Back</Link>
      </p>
    </div>
  );
}
