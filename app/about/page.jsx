"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const brandGreen = "#2F4F3F";

export default function AboutPage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#2F4F3F] px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">

        {/* Back */}
        <Link
          href="/"
          className="text-sm opacity-50 hover:opacity-100 transition"
        >
          ← Back
        </Link>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Mimi Pick is enough.
          </h1>

          <p className="mt-6 text-lg leading-relaxed opacity-80">
            최소한의 선택으로 충분한 삶을 돕는 큐레이션 브랜드
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-70">
            우리는 더 많은 선택을 제안하지 않습니다.
            <br />
            하나의 충분한 선택을 제안합니다.
          </p>

          <p className="mt-6 text-sm leading-relaxed opacity-60">
            We don’t propose more choices.
            <br />
            We offer one sufficient choice.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#2F4F3F]/20 w-20 mx-auto" />

        {/* Navigation */}
        <div className="mt-10 text-sm opacity-70">
          <Link
            href="/essentials"
            className="hover:opacity-100 transition"
          >
            Essentials 5 →
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-16 text-xs opacity-40">
          © {year} Mimi Pick.
        </p>

      </div>
    </div>
  );
}
