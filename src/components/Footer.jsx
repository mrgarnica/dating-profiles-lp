const FOOTER_COLS = [
  { title: 'Spokeo',               links: ['People Search','Reverse Phone Lookup','Reverse Email Lookup','Reverse Address Lookup'] },
  { title: 'Spokeo for Business',  links: ['Business Home','Collections','Real Estate','Law Enforcement','API'] },
  { title: 'Help',                 links: ['Contact Us','Help Center','Terms','Privacy Policy','Do Not Sell My Info'] },
  { title: 'Company',              links: ['About','Careers','Affiliates','Blog','Product'] },
]

// w/h derived from each file's viewBox at a normalised 24px height
const SOCIAL = [
  { src: '/assets/7c02f2027a86defe375b015e7247a842e96b28eb.svg', label: 'TikTok',    w: 21, h: 24 }, // vb 13.72×16
  { src: '/assets/915f585f4dee5671f4228851852133cf89350f2e.png',  label: 'Instagram', w: 24, h: 24 }, // 36×36 PNG
  { src: '/assets/67a7bf41faa73933b78c3a4df6bb3e2c3d47b366.svg', label: 'Facebook',  w: 13, h: 24 }, // vb 9.61×18
  { src: '/assets/2ecafc33e521bf7eb3a80ca5a0e8d43ebdb7114f.svg', label: 'X',         w: 24, h: 24 }, // vb 16×16
  { src: '/assets/edbf0cb73731d8d952b4b57fa60079d5ffa45dac.svg', label: 'YouTube',   w: 34, h: 24 }, // vb 18×12.77
  { src: '/assets/405c07abfbe57cead2ce1ab4ee5597f2902bbda9.svg', label: 'LinkedIn',  w: 25, h: 24 }, // vb 16×15.15
]

const SEO_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function Footer() {
  return (
    <footer className="bg-white pt-[60px] px-8">

      {/* ── SEO row ── */}
      <div className="pb-12">
        <div className="flex flex-wrap items-center max-w-[1200px] mx-auto">
          <a href="#" className="font-helvetica text-body-sm text-primary py-[5px]">Email Lookup</a>
          <span className="font-helvetica text-body-sm text-primary w-[30px] text-center">|</span>
          <a href="#" className="font-helvetica text-body-sm text-primary py-[5px]">Phone Lookup Directory</a>
          <span className="font-helvetica text-body-sm text-primary w-[30px] text-center">|</span>
          <span className="font-helvetica text-body-sm text-primary py-[5px]">Name:</span>
          {SEO_LETTERS.map(l => (
            <a key={l} href="#" className="font-helvetica text-body-sm text-primary w-[30px] h-[30px] inline-flex items-center justify-center">
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-grey-300 max-w-[1200px] mx-auto" />

      {/* ── Footer body ── */}
      <div className="py-12">
        <div className="flex flex-col bp-1440:flex-row gap-6 items-start max-w-[1200px] mx-auto w-full">

          {/* Logo column */}
          <div className="flex-shrink-0 flex flex-col gap-4 max-w-[220px]">
            <a href="#" className="inline-flex items-center" aria-label="Spokeo">
              <div className="flex items-center gap-1">
                <img className="w-7 h-7 object-contain flex-shrink-0" src="/assets/bbf8485e68fe4cab3284cc894902526e67d73883.svg" alt="" />
                <img className="h-4 w-auto max-w-[90px] object-contain" src="/assets/d6850aeff9144f7131190ee21b1b3b7f5e1a06ae.svg" alt="Spokeo" />
              </div>
            </a>
          </div>

          {/* Link columns — 2-col grid on mobile, 4-col row on desktop */}
          <div className="grid grid-cols-2 bp-1440:flex bp-1440:flex-row gap-6 flex-1 w-full">
            {FOOTER_COLS.map(col => (
              <div key={col.title} className="flex flex-col gap-4 min-w-[140px]">
                <h3 className="font-helvetica font-bold text-body-md text-primary">{col.title}</h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="font-helvetica text-body-md text-primary hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Legal ── */}
      <div className="pt-6">
        <div className="flex flex-col gap-6 max-w-[1200px] mx-auto">
          <p className="font-helvetica text-body-sm text-primary">
            Spokeo is not a consumer reporting agency as defined by the Fair Credit Reporting Act (FCRA).
            Do not use this site to make decisions about employment, tenant screening, or any purpose covered by the FCRA.
          </p>
          <div className="border-t border-grey-300 w-full" />
          <div className="flex items-center justify-between flex-wrap gap-6 w-full pb-8">
            <p className="font-helvetica text-body-sm text-primary whitespace-nowrap">
              Copyright &copy; 2006-2025 Spokeo, Inc.
            </p>
            <div className="flex items-center gap-6">
              {SOCIAL.map(s => (
                <a key={s.label} href="#" aria-label={s.label} className="flex items-center justify-center">
                  <img src={s.src} alt={s.label} width={s.w} height={s.h} style={{ width: s.w, height: s.h, display: 'block' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
