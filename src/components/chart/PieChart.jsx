import { Pie, PieChart, Cell } from 'recharts';

// Sample data
const data = [
  { name: 'Diproses', value: 10, color: '#0ea5e9' },
  { name: 'Ditolak', value: 5, color: '#ef4444' },
  { name: 'Sukses', value: 5, color: '#16a34a' },
];

export default function StraightAnglePieChart({ isAnimationActive = true }) {
  // Custom label untuk tiap slice
  const renderLabel = ({ name, value }) => `${name}: ${value}`;

  return (
    <PieChart
      
      style={{ width: '100%', height: "20vh", paddingBottom: "8px" }}
    >
      {/* Label Judul Chart */}
     

      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        label={renderLabel}
        isAnimationActive={isAnimationActive}
      >
        {data.map((entry, index) => (
          <Cell key={`slice-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
}
