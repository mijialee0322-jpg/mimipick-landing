
import MimiPickLanding from "../components/MimiPickLanding";

export default function Page() {
  return <MimiPickLanding />;
}
"use client";
import Link from "next/link";

export default function EssentialsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F4EF", padding: 40 }}>
      <h1>Essentials 4</h1>
      <ul>
        <li>Choose enough</li>
        <li>Enough to choose</li>
        
        <li>Live with enough</li>
      </ul>
      <p style={{ marginTop: 24 }}>
        <Link href="/">Back</Link>
      </p>
    </div>
  );
}
