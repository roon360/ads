import { useState, useRef } from 'react'

// Replace with your FunnelFlow Systems WhatsApp business number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = '0792265306'
const WHATSAPP_PREFILL = 'Hi FunnelFlow Systems, I\'ve completed the qualification form and would like to discuss installing a profitable ad system.'

const BUDGET_OPTIONS = [
  { value: '', label: 'Select range' },
  { value: 'under-1k', label: 'Under $1,000/month' },
  { value: '1k-3k', label: '$1,000 – $3,000/month' },
  { value: '3k-7k', label: '$3,000 – $7,000/month' },
  { value: '7k-15k', label: '$7,000 – $15,000/month' },
  { value: '15k-plus', label: '$15,000+/month' },
]

function scrollToQualification() {
  document.getElementById('qualification')?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [form, setForm] = useState({
    businessName: '',
    whatYouSell: '',
    runningAds: '',
    budget: '',
    afterClick: '',
    whatsapp: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const validate = () => {
    const next = {}
    if (!form.businessName.trim()) next.businessName = 'Required'
    if (!form.whatYouSell.trim()) next.whatYouSell = 'Required'
    if (!form.runningAds) next.runningAds = 'Required'
    if (!form.budget) next.budget = 'Required'
    if (!form.afterClick.trim()) next.afterClick = 'Required'
    const cleaned = form.whatsapp.replace(/\D/g, '')
    if (!cleaned || cleaned.length < 10) next.whatsapp = 'Valid WhatsApp number required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    const text = encodeURIComponent(WHATSAPP_PREFILL)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5]">
      {/* Hero */}
      <header className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#0d0d0d]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-[#c9a227] font-semibold tracking-widest uppercase text-sm mb-6 opacity-90 animate-fade-in">
            FunnelFlow Systems
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-8 animate-fade-in animation-delay-100">
            Run Ads That Pay You Back — Not Ads That Drain Your Budget.
          </h1>
          <p className="text-lg sm:text-xl text-[#a3a3a3] max-w-2xl leading-relaxed mb-12 animate-fade-in animation-delay-200">
            Most businesses don’t have an ad problem. They have a broken conversion system. We install the structure between Meta ads and WhatsApp so your spend turns into predictable profit.
          </p>
          <button
            type="button"
            onClick={scrollToQualification}
            className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-[#0d0d0d] font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-fade-in animation-delay-300"
          >
            See If You Qualify
          </button>
        </div>
      </header>

      {/* Problem */}
      <section className="px-6 sm:px-10 lg:px-20 py-24 border-t border-[#2d2d2d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-8 text-white">
            Sending Traffic Straight to WhatsApp Creates Chaos
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed mb-10">
            When every click lands in your inbox with no structure, you get volume — not clarity. No way to see who’s serious. No way to prioritize. No way to improve.
          </p>
          <ul className="text-left space-y-4 text-[#d4d4d4]">
            <li className="flex items-start gap-3">
              <span className="text-[#c9a227] mt-1">—</span>
              <span><strong className="text-white">No tracking.</strong> You can’t tie revenue back to specific ads or audiences.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c9a227] mt-1">—</span>
              <span><strong className="text-white">No filtering.</strong> Tire-kickers and buyers get the same treatment.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c9a227] mt-1">—</span>
              <span><strong className="text-white">No conversion control.</strong> You’re reacting, not engineering outcomes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c9a227] mt-1">—</span>
              <span><strong className="text-white">Ads amplify weakness.</strong> More traffic to a broken system only burns more budget.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Authority */}
      <section className="px-6 sm:px-10 lg:px-20 py-24 bg-[#1a1a1a]/50 border-t border-[#2d2d2d]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a227] font-semibold tracking-widest uppercase text-sm mb-4">Our Position</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-12 text-white">
            We don’t run ads. We engineer profitable customer journeys.
          </h2>
          <p className="text-[#a3a3a3] text-lg mb-12 max-w-2xl">
            The work happens in the system between the click and the close. That’s where we specialize.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base">
            <span className="px-4 py-2 rounded-sm bg-[#2d2d2d] text-[#e5e5e5] border border-[#404040]">Ad</span>
            <span className="text-[#737373]">→</span>
            <span className="px-4 py-2 rounded-sm bg-[#2d2d2d] text-[#e5e5e5] border border-[#404040]">Conversion Page</span>
            <span className="text-[#737373]">→</span>
            <span className="px-4 py-2 rounded-sm bg-[#2d2d2d] text-[#e5e5e5] border border-[#404040]">Pre-Qualification</span>
            <span className="text-[#737373]">→</span>
            <span className="px-4 py-2 rounded-sm bg-[#2d2d2d] text-[#e5e5e5] border border-[#404040]">Structured Offer</span>
            <span className="text-[#737373]">→</span>
            <span className="px-4 py-2 rounded-sm bg-[#c9a227]/20 text-[#d4af37] border border-[#c9a227]/40">Optimized Close</span>
          </div>
        </div>
      </section>

      {/* Profit Logic */}
      <section className="px-6 sm:px-10 lg:px-20 py-24 border-t border-[#2d2d2d]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-8 text-white text-center">
            The Math That Matters
          </h2>
          <p className="text-[#a3a3a3] text-lg text-center mb-14">
            Profitability isn’t luck. It’s a function of three numbers.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-sm bg-[#1a1a1a] border border-[#2d2d2d]">
              <p className="text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-2">Cost per click</p>
              <p className="text-[#a3a3a3] text-sm">What you pay for each visitor from your ads.</p>
            </div>
            <div className="p-6 rounded-sm bg-[#1a1a1a] border border-[#2d2d2d]">
              <p className="text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-2">Conversion rate</p>
              <p className="text-[#a3a3a3] text-sm">What % of visitors become leads or customers.</p>
            </div>
            <div className="p-6 rounded-sm bg-[#1a1a1a] border border-[#2d2d2d]">
              <p className="text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-2">Customer value</p>
              <p className="text-[#a3a3a3] text-sm">What one customer is worth over time.</p>
            </div>
          </div>
          <p className="text-center text-xl text-white font-medium">
            Customer value must exceed acquisition cost. We build the system so you can measure it — and scale it.
          </p>
        </div>
      </section>

      {/* What We Install */}
      <section className="px-6 sm:px-10 lg:px-20 py-24 bg-[#1a1a1a]/50 border-t border-[#2d2d2d]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6 text-white text-center">
            What We Install
          </h2>
          <p className="text-[#a3a3a3] text-lg text-center mb-16">
            A complete conversion architecture between your ads and WhatsApp.
          </p>
          <ul className="grid sm:grid-cols-2 gap-6">
            {[
              'High-converting landing page',
              'Pre-qualification filters',
              'Retargeting structure',
              'Tracking setup (Meta Pixel + analytics)',
              'Funnel architecture',
              'Optional payment integration',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 p-5 rounded-sm bg-[#0d0d0d] border border-[#2d2d2d]">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c9a227]/20 text-[#c9a227] flex items-center justify-center font-semibold text-sm">
                  {i + 1}
                </span>
                <span className="text-[#e5e5e5]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Qualification Form */}
      <section id="qualification" className="px-6 sm:px-10 lg:px-20 py-24 border-t border-[#2d2d2d] scroll-mt-20">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4 text-white text-center">
            Apply For a Profitable Ads System
          </h2>
          <p className="text-[#a3a3a3] text-center mb-12">
            Short application. No commitment. We’ll confirm next steps via WhatsApp.
          </p>

          {submitted ? (
            <div className="text-center py-16 px-6 rounded-sm bg-[#1a1a1a] border border-[#2d2d2d] animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Application received</h3>
              <p className="text-[#a3a3a3] mb-4">
                We’re opening WhatsApp so you can send your pre-filled message. Complete the chat to move to the next step.
              </p>
              <p className="text-sm text-[#737373]">If the window didn’t open, check your pop-up blocker or use the link we may have sent.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-[#d4d4d4] mb-2">Business Name</label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={form.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm bg-[#1a1a1a] border border-[#2d2d2d] text-[#e5e5e5] placeholder-[#737373] focus:outline-none focus:border-[#c9a227]/50 focus:ring-1 focus:ring-[#c9a227]/50 transition-colors"
                  placeholder="Your company or brand name"
                />
                {errors.businessName && <p className="mt-1 text-sm text-red-400">{errors.businessName}</p>}
              </div>

              <div>
                <label htmlFor="whatYouSell" className="block text-sm font-medium text-[#d4d4d4] mb-2">What do you sell?</label>
                <input
                  id="whatYouSell"
                  name="whatYouSell"
                  type="text"
                  value={form.whatYouSell}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm bg-[#1a1a1a] border border-[#2d2d2d] text-[#e5e5e5] placeholder-[#737373] focus:outline-none focus:border-[#c9a227]/50 focus:ring-1 focus:ring-[#c9a227]/50 transition-colors"
                  placeholder="Product or service in a few words"
                />
                {errors.whatYouSell && <p className="mt-1 text-sm text-red-400">{errors.whatYouSell}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#d4d4d4] mb-2">Are you currently running ads?</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="runningAds" value="yes" checked={form.runningAds === 'yes'} onChange={handleChange} className="w-4 h-4 text-[#c9a227] bg-[#1a1a1a] border-[#2d2d2d] focus:ring-[#c9a227]" />
                    <span className="text-[#e5e5e5]">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="runningAds" value="no" checked={form.runningAds === 'no'} onChange={handleChange} className="w-4 h-4 text-[#c9a227] bg-[#1a1a1a] border-[#2d2d2d] focus:ring-[#c9a227]" />
                    <span className="text-[#e5e5e5]">No</span>
                  </label>
                </div>
                {errors.runningAds && <p className="mt-1 text-sm text-red-400">{errors.runningAds}</p>}
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-[#d4d4d4] mb-2">Monthly ad budget range</label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm bg-[#1a1a1a] border border-[#2d2d2d] text-[#e5e5e5] focus:outline-none focus:border-[#c9a227]/50 focus:ring-1 focus:ring-[#c9a227]/50 transition-colors"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.budget && <p className="mt-1 text-sm text-red-400">{errors.budget}</p>}
              </div>

              <div>
                <label htmlFor="afterClick" className="block text-sm font-medium text-[#d4d4d4] mb-2">What happens after someone clicks your ad?</label>
                <textarea
                  id="afterClick"
                  name="afterClick"
                  value={form.afterClick}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm bg-[#1a1a1a] border border-[#2d2d2d] text-[#e5e5e5] placeholder-[#737373] focus:outline-none focus:border-[#c9a227]/50 focus:ring-1 focus:ring-[#c9a227]/50 transition-colors resize-y"
                  placeholder="e.g. They go to WhatsApp, or a landing page, or..."
                />
                {errors.afterClick && <p className="mt-1 text-sm text-red-400">{errors.afterClick}</p>}
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-[#d4d4d4] mb-2">WhatsApp Number</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm bg-[#1a1a1a] border border-[#2d2d2d] text-[#e5e5e5] placeholder-[#737373] focus:outline-none focus:border-[#c9a227]/50 focus:ring-1 focus:ring-[#c9a227]/50 transition-colors"
                  placeholder="e.g. +1 555 123 4567"
                />
                {errors.whatsapp && <p className="mt-1 text-sm text-red-400">{errors.whatsapp}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#c9a227] hover:bg-[#d4af37] text-[#0d0d0d] font-semibold py-4 rounded-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                Apply For Profitable Ads System
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 lg:px-20 py-12 border-t border-[#2d2d2d]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#737373] text-sm">© {new Date().getFullYear()} FunnelFlow Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
