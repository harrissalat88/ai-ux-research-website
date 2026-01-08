import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AIUIUXReport from './AIUIUXReport';
import InnovativeAIUXTable from './InnovativeAIUXTable';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent text-center">
          AI UI/UX Trends & Innovations
        </h1>
        <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
          Explore comprehensive research on AI interface design patterns, emerging trends, and innovative UX solutions from 2024-2026
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/report"
            className="group p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20 hover:border-violet-500/40 transition-all"
          >
            <div className="text-4xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-violet-300 mb-3 group-hover:text-violet-200 transition-colors">
              Trends Report
            </h2>
            <p className="text-slate-400">
              Comprehensive analysis covering retrospective insights, 2026 trends, core paradigm shifts, and practical applications
            </p>
            <div className="mt-4 text-violet-400 group-hover:translate-x-2 transition-transform inline-block">
              Explore Report →
            </div>
          </Link>

          <Link
            to="/innovations"
            className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
          >
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">
              Innovation Catalog
            </h2>
            <p className="text-slate-400">
              Detailed breakdown of 26 innovative AI UX patterns from leading companies, with cross-domain applications
            </p>
            <div className="mt-4 text-cyan-400 group-hover:translate-x-2 transition-transform inline-block">
              Browse Innovations →
            </div>
          </Link>
        </div>

        <div className="mt-16 p-6 rounded-xl bg-slate-800/30 border border-slate-700 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 text-center">Research Highlights</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-violet-400">73%</div>
              <div className="text-sm text-slate-400 mt-1">Designers say AI collaboration has most impact</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-cyan-400">1B</div>
              <div className="text-sm text-slate-400 mt-1">AI agents predicted by 2026</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-emerald-400">26</div>
              <div className="text-sm text-slate-400 mt-1">Innovations catalogued</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-slate-950/90 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              AI UX Research
            </Link>
            <div className="flex gap-4">
              <Link to="/report" className="text-slate-400 hover:text-slate-200 transition-colors">
                Report
              </Link>
              <Link to="/innovations" className="text-slate-400 hover:text-slate-200 transition-colors">
                Innovations
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<AIUIUXReport />} />
        <Route path="/innovations" element={<InnovativeAIUXTable />} />
      </Routes>
    </Router>
  );
}

export default App;
