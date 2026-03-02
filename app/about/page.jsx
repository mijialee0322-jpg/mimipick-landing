"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const brandGreen = "#2F4F3F";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#2F4F3F] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-semibold tracking-tight"
        >
          Mimi Pick is enough.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="mt-10 text-xl sm:text-2xl leading-relaxed"
        >
          최소한의 선택으로 충분한 삶을 돕는 큐레이션 브랜드
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
          className="mt-4 text-xl sm:text-2xl leading-relaxed"
        >
          덜 소비하고 더 만족하는 삶을 위한 선택 mimi pick.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
          className="mt-10 text-sm sm:text-base opacity-70 leading-relaxed"
        >
          우리는 더 많은 선택을 제안하지 않습니다. 미미픽은 과잉 소비를 줄이고
          지속가능한 삶을 돕기 위해 하나의 제품으로 충분한 선택을 제안합니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.32 }}
          className="mt-6 text-sm sm:text-base opacity-60 leading-relaxed"
        >
          We don’t propose more choices. Mimi Pick reduces overconsumption and
          supports sustainable living by offering one sufficient choice — enough
          with a single product.
        </motion.p>

        <div className="mt-14 mx-auto h-px w-28 bg-[#2F4F3F]/20" />

        {/* Navigation */}
        <div className="mt-10 flex justify-center gap-10 text-sm opacity-70">
          <Link href="/" className="hover:opacity-100 transition">
            ← Back
          </Link>

          <Link href="/essentials" className="hover:opacity-100 transition">
            Essentials 5 →
          </Link>
        </div>
      </div>
    </div>
  );
}
