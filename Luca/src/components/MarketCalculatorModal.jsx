import React, { useState } from 'react';
import { X, Calculator, DollarSign, Percent, Calendar, ArrowRight } from 'lucide-react';

export default function MarketCalculatorModal({ initialMode = 'mortgage', onClose, onBookConsultation }) {
  const [mode, setMode] = useState(initialMode);

  // Mortgage Calculator States
  const [homePrice, setHomePrice] = useState(2500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(4.89);
  const [amortizationYears, setAmortizationYears] = useState(25);

  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const loanAmount = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = amortizationYears * 12;
  
  const monthlyPayment = loanAmount > 0 && monthlyRate > 0
    ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    : 0;

  // Valuation Estimator States
  const [propertyType, setPropertyType] = useState('Detached Single Family');
  const [squareFeet, setSquareFeet] = useState('4500');
  const [community, setCommunity] = useState('Woodbridge');
  const [renovationGrade, setRenovationGrade] = useState('Fully Renovated / Custom');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-stone-200 hover:bg-stone-900 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8E6D2B] mb-1">
            <Calculator className="w-4 h-4" />
            <span>Advisory Planning Tools</span>
          </div>
          <h3 className="text-2xl font-bold font-serif-luxury text-[#111215]">
            Financial & Valuation Insights
          </h3>
          <p className="text-xs text-stone-500 font-light mt-1">
            Calculate your estimated monthly commitment or explore GTA property market dynamics.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#FAF9F5] p-1 rounded-xl border border-stone-200 mb-6">
          <button
            onClick={() => setMode('mortgage')}
            className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
              mode === 'mortgage' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            Luxury Mortgage Calculator
          </button>
          <button
            onClick={() => setMode('valuation')}
            className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
              mode === 'valuation' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            Property Valuation Estimator
          </button>
        </div>

        {/* Mode 1: Mortgage Calculator */}
        {mode === 'mortgage' ? (
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                <span>Purchase Price</span>
                <span className="font-bold text-stone-900">${homePrice.toLocaleString()} CAD</span>
              </div>
              <input
                type="range"
                min="1000000"
                max="10000000"
                step="50000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full accent-[#8E6D2B]"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                <span>$1.0M</span>
                <span>$5.0M</span>
                <span>$10.0M+</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-stone-600 uppercase tracking-wider mb-1">
                  Down Payment
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full bg-stone-50 border border-stone-200 text-stone-800 text-xs rounded-lg px-3 py-2 pr-7 font-bold"
                  />
                  <span className="absolute right-3 top-2 text-xs text-stone-400">%</span>
                </div>
                <p className="text-[10px] text-stone-400 mt-1">
                  ${Math.round(downPaymentAmount).toLocaleString()}
                </p>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 uppercase tracking-wider mb-1">
                  Interest Rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.05"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-stone-50 border border-stone-200 text-stone-800 text-xs rounded-lg px-3 py-2 pr-7 font-bold"
                  />
                  <span className="absolute right-3 top-2 text-xs text-stone-400">%</span>
                </div>
                <p className="text-[10px] text-stone-400 mt-1">Current 5-yr fixed est.</p>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 uppercase tracking-wider mb-1">
                  Amortization
                </label>
                <select
                  value={amortizationYears}
                  onChange={(e) => setAmortizationYears(Number(e.target.value))}
                  className="w-full bg-stone-50 border border-stone-200 text-stone-800 text-xs rounded-lg px-3 py-2 font-bold"
                >
                  <option value={20}>20 Years</option>
                  <option value={25}>25 Years</option>
                  <option value={30}>30 Years</option>
                </select>
                <p className="text-[10px] text-stone-400 mt-1">Standard Canadian term</p>
              </div>
            </div>

            {/* Result Box */}
            <div className="bg-[#111215] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#E2C37E] font-semibold">
                  Estimated Monthly Mortgage
                </span>
                <div className="text-3xl font-bold font-display-luxury text-white">
                  ${Math.round(monthlyPayment).toLocaleString()}{' '}
                  <span className="text-xs font-sans font-normal text-stone-400">/ month</span>
                </div>
                <p className="text-[10px] text-stone-400 mt-0.5">
                  Principal & Interest on ${Math.round(loanAmount).toLocaleString()} financed
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBookConsultation();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#8E6D2B] hover:bg-[#a17830] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shrink-0"
              >
                Discuss Financing Options
              </button>
            </div>
          </div>
        ) : (
          /* Mode 2: Valuation Estimator */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-stone-600 uppercase tracking-wider mb-1">
                  Community Location
                </label>
                <select
                  value={community}
                  onChange={(e) => setCommunity(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 text-stone-800 text-xs rounded-lg px-3 py-2 font-medium"
                >
                  <option value="Woodbridge">Woodbridge</option>
                  <option value="Kleinburg">Kleinburg</option>
                  <option value="Vaughan">Vaughan</option>
                  <option value="Thornhill">Thornhill</option>
                  <option value="Maple">Maple</option>
                  <option value="Concord">Concord</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 uppercase tracking-wider mb-1">
                  Property Classification
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 text-stone-800 text-xs rounded-lg px-3 py-2 font-medium"
                >
                  <option value="Detached Single Family">Detached Luxury Estate</option>
                  <option value="Ravine Lot Residence">Ravine Lot Residence</option>
                  <option value="Executive Townhome">Executive Townhome</option>
                  <option value="Country Estate / Acreage">Country Estate / Acreage</option>
                </select>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#C5A880]/50 text-stone-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8E6D2B]">
                Precise Comparative Market Analysis (CMA)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Automated online algorithms cannot account for ravine topography, Italian custom finishes, ceiling heights, or private off-market comps.
              </p>
              <p className="text-xs text-stone-700 font-medium">
                Lucas personally conducts comprehensive on-site CMAs with zero cost or obligation.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="w-full py-3.5 bg-[#111215] hover:bg-[#8E6D2B] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Request In-Person Home Valuation</span>
              <ArrowRight className="w-4 h-4 text-[#E2C37E]" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
