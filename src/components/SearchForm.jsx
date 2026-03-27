import { useState } from 'react'

function InputField({ id, placeholder, showTooltip }) {
  const [value, setValue] = useState('')
  const filled  = value.trim().length > 0
  const isError = !filled   // error shown by default until field is filled

  return (
    <div className="relative flex flex-col gap-1 flex-1 min-w-0">
      {/* Input wrapper */}
      <div className={[
        'flex items-center gap-2 px-4 h-12 bg-white rounded-8 border-2 transition-colors shadow-input w-full overflow-hidden',
        isError  ? 'border-red-700'  :
        filled   ? 'border-secondary' :
        'border-transparent'
      ].join(' ')}>
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          className="flex-1 font-inter text-body-md text-primary placeholder:text-secondary outline-none bg-transparent"
          onChange={e => setValue(e.target.value)}
        />
        {/* Trailing icon */}
        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
          {filled ? (
            <img src="/assets/564a99acf8c6ecaf2ec6a4fa53bde120cae90f28.svg" className="w-4 h-3" alt="" />
          ) : (
            <div className="relative w-6 h-6">
              <img className="absolute" style={{top:'8.33%',left:'33.33%',width:'33.34%',height:'37.5%'}}  src="/assets/f57ffb39086c06cf346c1ade5fc595556d6d27e9.svg" alt="" />
              <img className="absolute" style={{top:'37.5%',left:'16.67%',width:'66.66%',height:'54.17%'}} src="/assets/d5bab60d39a448019dd407350d28c55db736a9b2.svg" alt="" />
              <img className="absolute" style={{top:'62.5%',left:'45.83%',width:'8.34%', height:'12.5%'}}  src="/assets/a0a16091fcc3d3910bacdb2940ef1038575e7b2d.svg" alt="" />
            </div>
          )}
        </div>
      </div>

      {/* Error message */}
      {isError && (
        <div className="flex items-center gap-1">
          <span
            className="inline-block w-5 h-5 flex-shrink-0 bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/assets/1f34548e9d546137e4b764f88bf9426ac61bc114.svg')", backgroundSize: '17px 17px' }}
            aria-hidden="true"
          />
          <span className="font-inter text-body-sm text-red-700">Enter a {placeholder.toLowerCase()}</span>
        </div>
      )}

      {/* Tooltip */}
      {showTooltip && filled && (
        <div className="absolute top-[calc(100%+2px)] left-0 z-20 pointer-events-none">
          <div className="ml-4 w-4 h-1.5 overflow-hidden flex items-end justify-center">
            <div className="w-2.5 h-2.5 bg-secondary rotate-45 rounded-sm mb-[-5px]" />
          </div>
          <div className="bg-secondary rounded px-2.5 py-2 text-white font-inter text-body-sm flex items-center gap-1.5 whitespace-nowrap">
            <img src="/assets/459d83127c1c2d95e991c1ccb8ddb7e0eac05dd4.svg" className="w-4 h-4 flex-shrink-0" alt="" />
            <span>2+ possible profiles found for {value}!</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SearchForm() {
  return (
    <div className="flex flex-col gap-8 items-center w-full z-[2]">
      <div className="w-full max-w-[699px]">
        {/* stacked below 599px, side-by-side at ≥599px */}
        <div className="flex flex-col bp-599:flex-row gap-2 items-start w-full">
          <InputField id="first-name" placeholder="First Name" showTooltip={true} />
          <InputField id="last-name"  placeholder="Last Name"  showTooltip={false} />
          {/* CTA — full-width below 599px, auto-width above */}
          <button className="w-full bp-599:w-auto flex-shrink-0 h-12 bg-teal-700 hover:bg-[#17a187] text-white font-inter font-bold text-body-md px-5 rounded-8 shadow-btn transition-colors whitespace-nowrap self-start">
            Search Now
          </button>
        </div>
      </div>

      {/* Value props */}
      <div className="flex flex-col bp-599:flex-row bp-599:flex-wrap gap-y-2 bp-599:gap-x-4 bp-799:gap-3 items-start bp-599:items-center bp-599:justify-center w-full">
        {[
          'Private searches — no alerts sent',
          'Scan 120+ dating & social sites — from Tinder to IG',
          'One search connects all their profiles',
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="inline-block w-4 h-3 flex-shrink-0 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/assets/564a99acf8c6ecaf2ec6a4fa53bde120cae90f28.svg')" }}
              aria-hidden="true"
            />
            <span className="font-helvetica text-body-sm bp-799:text-body-md text-primary">{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
