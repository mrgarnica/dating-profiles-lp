import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] h-[72px] bg-white shadow-header flex items-center justify-center px-8">
      <div className="flex items-center justify-between w-full max-w-[1392px] gap-3">

        {/* Logo */}
        <a href="#" className="flex items-center gap-1 flex-shrink-0" aria-label="Spokeo">
          <img className="w-[24.91px] h-[25px]" src="/assets/26b3a495f0394fd8bef1efb6ed12215a6122ef36.svg" alt="" />
          <img className="w-[80.91px] h-[15.94px]" src="/assets/c9ffb51a53b6848f56516c610e4817349740707e.svg" alt="Spokeo" />
        </a>

        {/* Search bar — visible ≥ 992px only */}
        <div className="hidden bp-991:flex flex-1 max-w-[500px] min-w-[370px]">
          <div className="flex items-center gap-2 bg-grey-100 rounded-8 px-4 py-3 w-full">
            <span className="flex-1 font-helvetica text-body-md text-secondary truncate">
              Search by name, email, phone or address
            </span>
            <img className="w-6 h-6 flex-shrink-0" src="/assets/2c8168e4623f412835f342c359b4e3275d6f8034.svg" alt="" />
          </div>
        </div>

        {/* Desktop nav — visible ≥ 992px only */}
        <nav className="hidden bp-991:flex items-center gap-5 flex-shrink-0 justify-end">
          <a href="#" className="font-inter font-semibold text-body-sm text-primary whitespace-nowrap">About</a>
          <a href="#" className="font-inter font-semibold text-body-sm text-primary whitespace-nowrap">Login</a>
          <a href="#" className="font-inter font-semibold text-body-sm text-blue-link whitespace-nowrap">Sign Up</a>
        </nav>

        {/* Mobile icons — visible below 992px */}
        <div className="flex bp-991:hidden items-center gap-4">
          <button aria-label="Search">
            <img className="w-6 h-6" src="/assets/2c8168e4623f412835f342c359b4e3275d6f8034.svg" alt="" />
          </button>
          <button aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="#0e0f10" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
  )
}
