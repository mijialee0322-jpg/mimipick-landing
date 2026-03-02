"use client";

import React, { useEffect, useMemo, useState } from "react";
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

// 라벨 좌표(모바일에서도 보기 좋게 이미 살짝 바깥으로 조정)
const labels = [
  { kr: "충분성", en: "Sufficiency", x: 150, y: 22, anchor: "middle" },
  { kr: "지속성", en: "Longevity", x: 278, y: 120, anchor: "middle" }, // ✅ Longevity 전체
  { kr: "신뢰성", en: "Trustworthiness", x: 220, y: 272, anchor: "middle" },
  { kr: "책임성", en: "Responsibility", x: 80, y: 272, anchor: "middle" },
  { kr: "절제성", en: "Restraint", x: 22, y: 120, anchor: "middle" },
];

function pointsToString(pts) {
  return pts.map(([x, y]) => `${x},${y}`).join(" ");
}

export default function EssentialsPage() {
  const year = new Date().getFullYear();
  const polygonPoints = useMemo(() => pointsToString(PTS), []);

  // ✅ 모바일에서만 오각형(선) 살짝 축소하기 위한 상태
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 420px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  // ✅ 핵심: 라벨은 그대로 두고, 오각형만 살짝 줄여서 간격 확보
  const polygonScale = isMobile ? 0.84 : 0.92; // 모바일 더 작게

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#2F4F3F] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Back */}
        <div className="text-center">
          <Link
            href="/about"
            className="text-sm opacity-50 hover:opacity-100 transition"
          >
            ← Back
          </Link>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10"
        >
          {/* ✅ 모바일 자간 고급스럽게 */}
          <p className="text-[12px] sm:text-sm tracking-[0.55em] sm:tracking-[0.45em] opacity-60">
            미미픽 제품 선정 기준
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            5 Principles of Enough
          </h1>
        </motion.div>

        {/* Pentagon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-14 flex justify-center"
        >
          {/* ✅ 모바일에서 SVG 자체도 약간 작게 */}
          <svg
            width={isMobile ? 280 : 300}
            height={isMobile ? 280 : 300}
            viewBox="0 0 300 300"
          >
            {/* ✅ 오각형(선)만 축소: 라벨과 간격이 자동으로 생김 */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              transform={`translate(150 150) scale(${polygonScale}) translate(-150 -150)`}
            >
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
            </motion.g>

            {/* Center */}
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

              {/* ✅ 문구 개선: '기준으로 고르다' → '기준으로 선택하다' */}
              <text
                x="150"
                y="172"
                textAnchor="middle"
                fontSize="12"
                fill={brandGreen}
                opacity="0.7"
              >
                기준으로 선택하다
              </text>
            </motion.g>

            {/* Labels */}
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

        {/* Bottom copy */}
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
