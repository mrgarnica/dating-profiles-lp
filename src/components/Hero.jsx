import SearchForm from './SearchForm'

const DATING_LOGOS = [
  { src: '/assets/569845a0ad6b2d91df17c19a507f6c07da6494e0.svg', alt: 'Instagram',  cls: 'max-w-[24px]' },
  { src: '/assets/b6b65419e18d710d7a53f57fb0ef318822bbda00.svg', alt: 'Twitter/X',  cls: 'max-w-[24px]' },
  { src: '/assets/facebook-dating.svg',                          alt: 'Facebook',   cls: 'max-w-[24px]' },
  { src: '/assets/18e9e1bbe6831a570137d6c859a53335ccca1088.svg', alt: 'Tinder',     cls: 'max-w-[101px]' },
  { src: '/assets/match-dating.svg',                             alt: 'Match.com',  cls: 'max-w-[94px]' },
  { src: '/assets/cefd729d297e431053d442d08c3a0a98891fe245.svg', alt: 'OKCupid',    cls: 'max-w-[77px]' },
]

// Full text logos — shown at ≥799px
const MEDIA_LOGOS = [
  { src: '/assets/5ec248a8762db5373ba37b0b5ccf510ffabee4a3.svg', alt: 'CBS',               w: 84,  h: 24 },
  { src: '/assets/86b6970036f563dac27351b8435f4af536ce22a0.svg', alt: 'ABC',               w: 24,  h: 24 },
  { src: '/assets/8d9ba21c648ad15bd68bd07a75ed407616c877f1.svg', alt: 'The New York Times', w: 183, h: 24 },
  { src: '/assets/fe66177eee4f67b6923b740dc3d16acbc1be6172.svg', alt: 'Fox News',           w: 24,  h: 24 },
  { src: '/assets/d8fa6a23561605d20cd9d8e08a50b37d32b89893.svg', alt: 'CNBC',              w: 124, h: 16 },
  { src: '/assets/1fa3030787b1c998df303410d6970f9b635cac65.svg', alt: 'WSJ',               w: 41,  h: 24 },
  { src: '/assets/ff444e8fcbd3b36d1c95b99fa0f604893277f7a2.svg', alt: 'MTV',               w: 31,  h: 16 },
]

