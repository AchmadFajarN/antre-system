import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// #region Sample data
const data = [
  {
    name: '01',
    uv: 2,
  },
  {
    name: '02',
    uv: 7,
  },
  {
    name: '03',
    uv: 1,
  },
  {
    name: '04',
    uv: 5,
  },
  {
    name: '05',
    uv: 3,
  },
  {
    name: '06',
    uv: 1,
  },
  {
    name: '07',
    uv: 1,
  },
];

// #endregion
const SimpleAreaChart = () => {
  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '90vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" style={{fontSize: "10px"}} />
      <YAxis width="auto" style={{ fontSize: "10px" }} />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default SimpleAreaChart;