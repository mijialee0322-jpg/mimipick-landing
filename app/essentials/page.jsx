"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Sufficiency",
    subtitle: "충분성",
    descEn:
      "Is this product truly enough — not better, not more, but sufficient?",
    descKr: "이 제품은 ‘더 나은 것’이 아니라 ‘이것이면 충분한가?’",
  },
  {
    title: "Longevity",
    subtitle: "지속성",
    descEn: "Can it be used for a long time?",
    descKr: "오래 쓸 수 있는가?",
  },
  {
    title: "Restraint",
    subtitle: "절제성",
    descEn: "Have unnecessary elements been removed?",
    descKr: "불필요한 요소가 제거되었는가?",
  },
  {
    title: "Responsibility",
    subtitle: "책임성",
    descEn: "Does it reduce burden on the environment and society?",
    descKr: "환경과 사회에 부담을 덜 주는가?",
  },
  {
    title: "Trustworthiness",
    subtitle: "신뢰성",
    descEn: "Was it chosen by standards — not by brand?",
    descKr: "브랜드가 아닌 기준으로 선택되었는가?",
  },
];

export default function PrinciplesPage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F6F4EF] px-6 py-20 text-[#2F4F3F]">
      {/* ✅ Top small smile (link back to home) */}
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center">
          <Link href="/" aria-label="Back to home">
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer select-none"
              title="Back to home"
            >
              <SmileMark />
            </motion.div>
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="text-center mt-10"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
           5 essentials
          </h1>
          <p className="mt-5 text-lg opacity-70">
            We choose not by trends, but by principles.
          </p>

          <div className="mt-10 mx-auto h-px w-28 bg-[#2F4F3F]/20" />
        </motion.div>

        {/* Principles: scroll reveal, stagger feel */}
        <div className="mt-16 space-y-14">
          {principles.map((p, idx) => (
            <PrincipleCard key={p.title} p={p} index={idx} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
          className="text-center mt-20"
        >
          <p className="text-xl sm:text-2xl leading-relaxed">
            We don’t select more.
            <br />
            We select enough.
          </p>
          <p className="mt-6 text-sm opacity-60">© {year} Mimi Pick.</p>
        </motion.div>
      </div>
    </div>
  );
}

function PrincipleCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: Math.min(index * 0.08, 0.32),
      }}
      className="text-center"
    >
      <div className="inline-flex items-baseline gap-3">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
          {p.title}
        </h2>
        <span className="text-sm opacity-60">{p.subtitle}</span>
      </div>

      <p className="mt-4 text-base sm:text-lg opacity-75 leading-relaxed">
        {p.descEn}
      </p>
      <p className="mt-2 text-base sm:text-lg leading-relaxed">{p.descKr}</p>

      <div className="mt-10 mx-auto h-px w-12 bg-[#2F4F3F]/18" />
    </motion.div>
  );
}

/**
 * ✅ Small smile mark (inline SVG)
 * - keeps the brand connection
 * - uses currentColor (inherits #2F4F3F from parent)
 */
function SmileMark() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-90"
      style={{ color: "#2F4F3F" }}
    >
      {/* circle */}
      <circle
        cx="60"
        cy="60"
        r="45"
        stroke="currentColor"
        strokeWidth="6"
        opacity="0.9"
      />
      {/* eyes */}
      <circle cx="45" cy="52" r="4.8" fill="currentColor" />
      <circle cx="75" cy="52" r="4.8" fill="currentColor" />
      {/* smile */}
      <path
        d="M40 70 C50 85, 70 85, 80 70"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
    </svg>
  );
}
