import React, { useState } from 'react';

const sections = [
  {
    id: 'executive',
    title: 'Executive Summary',
    icon: '📋'
  },
  {
    id: 'retrospective',
    title: 'Part 1: 2024-2025 Retrospective',
    icon: '🔍'
  },
  {
    id: 'trends',
    title: 'Part 2: 2026 Trends',
    icon: '🚀'
  },
  {
    id: 'shifts',
    title: 'Part 3: Seven Core Shifts',
    icon: '⚡'
  },
  {
    id: 'recipe',
    title: 'Part 4: Recipe Platform Implications',
    icon: '🍳'
  },
  {
    id: 'stats',
    title: 'Part 5: Key Statistics',
    icon: '📊'
  }
];

const keyStats = [
  { label: 'Designers: AI as collaborator most impactful', value: '73%', source: 'Lyssna 2026' },
  { label: 'AI agents predicted by FY2026 end', value: '1B', source: 'Salesforce' },
  { label: 'Enterprise developers exploring AI agents', value: '99%', source: 'IBM' },
  { label: 'Customer interactions via voice/CV by 2026', value: '70%', source: 'Forecast' },
  { label: 'Households with ambient tech by 2026', value: '60%', source: 'IDC' },
  { label: 'User preference for generative UI', value: '90%', source: 'Google Research' },
  { label: 'Spatial computing market by 2032', value: '$850B', source: 'Market forecast' },
  { label: 'People with disabilities (opportunity)', value: '1.3B+', source: 'WHO' }
];

const trends2026 = [
  { name: 'Agentic AI & Autonomous Interfaces', desc: 'AI evolving from assistant to autonomous executor', impact: 'High' },
  { name: 'Emotional AI & Empathic Interfaces', desc: 'Multimodal interfaces interpreting emotions', impact: 'High' },
  { name: 'Zero UI & Invisible Interfaces', desc: 'Gesture, voice, ambient computing', impact: 'High' },
  { name: 'Spatial UI & Mixed Reality', desc: '3D interfaces with depth and space awareness', impact: 'Medium' },
  { name: 'Generative UI Maturation', desc: 'Interfaces created on-the-fly based on context', impact: 'High' },
  { name: 'Hyper-Personalization', desc: 'Real-time adaptive interfaces', impact: 'High' },
  { name: 'Compliance-Driven UX', desc: 'Ethical design, accessibility as baseline', impact: 'Medium' },
  { name: 'Voice & Multimodal Maturity', desc: 'Fluid transitions between interaction modes', impact: 'High' },
  { name: 'Ambient Computing', desc: 'Technology receding into background', impact: 'High' },
  { name: 'AI as Design Collaborator', desc: 'AI augmenting designers, not replacing', impact: 'Highest' },
  { name: 'Accessibility & Inclusive AI', desc: 'WCAG 3.0, AI accessibility guidelines', impact: 'Medium' }
];

const coreShifts = [
  { from: 'Assistance', to: 'Autonomy', desc: 'AI agents acting independently vs waiting' },
  { from: 'Logic', to: 'Emotion', desc: 'Interfaces responding to emotional state' },
  { from: 'Visible', to: 'Invisible', desc: 'Zero UI, ambient computing' },
  { from: 'Flat', to: 'Spatial', desc: '3D, depth, physical space awareness' },
  { from: 'Persona', to: 'Individual', desc: 'Real-time vs generalized personalization' },
  { from: 'Convenience', to: 'Compliance', desc: 'Ethics, accessibility as baseline' },
  { from: 'Navigation', to: 'Conversation', desc: 'Voice-first, natural language' }
];

const innovations = [
  { name: 'Canvas-as-prompt', source: 'Miro', application: 'Spatial arrangement as intent' },
  { name: 'Split-screen agent monitoring', source: 'OpenAI Operator', application: 'Multi-step workflows' },
  { name: 'Autonomy slider', source: 'Cursor', application: 'Dial AI independence up/down' },
  { name: 'Point and prompt', source: 'Cursor Browser', application: 'Click + speak to modify' },
  { name: 'Light as AI metaphor', source: 'IBM Carbon', application: 'Visual AI distinction' },
  { name: 'Confidence-based routing', source: 'Stanford HAI', application: 'Auto human escalation' },
  { name: 'Ambient documentation', source: 'Nuance DAX', application: 'Natural conversation capture' },
  { name: 'Transcript-as-timeline', source: 'Descript', application: 'Video editing via text' },
  { name: 'AI Sidekicks', source: 'Miro', application: 'AI as team participant' },
  { name: 'SHAP values for consumers', source: 'Upstart', application: 'Explainable decisions' }
];

