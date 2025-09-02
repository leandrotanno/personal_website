import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

// Feature importance stays as first card
const featData = [
  { feature: "sex_male", importance: 0.36 },
  { feature: "pclass", importance: 0.28 },
  { feature: "fare", importance: 0.21 },
  { feature: "age", importance: 0.15 },
];

// Storytelling dataset approximations (Titanic)
const survivalBySex = [
  { name: "Mulheres", value: 233 },
  { name: "Homens", value: 109 },
];

const survivalByClass = [
  { pclass: "1ª", survived: 136 },
  { pclass: "2ª", survived: 87 },
  { pclass: "3ª", survived: 119 },
];

const ageDistribution = [
  { bucket: "0-10", count: 64 },
  { bucket: "11-20", count: 145 },
  { bucket: "21-30", count: 207 },
  { bucket: "31-40", count: 135 },
  { bucket: "41-60", count: 103 },
  { bucket: "60+", count: 37 },
];

const embarkedSurvivalShare = [
  { port: "Cherbourg", survived: 93 },
  { port: "Queenstown", survived: 30 },
  { port: "Southampton", survived: 219 },
];

const fareHistogram = [
  { range: "0-15", count: 280 },
  { range: "15-30", count: 250 },
  { range: "30-60", count: 190 },
  { range: "60+", count: 171 },
];

const survivalRateByAge = [
  { bucket: "0-10", rate: 0.59 },
  { bucket: "11-20", rate: 0.44 },
  { bucket: "21-30", rate: 0.41 },
  { bucket: "31-40", rate: 0.47 },
  { bucket: "41-60", rate: 0.39 },
  { bucket: "60+", rate: 0.25 },
];

const COLORS = ["#a78bfa", "#34d399", "#60a5fa", "#f59e0b", "#ef4444", "#22d3ee"];

const tooltipStyle = { background: "rgba(38, 16, 72, 0.9)", border: "1px solid rgba(139,92,246,.4)", color: "#e9d5ff", fontSize: "11px" } as const;

export default function DashboardViz() {
  return (
    <section aria-label="Dashboard Titanic" className="rounded-2xl border border-violet-700/30 bg-black/20 p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-violet-200">Titanic — quick insights</h3>
        <span className="text-[10px] text-violet-300/70">dados aproximados para demonstração</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* 1. Feature Importance (Bar) */}
        <div className="rounded-xl border border-violet-700/30 bg-black/10 p-2">
          <div className="mb-1 text-[11px] font-semibold text-violet-200">Importância de features</div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={featData} margin={{ left: -18, top: 4, right: 4, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="feature" stroke="#c4b5fd" fontSize={9} />
                <YAxis stroke="#c4b5fd" fontSize={9} />
                <RTooltip cursor={{ fill: 'transparent', stroke: 'transparent' }} contentStyle={tooltipStyle} labelStyle={{ color: '#e9d5ff' }} itemStyle={{ color: '#e9d5ff' }} />
                <Bar dataKey="importance" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2. Survival by sex (Pie) */}
        <div className="rounded-xl border border-violet-700/30 bg-black/10 p-2">
          <div className="mb-1 text-[11px] font-semibold text-violet-200">Sobreviventes por sexo</div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={survivalBySex} dataKey="value" nameKey="name" innerRadius={16} outerRadius={42} paddingAngle={3}>
                  {survivalBySex.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Legend wrapperStyle={{ fontSize: "9px", color: "#e9d5ff" }} />
                <RTooltip cursor={{ fill: 'transparent', stroke: 'transparent' }} contentStyle={tooltipStyle} labelStyle={{ color: '#e9d5ff' }} itemStyle={{ color: '#e9d5ff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 3. Survival by class (Bar) */}
        <div className="rounded-xl border border-violet-700/30 bg-black/10 p-2">
          <div className="mb-1 text-[11px] font-semibold text-violet-200">Sobreviventes por classe</div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={survivalByClass} margin={{ left: -18, top: 4, right: 4, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="pclass" stroke="#c4b5fd" fontSize={9} />
                <YAxis stroke="#c4b5fd" fontSize={9} />
                <RTooltip cursor={{ fill: 'transparent', stroke: 'transparent' }} contentStyle={tooltipStyle} labelStyle={{ color: '#e9d5ff' }} itemStyle={{ color: '#e9d5ff' }} />
                <Bar dataKey="survived" fill="#34d399" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 4. Age distribution (Bar) */}
        <div className="rounded-xl border border-violet-700/30 bg-black/10 p-2">
          <div className="mb-1 text-[11px] font-semibold text-violet-200">Distribuição por idade</div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageDistribution} margin={{ left: -18, top: 4, right: 4, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="bucket" stroke="#c4b5fd" fontSize={9} />
                <YAxis stroke="#c4b5fd" fontSize={9} />
                <RTooltip cursor={{ fill: 'transparent', stroke: 'transparent' }} contentStyle={tooltipStyle} labelStyle={{ color: '#e9d5ff' }} itemStyle={{ color: '#e9d5ff' }} />
                <Bar dataKey="count" fill="#60a5fa" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 5. Survival share by embarked (Pie) */}
        <div className="rounded-xl border border-violet-700/30 bg-black/10 p-2">
          <div className="mb-1 text-[11px] font-semibold text-violet-200">Sobreviventes por porto de embarque</div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={embarkedSurvivalShare} dataKey="survived" nameKey="port" innerRadius={16} outerRadius={42} paddingAngle={2}>
                  {embarkedSurvivalShare.map((_, i) => (
                    <Cell key={i} fill={COLORS[(i + 2) % COLORS.length]} />
                  ))}
                </Pie>
                <Legend wrapperStyle={{ fontSize: "9px", color: "#e9d5ff" }} />
                <RTooltip cursor={{ fill: 'transparent', stroke: 'transparent' }} contentStyle={tooltipStyle} labelStyle={{ color: '#e9d5ff' }} itemStyle={{ color: '#e9d5ff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 6. Fare distribution (Area) */}
        <div className="rounded-xl border border-violet-700/30 bg-black/10 p-2">
          <div className="mb-1 text-[11px] font-semibold text-violet-200">Distribuição de tarifas</div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={fareHistogram} margin={{ left: -18, top: 4, right: 4, bottom: 0 }}>
                <defs>
                  <linearGradient id="fareFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.55} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="range" stroke="#c4b5fd" fontSize={9} />
                <YAxis stroke="#c4b5fd" fontSize={9} />
                <RTooltip cursor={{ fill: 'transparent', stroke: 'transparent' }} contentStyle={tooltipStyle} labelStyle={{ color: '#e9d5ff' }} itemStyle={{ color: '#e9d5ff' }} />
                <Area type="monotone" dataKey="count" stroke="#f59e0b" fill="url(#fareFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
