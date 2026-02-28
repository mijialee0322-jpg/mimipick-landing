"use client";

import Link from "next/link";

export default function EssentialsPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#F6F4EF",
      padding: "48px 24px",
      textAlign: "center",
      color: "#2F4F3F",
      fontFamily: "ui-rounded, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
    }}>

      <p style={{ letterSpacing: "0.2em", fontSize: 12, opacity: 0.6 }}>
        MIMI PICK
      </p>

      <h1 style={{ marginTop: 16, fontSize: 28 }}>
        Essentials 4
      </h1>

      <p style={{ marginTop: 20, fontSize: 24, opacity: 1.3 }}>
       
        충분함을 선택하다 
        Choose enough
     
      </p>

      <div style={{ marginTop: 40, lineHeight: 2.4, fontSize: 17 }}>
        <p>단 하나의 주방 세제</p>
        <p>단 하나의 에코백</p>
        <p>단 하나의 기본 셔츠</p>
        <p>단 하나의 보관 용기</p>
      </div>

      <p style={{ marginTop: 60 }}>
        <Link href="/" style={{ opacity: 0.6 }}>
          ← Back
        </Link>
      </p>

    </div>
  );
}
