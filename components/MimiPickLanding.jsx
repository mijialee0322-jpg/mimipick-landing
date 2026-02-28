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

          <motion.svg
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewBox="0 0 500 420"
            className="mt-4 mb-14 w-[118px] h-auto"
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

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-6 flex flex-wrap justify-center"
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
            className="mt-4 text-[20px] tracking-[0.32em] font-medium"
            style={{ color: brandGreen }}
          >
            for SDGs
          </motion.p>

          {/* ✅ Coming 문구: 중앙 고정 대신 여백으로 배치 */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
            transition={{
              duration,
              times: [0, t1, t2, 1],
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <p className="text-[18px] leading-snug font-semibold tracking-wide text-gray-800">
              {subtitle}
            </p>
          </motion.div>

          {/* ✅ 원형 스마일 버튼: Coming 바로 아래 */}
          <div className="mt-10 flex justify-center">
            <Link href="/essentials" aria-label="Go to essentials">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="h-[60px] w-[60px] rounded-full border border-[#2F4F3F] flex items-center justify-center cursor-pointer"
              >
                <svg width="28" height="28" viewBox="0 0 48 48">
                  <circle cx="18" cy="20" r="2" fill="#2F4F3F" />
                  <circle cx="30" cy="20" r="2" fill="#2F4F3F" />
                  <path
                    d="M14 28 Q24 36 34 28"
                    stroke="#2F4F3F"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </Link>
          </div>

          <div className="h-6" />
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
