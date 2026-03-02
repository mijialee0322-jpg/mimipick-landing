"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const brandGreen = "#2F4F3F";

// ✅ 오각형 좌표 (300x300 뷰박스 기준)
const PTS = [
  [150, 32],  // top
  [262, 110], // right-top
  [220, 242], // right-bottom
  [80, 242],  // left-bottom
  [38, 110],  // left-top
];

/**
 * ✅ 라벨 위치 미세 조정 (2~3px 수준)
 * - 화면에서 균형이 더 좋아보이도록
 * - 특히 오른쪽/왼쪽 라벨이 살짝 바깥으로 나가 보이던 부분 정리
 */
const labels = [
  // top (조금 아래로)
  { kr: "충분성", en: "Sufficiency", x: 150, y: 22, anchor: "middle" },

  // right-top (조금 왼쪽/아래로)
  { kr: "지속성", en: "Longevity", x: 278, y: 120, anchor: "middle" },

  // right-bottom (조금 위로)
  { kr: "신뢰성", en: "Trustworthiness", x: 220, y: 272, anchor: "middle" },

  // left-bottom (조금 위로)
  { kr: "책임성", en: "Responsibility", x: 80, y: 272, anchor: "middle" },

  // left-top (조금 오른쪽/아래로)
  { kr: "절제성", en: "Restraint", x: 22, y: 120, anchor: "middle" },
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
        {/* ✅ Back */}
        <div className="text-center">
          <Link
            href="/about"
            className="text-sm opacity-50 hover:opacity-100 transition"
          >
            ← Back
          </Link>
        </div>

        {/* ✅ Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10"
        >
          {/* ✅ 모바일 자간 고급스럽게: tracking-[0.55em], 크기 살짝 줄임 */}
          <p className="text-[12px] sm:text-sm tracking-[0.55em] sm:tracking-[0.45em] opacity-60">
            미미픽 제품 선정 기준
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            5 Principles of Enough
          </h1>
        </motion.div>

        {/* ✅ Pentagon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-14 flex justify-center"
        >
          <svg width="300" height="300" viewBox="0 0 300 300">
            {/* ✅ Draw line (조용하지만 확실하게) */}
            <motion.polygon
              points={polygonPoints}
              fill="none"
              stroke={brandGreen}
              strokeWidth="2"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />

            {/* ✅ Center */}
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
                선택의 기준
              </text>
            </motion.g>

            {/* ✅ Labels */}
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

        {/* ✅ Bottom copy */}
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
