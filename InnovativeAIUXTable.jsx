import React, { useState } from 'react';

const innovations = [
  {
    name: '"Canvas as prompt"',
    what: 'AI reads spatial context from what\'s on a workspace—no explicit prompting required',
    who: 'Miro Intelligent Canvas',
    why: 'Eliminates the blank page problem entirely. Users don\'t write prompts; they arrange things, and AI understands intent from placement, proximity, and relationships',
    application: 'Any domain with visual organization: mood boards, project planning, research synthesis, meal planning'
  },
  {
    name: 'Split-screen agent monitoring',
    what: 'Left panel shows conversation/task; right panel shows live agent actions with browser screenshots at each step',
    who: 'OpenAI Operator, Amazon Nova Act',
    why: 'Makes autonomous AI legible and interruptible. Users watch the AI "work" like observing a colleague\'s screen share',
    application: 'Complex multi-step workflows: booking travel, filing taxes, research tasks, shopping comparisons'
  },
  {
    name: 'Autonomy slider',
    what: 'Single control letting users dial AI independence from "suggest completions" to "fully autonomous agent"',
    who: 'Cursor Visual Editor',
    why: 'Solves the control problem with a single intuitive metaphor. Users learn AI capabilities by gradually increasing autonomy',
    application: 'Any AI assistant: writing tools, design tools, analysis platforms'
  },
  {
    name: 'Point and prompt',
    what: 'Click any element in a rendered interface, describe change in natural language, AI executes',
    who: 'Cursor Browser',
    why: 'Bridges the "70% ceiling"—chat gets you close, then direct manipulation finishes. No more "move the button 2 pixels left" conversations',
    application: 'Design tools, document editing, presentation software, dashboard customization'
  },
  {
    name: 'Self-testing agent loops',
    what: 'AI periodically tests its own work in browser, generates reports, fixes issues automatically',
    who: 'Replit Agent 3',
    why: 'Shifts from "generate and pray" to continuous quality assurance. Agent catches its own mistakes before human review',
    application: 'Code generation, content creation, data analysis, report writing'
  },
  {
    name: 'Light as AI metaphor',
    what: 'Brightness, glow, and gradients visually distinguish AI-generated content from human content',
    who: 'IBM Carbon for AI',
    why: 'Creates instant visual literacy—users know at a glance what\'s AI vs. human without reading labels',
    application: 'Any mixed human-AI content: collaborative documents, edited media, curated feeds'
  },
  {
    name: 'AI-enabled component variants',
    what: 'Standard UI components (checkbox, form, table) have AI versions with one-click revert to human override',
    who: 'IBM Carbon for AI',
    why: 'Preserves user agency architecturally. Every AI suggestion has a built-in escape hatch',
    application: 'Form builders, data entry, configuration interfaces'
  },
  {
    name: 'Confidence-based routing',
    what: 'Agent automatically defers to human when confidence falls below threshold',
    who: 'Stanford HAI patterns',
    why: 'Solves the "when should AI ask for help?" problem systematically rather than ad-hoc',
    application: 'Customer service, medical triage, legal review, financial advice'
  },
  {
    name: 'Granular control sliders',
    what: 'Single slider controls abstract qualities like "level of jargon-ness" in output',
    who: 'Stanford HAI research',
    why: 'Makes complex AI parameters tangible and explorable. Users learn by experimenting',
    application: 'Legal document translation, technical writing, educational content, tone adjustment'
  },
  {
    name: 'Eyes select, fingers confirm',
    what: 'Gaze identifies target; gesture confirms action—separating "attention" from "action"',
    who: 'Apple Vision Pro',
    why: 'Eliminates accidental activation while enabling hands-free browsing. Architectural solution to multimodal confusion',
    application: 'AR/VR interfaces, accessibility tools, hands-busy scenarios (surgery, cooking, driving)'
  },
  {
    name: 'Zero-layer interface',
    what: 'Relevant apps surface based on situational context (time, location, behavior) before any user action',
    who: 'Mercedes MBUX',
    why: 'Anticipatory UI that removes navigation entirely for common tasks. Interface assembles itself for the moment',
    application: 'Smart home, productivity apps, health tracking, context-aware assistants'
  },
  {
    name: 'Personality traits for AI',
    what: 'Four consistent traits (Natural, Predictive, Personal, Empathetic) expressed through avatar movement, brightness, color',
    who: 'Mercedes MBUX',
    why: 'Creates coherent AI "character" across interactions. Users develop mental model of AI personality',
    application: 'Any anthropomorphized AI: tutors, companions, assistants, game characters'
  },
  {
    name: 'Ambient clinical documentation',
    what: 'AI listens to natural multi-party conversation, extracts structured documentation automatically',
    who: 'Nuance DAX Copilot',
    why: 'Removes documentation burden entirely—clinicians just talk to patients. 50% time reduction, 70% burnout decrease',
    application: 'Meeting notes, interview transcription, customer service logs, legal depositions'
  },
  {
    name: 'Transcript-as-timeline',
    what: 'Delete words from transcript = delete from video; rearrange text = rearrange footage',
    who: 'Descript Underlord',
    why: 'Makes video editing as easy as text editing. Non-editors can edit video',
    application: 'Podcast editing, lecture editing, interview processing, content repurposing'
  },
  {
    name: 'AI Sidekicks as participants',
    what: 'AI agents appear as collaborators who drop sticky notes and comments on shared canvas',
    who: 'Miro AI Sidekicks',
    why: 'AI becomes teammate, not tool. Multiple specialized agents (Product Leader, Agile Coach) contribute different perspectives',
    application: 'Brainstorming sessions, design reviews, planning meetings, creative collaboration'
  },
  {
    name: 'Motion brush for video',
    what: 'Paint areas of video where you want motion to occur; AI animates only those regions',
    who: 'Runway ML',
    why: 'Gives precise spatial control over AI generation without complex parameters. "Show don\'t tell" for video',
    application: 'Image animation, presentation enhancement, educational content, social media'
  },
  {
    name: 'Visual search replaces verbal',
    what: 'Upload screenshot of design you like; AI finds similar designs or generates matching components',
    who: 'Figma AI',
    why: 'Solves the "I know it when I see it" problem. Reference images become prompts',
    application: 'Fashion, interior design, architecture, product design, creative direction'
  },
  {
    name: 'Agents that create agents',
    what: 'Describe workflow in natural language; AI builds specialized bot for that task',
    who: 'Replit Agent 3',
    why: 'Meta-level automation—AI handles the automation work itself. Democratizes bot creation',
    application: 'Business process automation, personal productivity, custom integrations'
  },
  {
    name: 'C2PA content credentials',
    what: 'Automatic labeling of AI-generated content using embedded provenance metadata',
    who: 'TikTok',
    why: 'Creates verifiable content origin without human labeling. Trust at scale',
    application: 'Social media, news, stock photography, legal evidence, academic publishing'
  },
  {
    name: 'SHAP values for consumers',
    what: 'Show specific factors and their weights that influenced AI decision',
    who: 'Upstart lending',
    why: 'Makes black-box decisions actionable. Users know exactly what to change to get different outcome',
    application: 'Credit decisions, insurance quotes, hiring, content recommendations, search ranking'
  },
  {
    name: 'Socratic AI tutoring',
    what: 'AI never gives direct answers; asks "what do you think the first step is?"',
    who: 'Khanmigo, Carnegie Learning',
    why: 'Preserves learning by ensuring student does the thinking. AI as guide, not answer machine',
    application: 'Education, coaching, therapy, skill development, onboarding'
  },
  {
    name: 'Skillometer visualization',
    what: 'Visual progress tracking through discrete skills, not just completion percentage',
    who: 'Khan Academy',
    why: 'Makes learning progress tangible and specific. Users see exactly which skills they\'ve mastered',
    application: 'Language learning, professional development, fitness, music practice'
  },
  {
    name: 'Knowledge graph grounding',
    what: 'AI responses grounded on 50 years of encoded business process expertise',
    who: 'SAP Joule',
    why: 'AI understands not just data but "why"—processes, roles, tasks, relationships',
    application: 'Enterprise software, domain-specific assistants, expert systems'
  },
  {
    name: 'Channel-specific expert agents',
    what: 'Admin configures AI agent per Slack channel; agent answers when mentioned',
    who: 'Slack Agentforce',
    why: 'Contextual AI that knows its scope. Sales channel gets sales agent; engineering gets engineering agent',
    application: 'Team collaboration, community management, customer support, internal knowledge bases'
  },
  {
    name: 'Two-stage loading states',
    what: '"Processing" (no output yet) vs "Generating" (streaming begun)—distinct visual treatments',
    who: 'AWS Cloudscape',
    why: 'Communicates AI state precisely. Users know whether to wait or whether something\'s wrong',
    application: 'Any streaming AI interface, search results, content generation'
  },
  {
    name: 'Variable-speed typewriter',
    what: '5-30ms per character with ±20ms randomization for natural streaming feel',
    who: 'Vercel AI SDK patterns',
    why: 'Makes AI output feel human-paced rather than jarring. Small detail, big impact on perceived quality',
    application: 'Chatbots, writing assistants, real-time translation, live captioning'
  }
];

