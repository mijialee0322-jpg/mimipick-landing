"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const title = "MIMI PICK";
const subtitle = "The Perfect Pick is Coming";
const brandGreen = "#2F4F3F";

function getHoldTimes(durationSeconds, holdSeconds) {
  const t1 = 0.28;
  const t2 = t1 + holdSeconds / durationSeconds;
  return { t1, t2 };
}

export default function MimiPickLanding() {
  const year = new Date().getFullYear();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const duration = 2.6;
  const { t1, t2 } = getHoldTimes(duration, 0.5);

  return (
    <div className="min-h-[100svh] bg-[#F6F4EF] flex justify-center overflow-hidden">
      <div className="w-full max-w-[393px] min-h-[100svh] flex flex-col bg-[#F6F4EF]">
        <main className="flex-1 flex flex-col items-center text-center px-6">
          <div className="h-[max(18px,env(safe-area-inset-top))]" />

          {/* 상단 mimi pick 로고 */}
          <motion.svg
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewBox="0 0 500 420"
            className="mt-4 mb-6 w-[118px] h-auto"
            aria-label="mimi pick logo"
            role="img"
          >
            <text
              x="70"
              y="155"
              fontSize="140"
              fontWeight="800"
              fill={brandGreen}
              fontFamily="ui-rounded, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
              letterSpacing="-2"
            >
              mimi
            </text>

            <text
              x="70"
              y="315"
              fontSize="170"
              fontWeight="800"
              fill={brandGreen}
              fontFamily="ui-rounded, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
              letterSpacing="-2"
            >
              pick
            </text>

            <circle cx="285" cy="350" r="8" fill={brandGreen} />
            <circle cx="320" cy="350" r="8" fill={brandGreen} />
            <path
              d="M260 370 Q302 405 345 370"
              fill="none"
              stroke={brandGreen}
              strokeWidth="14"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* 타이틀 */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center"
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterAnimation}
                className="mx-[3px] text-[38px] leading-[1] font-extrabold tracking-[0.06em]"
                style={{ color: brandGreen }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-3 text-[15px] tracking-[0.32em] font-medium"
            style={{ color: brandGreen }}
          >
            for SDGs
          </motion.p>

          {/* 서브타이틀 반복 애니 */}
          <div className="flex-1 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
              transition={{
                duration,
                times: [0, t1, t2, 1],
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <p className="text-[18px] leading-snug font-light tracking-wide text-gray-800">
                {subtitle}
              </p>
            </motion.div>
          </div>

      {/* ✅ 드로잉 스마일 버튼 */}
<div className="mt-10 flex justify-center">
  <Link href="/about" aria-label="Go to brand story">
    <motion.div
      className="h-[64px] w-[64px] rounded-full flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <motion.svg width="64" height="64" viewBox="0 0 72 72" fill="none">
        <motion.circle
          cx="36"
          cy="36"
          r="26"
          stroke={brandGreen}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="30"
          cy="34"
          r="2"
          fill={brandGreen}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 2.0,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <motion.circle
          cx="42"
          cy="34"
          r="2"
          fill={brandGreen}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 2.0,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <motion.path
          d="M28 41 Q36 48 44 41"
          stroke={brandGreen}
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 2.0,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.55,
          }}
        />
      </motion.svg>
    </motion.div>
  </Link>
</div>

          <div className="h-3" />        
          <div className="h-3" />
        </main>

        <footer
          style={{
            backgroundColor: brandGreen,
            paddingBottom: "calc(18px + env(safe-area-inset-bottom))",
          }}
          className="text-white text-center pt-6"
        >
          <p className="text-[15px] font-semibold tracking-wide">Mimi Pick</p>

          <p className="text-[13px] mt-2 opacity-80 tracking-wide">
            In Pursuit of Timeless Value.
          </p>

          <p className="text-[13px] mt-2 opacity-80 tracking-wide">
            © {year} Mimi Pick. All Rights Reserved. | Since 2025
          </p>
        </footer>
      </div>
    </div>
  );
}