// Icon-only logos — shown below 799px (375px + 600-799px breakpoints)
const MEDIA_LOGOS_ICON = [
  { src: '/assets/cbs-icon.svg',  alt: 'CBS',               w: 32, h: 32 },
  { src: '/assets/abc-icon.svg',  alt: 'ABC',               w: 32, h: 32 },
  { src: '/assets/nyt-icon.svg',  alt: 'The New York Times', w: 31, h: 32 },
  { src: '/assets/fox-icon.svg',  alt: 'Fox News',           w: 32, h: 32 },
  { src: '/assets/cnbc-icon.svg', alt: 'CNBC',              w: 50, h: 32 },
  { src: '/assets/wsj-icon.svg',  alt: 'WSJ',               w: 51, h: 32 },
]

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px-44px)] flex items-center justify-center px-5 py-10 bp-599:px-8 bp-599:py-12 bp-799:py-[60px] overflow-hidden">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(172.394deg, #f3fbff 11.552%, #f4fbff 87.994%)' }} />
        <div className="absolute top-[-158px] right-[14px] w-[398px] h-[395px]">
          <img className="w-full h-full" src="/assets/0d4263c7e87f69459b7ab76e7f1a23e6d2462d38.svg" alt="" />
        </div>
        <div className="absolute top-[114px] left-[-77px] w-[332px] h-[330px] rotate-180">
          <img className="w-full h-full" src="/assets/7d21eda7ffabe90121de458527fafc906c554a27.svg" alt="" />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(233,252,249,0) 50%, #ffffff 100%)' }} />
      </div>

      {/* ── Animated blobs ── */}
      <div
        className="absolute w-[300px] h-[300px] top-1/2 left-[calc(50%-75px)] z-[1] pointer-events-none overflow-visible"
        style={{ animation: 'floatTeal 10s ease-in-out infinite' }}
        aria-hidden="true"
      >
        <img className="absolute inset-[-50%] w-[200%] h-[200%]" src="/assets/7b8051089afa2217e25a78f07346b9e197595db5.svg" alt="" />
      </div>
      <div
        className="absolute w-[300px] h-[300px] top-1/2 left-[calc(50%+75px)] z-[1] pointer-events-none overflow-visible"
        style={{ animation: 'floatMagenta 10s ease-in-out infinite', animationDelay: '-3s' }}
        aria-hidden="true"
      >
        <img className="absolute inset-[-50%] w-[200%] h-[200%]" src="/assets/c24d41cd1c65266fada9786aa0dd3a7f72234b5a.svg" alt="" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-[2] flex flex-col gap-10 bp-599:gap-12 bp-799:gap-20 items-center w-full max-w-[800px]">

        <div className="flex flex-col gap-8 bp-799:gap-10 items-center w-full z-[2]">

          {/* Hero title: smaller ≤599px, full size ≥600px */}
          <h1 className="font-inter font-bold text-display-md bp-599:text-display-xl text-primary text-center w-full">
            Uncover Dating Profiles &amp; Online History
          </h1>

          {/* Dating site social proof */}
          <div className="flex flex-col gap-2 items-center w-full z-[3]">
            <p className="font-helvetica text-body-md text-primary text-center">We scan these sites for cheaters*</p>

            {/* Marquee logos */}
            <div
              className="overflow-hidden max-w-[699px] w-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)',
              }}
            >
              <div
                className="flex items-center gap-12 w-max"
                style={{ animation: 'marquee 40s linear infinite' }}
              >
                {[...DATING_LOGOS, ...DATING_LOGOS].map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt={i < DATING_LOGOS.length ? logo.alt : ''}
                    aria-hidden={i >= DATING_LOGOS.length || undefined}
                    className={`h-6 w-auto object-contain flex-shrink-0 ${logo.cls}`}
                  />
                ))}
              </div>
            </div>

            <p className="font-helvetica italic text-body-xs text-secondary text-center">
              *Spokeo scans many dating &amp; social platforms but does not guarantee coverage of all sites.
            </p>
          </div>

          <SearchForm />
        </div>

        {/* Media social proof */}
        <div className="flex flex-col gap-3 items-center w-full z-[1]">
          <p className="font-helvetica font-bold text-body-xs text-grey-600 text-center uppercase tracking-wider">
            Spokeo has been featured on
          </p>
          {/* Full text logos — ≥799px only */}
          <div className="hidden bp-799:flex flex-wrap items-center justify-between gap-y-4 w-full">
            {MEDIA_LOGOS.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} width={logo.w} height={logo.h}
                style={{ width: logo.w, height: logo.h, display: 'block', flexShrink: 0 }} />
            ))}
          </div>

          {/* Icon logos — below 799px (375px + 600-799px), hugged + 20px gap */}
          <div className="flex bp-799:hidden items-center gap-5 justify-center">
            {MEDIA_LOGOS_ICON.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} width={logo.w} height={logo.h}
                style={{ width: logo.w, height: logo.h, display: 'block', flexShrink: 0 }} />
            ))}
          </div>
          <p className="font-helvetica italic text-body-xs text-secondary text-center w-full">
            *Reference to media doesn&apos;t imply endorsement of Spokeo or its products.
          </p>
        </div>

      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes floatTeal {
          0%   { transform: translate(-50%,-50%) translate(0px,0px); }
          20%  { transform: translate(-50%,-50%) translate(60px,-40px); }
          40%  { transform: translate(-50%,-50%) translate(140px,20px); }
          60%  { transform: translate(-50%,-50%) translate(100px,60px); }
          80%  { transform: translate(-50%,-50%) translate(-20px,30px); }
          100% { transform: translate(-50%,-50%) translate(0px,0px); }
        }
        @keyframes floatMagenta {
          0%   { transform: translate(-50%,-50%) translate(0px,0px); }
          20%  { transform: translate(-50%,-50%) translate(-50px,50px); }
          40%  { transform: translate(-50%,-50%) translate(-140px,-10px); }
          60%  { transform: translate(-50%,-50%) translate(-80px,-60px); }
          80%  { transform: translate(-50%,-50%) translate(30px,-30px); }
          100% { transform: translate(-50%,-50%) translate(0px,0px); }
        }
      `}</style>
    </section>
  )
}