export default function AIUIUXReport() {
  const [activeSection, setActiveSection] = useState('executive');
  const [expandedTrend, setExpandedTrend] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            AI UI/UX Trends Report: 2024-2026
          </h1>
          <p className="text-slate-400 text-sm mt-1">From Retrospective Analysis to Forward-Looking Innovation</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                  activeSection === section.id 
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span className="mr-1">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Executive Summary */}
        {activeSection === 'executive' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20">
                <h3 className="text-lg font-semibold text-violet-300 mb-4">Key Takeaways</h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">→</span>
                    <span><strong>73%</strong> of designers say AI as design collaborator will have most impact in 2026</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">→</span>
                    <span><strong>Generative UI</strong> moved from research to production—90% user preference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">→</span>
                    <span><strong>Agentic AI</strong> emerging as dominant paradigm—1 billion agents predicted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">→</span>
                    <span><strong>Ambient computing</strong> accelerating—60% of households by 2026</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">The Moat Thesis</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Technology is becoming commoditized. The winning pattern emerging isn't better algorithms—it's <strong>exclusive content, trust, and specialized context</strong>. For AI products, defensibility comes from unique data, domain expertise, and user relationships—not from the underlying models.
                </p>
                <div className="mt-4 p-3 rounded-lg bg-slate-800/50 text-xs text-slate-400">
                  "The value is shifting from the model to the data. Exclusive access to trusted archives becomes more valuable, not less, as AI capabilities commoditize."
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Research Scope</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl font-bold text-violet-400">26</div>
                  <div className="text-sm text-slate-400 mt-1">Innovations Catalogued (2024-2025)</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl font-bold text-cyan-400">11</div>
                  <div className="text-sm text-slate-400 mt-1">2026 Trends Identified</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl font-bold text-emerald-400">7</div>
                  <div className="text-sm text-slate-400 mt-1">Core Paradigm Shifts</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Retrospective */}
        {activeSection === 'retrospective' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-4">Six Defining Patterns from 2024-2025</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Context IS Interface', desc: 'Spatial arrangement communicates intent vs explicit prompts' },
                  { title: 'Collaborative Loops', desc: 'Iterative dialogue vs one-shot generation' },
                  { title: 'Embedded Beats Adjacent', desc: 'AI woven into workflows vs separate tools' },
                  { title: 'Transparency as Feature', desc: 'Split-screen views, step traces, confidence indicators' },
                  { title: 'Human Override First-Class', desc: 'Approval pipelines, control sliders, escalation' },
                  { title: 'Modality-Appropriate', desc: 'Visual→spatial, code→inline+chat, video→text-as-timeline' }
                ].map((pattern, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-violet-500/30 transition-colors">
                    <h4 className="font-semibold text-violet-300 mb-2">{pattern.title}</h4>
                    <p className="text-sm text-slate-400">{pattern.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-4">Top 10 Innovations</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-700">
                <table className="w-full text-sm">
                  <thead className="bg-slate-800">
                    <tr>
                      <th className="text-left p-3 text-violet-300">Innovation</th>
                      <th className="text-left p-3 text-violet-300">Source</th>
                      <th className="text-left p-3 text-violet-300">Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {innovations.map((item, i) => (
                      <tr key={i} className="border-t border-slate-700 hover:bg-slate-800/50">
                        <td className="p-3 text-cyan-300 font-medium">{item.name}</td>
                        <td className="p-3 text-slate-400">{item.source}</td>
                        <td className="p-3 text-slate-300">{item.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Five Most Transferable Ideas</h3>
              <ol className="space-y-3">
                {[
                  { title: 'Canvas-as-prompt', desc: 'Let spatial arrangement communicate intent' },
                  { title: 'Autonomy slider', desc: 'Single control to dial AI independence' },
                  { title: 'Point-and-prompt', desc: 'Click to select, speak to modify' },
                  { title: 'Light-as-metaphor', desc: 'Visual treatment distinguishes AI content' },
                  { title: 'Confidence-based routing', desc: 'Auto human escalation when uncertain' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <span className="text-cyan-300 font-medium">{item.title}</span>
                      <span className="text-slate-400"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* 2026 Trends */}
        {activeSection === 'trends' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-100 mb-4">11 Emerging Trends for 2026</h2>
            <div className="space-y-3">
              {trends2026.map((trend, i) => (
                <div 
                  key={i}
                  onClick={() => setExpandedTrend(expandedTrend === i ? null : i)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    expandedTrend === i 
                      ? 'bg-slate-800 border-violet-500/30' 
                      : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-300 flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-200">{trend.name}</h3>
                        <p className="text-sm text-slate-400">{trend.desc}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      trend.impact === 'Highest' ? 'bg-emerald-500/20 text-emerald-300' :
                      trend.impact === 'High' ? 'bg-cyan-500/20 text-cyan-300' :
                      'bg-slate-500/20 text-slate-300'
                    }`}>
                      {trend.impact} Impact
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Core Shifts */}
        {activeSection === 'shifts' && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-slate-100 mb-4">Seven Core Paradigm Shifts</h2>
            <div className="space-y-4">
              {coreShifts.map((shift, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-slate-700 text-slate-300 text-sm">{shift.from}</span>
                      <span className="text-violet-400">→</span>
                      <span className="px-3 py-1 rounded-lg bg-violet-500/20 text-violet-300 text-sm font-medium">{shift.to}</span>
                    </div>
                    <span className="text-slate-400 text-sm">{shift.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20">
              <h3 className="text-lg font-semibold text-emerald-300 mb-4">Design Philosophy Evolution</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  { from: '"How it looks"', to: '"How it behaves"' },
                  { from: 'Screens', to: 'Systems' },
                  { from: 'Navigation', to: 'Intent fulfillment' },
                  { from: 'Clicks', to: 'Choreography' },
                  { from: 'Empathy by proxy', to: 'Empathy by pattern' },
                  { from: 'Single-experience design', to: 'Personalized per individual' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                    <span className="text-slate-500">{item.from}</span>
                    <span className="text-emerald-400">→</span>
                    <span className="text-emerald-300">{item.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recipe Platform */}
        {activeSection === 'recipe' && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-slate-100 mb-4">Implications for AI Recipe Platform</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Hybrid Voice + Visual Interface', 
                  desc: 'Voice-first for hands-free kitchen interaction, visual confirmation for precision',
                  icon: '🎤'
                },
                { 
                  title: 'Trust Through Transparency', 
                  desc: 'Confidence indicators for substitutions, source attribution, explainable recommendations',
                  icon: '🔍'
                },
                { 
                  title: 'Anticipatory Cooking Assistance', 
                  desc: 'Context-aware suggestions, proactive alerts, error detection and recovery',
                  icon: '⏰'
                },
                { 
                  title: 'Personalization Without Personas', 
                  desc: 'Adaptive difficulty based on demonstrated skill, equipment-aware instructions',
                  icon: '👤'
                },
                { 
                  title: 'Accessibility as Baseline', 
                  desc: 'Voice AND text AND touch for every interaction, adjustable pace',
                  icon: '♿'
                }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-semibold text-cyan-300">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <h3 className="text-lg font-semibold text-amber-300 mb-4">Competitive Differentiation</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-amber-500/20">
                      <th className="text-left p-2 text-amber-300">Competitor Approach</th>
                      <th className="text-left p-2 text-emerald-300">Heritage Kitchen Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700/50">
                      <td className="p-2 text-slate-400">Generic AI recipes from internet</td>
                      <td className="p-2">Trusted, editorially vetted archives</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="p-2 text-slate-400">One-shot recipe generation</td>
                      <td className="p-2">Collaborative cooking loops with refinement</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="p-2 text-slate-400">Screen-based instruction reading</td>
                      <td className="p-2">Voice-first with visual confirmation</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="p-2 text-slate-400">Static personalization</td>
                      <td className="p-2">Real-time adaptive behavior</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-slate-400">Black-box recommendations</td>
                      <td className="p-2">Explainable AI with source attribution</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        {activeSection === 'stats' && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-slate-100 mb-4">Key Statistics Summary</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyStats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.source}</div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Resources & Tools</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <h4 className="text-violet-300 font-medium mb-2">Generative UI</h4>
                  <ul className="text-slate-400 space-y-1">
                    <li>Vercel v0</li>
                    <li>UIzard</li>
                    <li>Thesys C1</li>
                    <li>CopilotKit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-cyan-300 font-medium mb-2">Design Systems</h4>
                  <ul className="text-slate-400 space-y-1">
                    <li>IBM Carbon for AI</li>
                    <li>Microsoft Fluent</li>
                    <li>AWS Cloudscape</li>
                    <li>Shape of AI</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-300 font-medium mb-2">Spatial Computing</h4>
                  <ul className="text-slate-400 space-y-1">
                    <li>SwiftUI</li>
                    <li>RealityKit</li>
                    <li>Unity PolySpatial</li>
                    <li>Reality Composer Pro</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-amber-300 font-medium mb-2">Accessibility</h4>
                  <ul className="text-slate-400 space-y-1">
                    <li>WCAG 2.2</li>
                    <li>AAG v0.1</li>
                    <li>EU Accessibility Act</li>
                    <li>Level Access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          Research compiled January 2026 • Sources include Nielsen Norman Group, Google Research, Microsoft Design, IBM Carbon, Vercel, Stanford HAI, Anthropic, Lyssna, WebAIM
        </div>
      </footer>
    </div>
  );
}
