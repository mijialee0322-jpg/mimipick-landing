"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const brandGreen = "#2F4F3F";

// 오각형 좌표 (300x300 뷰박스 기준)
const PTS = [
  [150, 32],  // top
  [262, 110], // right-top
  [220, 242], // right-bottom
  [80, 242],  // left-bottom
  [38, 110],  // left-top
];

const labels = [
  { kr: "충분성", en: "Sufficiency", x: 150, y: 18, anchor: "middle" },
  { kr: "지속성", en: "Longevity", x: 282, y: 118, anchor: "middle" },
  { kr: "신뢰성", en: "Trustworthiness", x: 220, y: 276, anchor: "middle" },
  { kr: "책임성", en: "Responsibility", x: 80, y: 276, anchor: "middle" },
  { kr: "절제성", en: "Restraint", x: 18, y: 118, anchor: "middle" },
];

function pointsToString(pts) {
  return pts.map(([x, y]) => `${x},${y}`).join(" ");
}

export default function EssentialsPage() {
  const year = new Date().getFullYear();
  const polygonPoints = pointsToString(PTS);

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#2F4F3F] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-center">
          <Link
            href="/about"
            className="text-sm opacity-60 hover:opacity-100 transition"
          >
            ← Back
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10"
        >
          <p className="text-sm tracking-[0.35em] opacity-60">
            미미픽 제품 선정 기준
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            5 Principles of Enough
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-14 flex justify-center"
        >
          <svg width="300" height="300" viewBox="0 0 300 300">
            <motion.polygon
              points={polygonPoints}
              fill="none"
              stroke={brandGreen}
              strokeWidth="2"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />

            <motion.g
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
            >
              <text
                x="150"
                y="150"
                textAnchor="middle"
                fontSize="18"
                fontWeight="700"
                fill={brandGreen}
              >
                ENOUGH
              </text>
              <text
                x="150"
                y="172"
                textAnchor="middle"
                fontSize="12"
                fill={brandGreen}
                opacity="0.7"
              >
                기준으로 고르다
              </text>
            </motion.g>

            {labels.map((l, i) => (
              <motion.g
                key={l.kr}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.25 + i * 0.08,
                }}
              >
                <text
                  x={l.x}
                  y={l.y}
                  textAnchor={l.anchor}
                  fontSize="14"
                  fontWeight="600"
                  fill={brandGreen}
                >
                  {l.kr}
                </text>
                <text
                  x={l.x}
                  y={l.y + 16}
                  textAnchor={l.anchor}
                  fontSize="11"
                  fill={brandGreen}
                  opacity="0.65"
                >
                  {l.en}
                </text>
              </motion.g>
            ))}
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-10"
        >
          <p className="text-lg leading-relaxed opacity-85">
            하나로 충분한 선택을 위해
            <br />
            다섯 가지 기준을 따릅니다.
          </p>

          <p className="mt-6 text-sm opacity-60 leading-relaxed">
            We don’t select more.
            <br />
            We select enough.
          </p>

          <p className="mt-14 text-xs opacity-40">© {year} Mimi Pick.</p>
        </motion.div>
      </div>
    </div>
  );
}
