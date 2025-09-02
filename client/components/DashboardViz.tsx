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

export default function DashboardViz() {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-violet-700/30 bg-black/20 p-4">
        <div className="mb-2 text-sm font-semibold text-violet-200">Titanic - CV Accuracy por fold</div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={cvData} margin={{ left: -20 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="fold" stroke="#c4b5fd" />
              <YAxis domain={[0.7, 0.95]} stroke="#c4b5fd" />
              <RTooltip contentStyle={{ background: "#0b0b0c", border: "1px solid rgba(139,92,246,.3)", color: "#e9d5ff" }} />
              <Line type="monotone" dataKey="score" stroke="#a78bfa" strokeWidth={2} dot={{ r: 3, stroke: "#34d399", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-xl border border-violet-700/30 bg-black/20 p-4">
        <div className="mb-2 text-sm font-semibold text-violet-200">Titanic - Importância de features</div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={featData} margin={{ left: -20 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="feature" stroke="#c4b5fd" />
              <YAxis stroke="#c4b5fd" />
              <RTooltip contentStyle={{ background: "#0b0b0c", border: "1px solid rgba(139,92,246,.3)", color: "#e9d5ff" }} />
              <Legend />
              <Bar dataKey="importance" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
