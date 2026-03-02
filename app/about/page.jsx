export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#2F4F3F] px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Mimi Pick is enough.
        </h1>

        <p className="mt-10 text-xl sm:text-2xl leading-relaxed">
          최소한의 선택으로 충분한 삶을 돕는 큐레이션 브랜드
        </p>

        <p className="mt-4 text-xl sm:text-2xl leading-relaxed">
          덜 소비하고 더 만족하는 삶을 위한 선택 mimi pick.
        </p>

        <p className="mt-10 text-sm sm:text-base opacity-75 leading-relaxed">
          우리는 더 많은 선택을 제안하지 않습니다. 미미픽은 과잉 소비를 줄이고
          지속가능한 삶을 돕기 위해 하나의 제품으로 충분한 선택을 제안합니다.
        </p>

        <p className="mt-4 text-sm sm:text-base opacity-70 leading-relaxed">
          We don’t propose more choices. Mimi Pick reduces overconsumption and
          supports sustainable living by offering one sufficient choice — enough
          with a single product.
        </p>

        <div className="mt-14 mx-auto h-px w-24 bg-[#2F4F3F]/20" />

        <div className="mt-10 flex items-center justify-center gap-6">
          <a href="/" className="text-sm opacity-60 hover:opacity-90 transition">
            ← Back
          </a>

          <a
            href="/essentials"
            className="text-sm opacity-80 hover:opacity-100 transition"
          >
            Essentials 5 →
          </a>
        </div>
      </div>
    </div>
  );
}
<div className="mt-16 text-center">
  <Link
    href="/essentials"
    className="text-[#2F4F3F] opacity-70 hover:opacity-100 transition"
  >
    Essentials 5 →
  </Link>
</div>