const topFive = [
  { title: 'Canvas-as-prompt', desc: 'Let spatial arrangement communicate intent instead of requiring explicit prompts' },
  { title: 'Autonomy slider', desc: 'Give users a single control to dial AI independence up or down' },
  { title: 'Point-and-prompt', desc: 'Click to select, speak to modify—combine direct manipulation with natural language' },
  { title: 'Light-as-metaphor', desc: 'Use visual treatment (glow, brightness) to distinguish AI content at a glance' },
  { title: 'Confidence-based routing', desc: 'Architect automatic human escalation when AI is uncertain' }
];

export default function InnovativeAIUXTable() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [filter, setFilter] = useState('');

  const filteredInnovations = innovations.filter(i => 
    i.name.toLowerCase().includes(filter.toLowerCase()) ||
    i.who.toLowerCase().includes(filter.toLowerCase()) ||
    i.application.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Innovative AI UI/UX Ideas
        </h1>
        <p className="text-slate-400 mb-6">2024-2025 Research Compilation</p>
        
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Filter by innovation, company, or application..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-md px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800">
                <th className="text-left p-4 font-semibold text-violet-400">Innovation</th>
                <th className="text-left p-4 font-semibold text-violet-400">What It Does</th>
                <th className="text-left p-4 font-semibold text-violet-400">Who's Doing It</th>
                <th className="text-left p-4 font-semibold text-violet-400 hidden lg:table-cell">Why Revolutionary</th>
                <th className="text-left p-4 font-semibold text-violet-400 hidden xl:table-cell">Cross-Domain Application</th>
              </tr>
            </thead>
            <tbody>
              {filteredInnovations.map((item, idx) => (
                <tr 
                  key={idx}
                  onClick={() => setExpandedRow(expandedRow === idx ? null : idx)}
                  className={`border-b border-slate-800 cursor-pointer transition-colors ${
                    expandedRow === idx ? 'bg-slate-800/50' : 'hover:bg-slate-900/50'
                  }`}
                >
                  <td className="p-4 font-medium text-cyan-300">{item.name}</td>
                  <td className="p-4 text-slate-300">{item.what}</td>
                  <td className="p-4 text-amber-400/80">{item.who}</td>
                  <td className="p-4 text-slate-400 hidden lg:table-cell">{item.why}</td>
                  <td className="p-4 text-slate-500 hidden xl:table-cell">{item.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile expanded view */}
        {expandedRow !== null && (
          <div className="lg:hidden mt-4 p-4 bg-slate-900 rounded-xl border border-slate-700">
            <h3 className="font-semibold text-cyan-300 mb-2">{innovations[expandedRow].name}</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-violet-400 font-medium">Why Revolutionary:</span>
                <p className="text-slate-300 mt-1">{innovations[expandedRow].why}</p>
              </div>
              <div>
                <span className="text-violet-400 font-medium">Applications:</span>
                <p className="text-slate-400 mt-1">{innovations[expandedRow].application}</p>
              </div>
            </div>
          </div>
        )}

        {/* Top 5 Section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4 text-slate-200">
            Five Most Transferable Ideas for Any AI Product
          </h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {topFive.map((item, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <h3 className="font-semibold text-cyan-300">{item.title}</h3>
                </div>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-600 text-center">
          Research compiled January 2026 • Sources: Google Research, Vercel, IBM Carbon, Microsoft, AWS, Stanford HAI
        </p>
      </div>
    </div>
  );
}
