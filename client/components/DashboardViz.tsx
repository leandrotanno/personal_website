import {
  ResponsiveContainer,
  LineChart,
  Line,
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
} from "recharts";

const cvData = [
  { fold: 1, score: 0.78 },
  { fold: 2, score: 0.80 },
  { fold: 3, score: 0.77 },
  { fold: 4, score: 0.79 },
  { fold: 5, score: 0.78 },
];

const featData = [
  { feature: "sex_male", importance: 0.36 },
  { feature: "pclass", importance: 0.28 },
  { feature: "fare", importance: 0.21 },
  { feature: "age", importance: 0.15 },
];

// Aproximações realistas do Titanic
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
  { age: "0-20", count: 139 },
  { age: "21-40", count: 342 },
  { age: "41-60", count: 285 },
  { age: "60+", count: 125 },
];
const modelMetrics = [
  { metric: "Accuracy", value: 0.789 },
  { metric: "Precision", value: 0.792 },
  { metric: "Recall", value: 0.745 },
  { metric: "F1-Score", value: 0.768 },
];
const COLORS = ["#a78bfa", "#34d399", "#60a5fa", "#f59e0b"];

interface DashboardVizProps {
  showTopCharts?: boolean;
  showBottomCharts?: boolean;
}

export default function DashboardViz({ showTopCharts, showBottomCharts }: DashboardVizProps) {
  if (showTopCharts) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-violet-700/30 bg-black/20 p-3">
          <div className="mb-1 text-xs font-semibold text-violet-200">CV Accuracy</div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cvData} margin={{ left: -20, top: 5, right: 5, bottom: 5 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="fold" stroke="#c4b5fd" fontSize={10} />
                <YAxis domain={[0.7, 0.85]} stroke="#c4b5fd" fontSize={10} />
                <RTooltip contentStyle={{ background: "#0b0b0c", border: "1px solid rgba(139,92,246,.3)", color: "#e9d5ff", fontSize: "12px" }} />
                <Line type="monotone" dataKey="score" stroke="#a78bfa" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-violet-700/30 bg-black/20 p-3">
          <div className="mb-1 text-xs font-semibold text-violet-200">Feature Importance</div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={featData} margin={{ left: -20, top: 5, right: 5, bottom: 5 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="feature" stroke="#c4b5fd" fontSize={10} />
                <YAxis stroke="#c4b5fd" fontSize={10} />
                <RTooltip contentStyle={{ background: "#0b0b0c", border: "1px solid rgba(139,92,246,.3)", color: "#e9d5ff", fontSize: "12px" }} />
                <Bar dataKey="importance" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }

  if (showBottomCharts) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-xl border border-violet-700/30 bg-black/20 p-3">
          <div className="mb-1 text-xs font-semibold text-violet-200">Sobreviventes por sexo</div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={survivalBySex} dataKey="value" nameKey="name" innerRadius={20} outerRadius={50} paddingAngle={3}>
                  {survivalBySex.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Legend wrapperStyle={{ fontSize: "10px" }} />
                <RTooltip contentStyle={{ background: "#0b0b0c", border: "1px solid rgba(139,92,246,.3)", color: "#e9d5ff", fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-violet-700/30 bg-black/20 p-3">
          <div className="mb-1 text-xs font-semibold text-violet-200">Sobreviventes por classe</div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={survivalByClass} margin={{ left: -20, top: 5, right: 5, bottom: 5 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="pclass" stroke="#c4b5fd" fontSize={10} />
                <YAxis stroke="#c4b5fd" fontSize={10} />
                <RTooltip contentStyle={{ background: "#0b0b0c", border: "1px solid rgba(139,92,246,.3)", color: "#e9d5ff", fontSize: "12px" }} />
                <Bar dataKey="survived" fill="#34d399" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-violet-700/30 bg-black/20 p-3">
          <div className="mb-1 text-xs font-semibold text-violet-200">Distribuição por idade</div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageDistribution} margin={{ left: -20, top: 5, right: 5, bottom: 5 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="age" stroke="#c4b5fd" fontSize={10} />
                <YAxis stroke="#c4b5fd" fontSize={10} />
                <RTooltip contentStyle={{ background: "#0b0b0c", border: "1px solid rgba(139,92,246,.3)", color: "#e9d5ff", fontSize: "12px" }} />
                <Bar dataKey="count" fill="#60a5fa" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-violet-700/30 bg-black/20 p-3">
          <div className="mb-1 text-xs font-semibold text-violet-200">Métricas do modelo</div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modelMetrics} margin={{ left: -20, top: 5, right: 5, bottom: 5 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="metric" stroke="#c4b5fd" fontSize={10} />
                <YAxis domain={[0.7, 0.8]} stroke="#c4b5fd" fontSize={10} />
                <RTooltip contentStyle={{ background: "#0b0b0c", border: "1px solid rgba(139,92,246,.3)", color: "#e9d5ff", fontSize: "12px" }} />
                <Bar dataKey="value" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
