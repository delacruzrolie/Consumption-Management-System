/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar />

      <main className="flex-1 p-4 sm:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
        {/* Hero Welcome */}
        <section className="flex flex-col md:flex-row md:items-end justify-between bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-light text-slate-500">
              Operational <span className="font-semibold text-slate-900">Overview</span>
            </h2>
            <p className="text-sm text-slate-400">Real-time consumption tracking for the Department of Environment and Natural Resources.</p>
          </div>
          <div className="flex gap-4 md:text-right">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</p>
              <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1 md:justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> SYSTEM ACTIVE
              </p>
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 flex-1 gap-6">
          {/* Fuel Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col shadow-sm">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22L17 22"/><path d="M4 9L15 9"/><path d="M14 22L14 15L11 15L11 22"/><path d="M15 5L15 22"/><path d="M5 22L5 5C5 3.9 5.9 3 7 3L13 3C14.1 3 15 3.9 15 5"/><path d="M17 14L17.5 13.5C18.8 12.2 20.8 12.2 22.1 13.5C23.4 14.8 23.4 16.8 22.1 18.1L18 22"/></svg>
              </div>
              <button className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase transition-colors hover:bg-slate-100">Detail View</button>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Fuel Consumption</p>
              <p className="text-4xl font-bold tracking-tight text-slate-900 italic">14,285 <span className="text-lg font-normal text-slate-400 not-italic">L</span></p>
            </div>
            <div className="mt-auto flex gap-2 pt-4">
              <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500" style={{ width: '65%' }}></div>
              </div>
            </div>
            <p className="text-[11px] mt-4 text-slate-500">-4.2% reduction from previous quarter</p>
          </div>

          {/* Electricity Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col shadow-sm">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <button className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase transition-colors hover:bg-slate-100">Detail View</button>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Electricity Usage</p>
              <p className="text-4xl font-bold tracking-tight text-slate-900 italic">842.1 <span className="text-lg font-normal text-slate-400 not-italic">mWh</span></p>
            </div>
            <div className="mt-auto flex gap-2 pt-4">
              <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500" style={{ width: '82%' }}></div>
              </div>
            </div>
            <p className="text-[11px] mt-4 text-slate-500">+1.8% increase due to new server clusters</p>
          </div>

          {/* Water Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col shadow-sm">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </div>
              <button className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase transition-colors hover:bg-slate-100">Detail View</button>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Water Demand</p>
              <p className="text-4xl font-bold tracking-tight text-slate-900 italic">4,902 <span className="text-lg font-normal text-slate-400 not-italic">m³</span></p>
            </div>
            <div className="mt-auto flex gap-2 pt-4">
              <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500" style={{ width: '45%' }}></div>
              </div>
            </div>
            <p className="text-[11px] mt-4 text-slate-500">Stable within 5% of historical seasonal average</p>
          </div>
        </div>

        {/* Bottom Activity Bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between shrink-0 mt-auto gap-6 md:gap-0">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full md:w-auto">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Active Subsidies</p>
              <p className="text-xl font-mono tracking-tighter">$124,500.00</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Last Reading</p>
              <p className="text-xl font-mono tracking-tighter">Oct 24, 09:12 AM</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold transition-colors w-full sm:w-auto">NEW ENTRY</button>
            <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold transition-colors border border-slate-700 w-full sm:w-auto">EXPORT DATA</button>
          </div>
        </div>
      </main>
    </div>
  );
}
