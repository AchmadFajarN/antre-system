import { Pie, PieChart, Cell } from "recharts";
import { useEffect, useState } from "react";
import { getStatusPengajuan } from "../../utils/api/dashboardValue";

export default function StraightAnglePieChart({ isAnimationActive = true }) {
  const [label, setLabel] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    getStatusPengajuan(setLabel, setData);
  }, []);
  
  const renderLabel = ({ name, value }) => `${name}: ${value}`;

  return (
    <div className="bg-white shadow-md rounded-md px-4 pt-2">
      <h2 className="mb-4 font-semibold">{label}</h2>
      <PieChart style={{ width: "100%", height: "20vh", paddingBottom: "8px" }}>
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
    </div>
  );
}
