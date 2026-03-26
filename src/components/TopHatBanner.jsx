const MESSAGES = [
  <><span>🔎 </span><span className="font-normal">Find dating profiles across </span><strong>100+ dating sites</strong></>,
  <><span>🤫 </span><span className="font-normal">Discover social media accounts </span><strong>you may not know about</strong></>,
  <><span>📸 </span><span className="font-normal">View </span><strong>photos connected to their profiles</strong></>,
  <><span>💔 </span><span className="font-normal">Check whether they're </span><strong>active on dating apps</strong></>,
  <><span>🌐 </span><span className="font-normal">Search </span><strong>Facebook, Instagram, and more</strong></>,
]

export default function TopHatBanner() {
  return (
    <div className="h-11 flex items-center justify-center border-b-2 border-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(164,245,230,0.35) 0%, rgba(230,130,240,0.25) 18.383%, rgba(255,255,255,0.7) 28.987%, rgba(51,146,255,0.3) 100%), linear-gradient(90deg, #fff 0%, #fff 100%)`
      }}>
      <div className="relative h-5 flex items-center justify-center min-w-[300px]" aria-live="polite">
        {MESSAGES.map((msg, i) => (
          <span
            key={i}
            className="absolute font-helvetica text-body-sm text-primary text-center whitespace-nowrap font-bold"
            style={{
              opacity: 0,
              animation: `bannerSlot 15s ease-in-out infinite`,
              animationDelay: `${i * 3}s`,
            }}
          >
            {msg}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes bannerSlot {
          0%   { opacity: 0; transform: translateY(6px); }
          5%   { opacity: 1; transform: translateY(0); }
          15%  { opacity: 1; transform: translateY(0); }
          20%  { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
      `}</style>
    </div>
  )
}
