import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Phone, ArrowRight, ShieldCheck, Coffee, Video, Home } from 'lucide-react';

export default function ConsultationModal({ onClose, prefilledType = 'Bespoke Advisory' }) {
  const [meetingType, setMeetingType] = useState('Coffee Meeting in Woodbridge');
  const [preferredDate, setPreferredDate] = useState('2026-10-26');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 12:00 PM)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-stone-200 hover:bg-stone-900 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {confirmed ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-serif-luxury text-stone-900">
              Consultation Reserved
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-sm mx-auto">
              Thank you, {name}. Lucas Frattura has received your appointment request for <strong>{preferredDate}</strong> ({preferredTime}). Lucas will email a calendar invitation directly to {email}.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#111215] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#8E6D2B]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E6D2B] mb-1">
                <Calendar className="w-4 h-4" />
                <span>Private Consultation</span>
              </div>
              <h3 className="text-2xl font-bold font-serif-luxury text-stone-900">
                Book a Consultation with Lucas
              </h3>
              <p className="text-xs text-stone-500 font-light mt-0.5">
                Complimentary 30-minute strategic dialogue tailored to your real estate aspirations.
              </p>
            </div>

            {/* Meeting Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                Preferred Format
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'Coffee Meeting in Woodbridge', label: 'In Person', icon: Coffee },
                  { id: 'Private Video Call', label: 'Video Call', icon: Video },
                  { id: 'In-Home Valuation', label: 'At Your Home', icon: Home }
                ].map((fmt) => {
                  const Icon = fmt.icon;
                  return (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setMeetingType(fmt.id)}
                      className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        meetingType === fmt.id
                          ? 'border-[#8E6D2B] bg-[#FAF5EC] text-stone-900 font-semibold'
                          : 'border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#8E6D2B]" />
                      <span className="text-[11px]">{fmt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs text-stone-800 font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs text-stone-800 font-medium"
                >
                  <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM - 12:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Rossi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(416) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs text-stone-900"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#111215] hover:bg-[#8E6D2B] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Confirm Appointment Request</span>
              <ArrowRight className="w-4 h-4 text-[#E2C37E]" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8E6D2B]" />
              <span>Direct with Lucas · No obligations · 100% confidential</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
