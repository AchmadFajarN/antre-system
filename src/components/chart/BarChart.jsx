import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Transkripsi nilai',
    uv: 7,
  },
  {
    name: 'Pengajuan Sempro',
    uv: 5,
  },
  {
    name: 'Mahasiswa Aktif',
    uv: 2,
  },
  {
    name: 'Judul Skripsi',
    uv: 3,
  },
  {
    name: "Pengantar Kerja Praktik",
    uv: 2
  },
  {
    name: "Judul Skripsi",
    uv: 1
  }
];

// #endregion
const SimpleBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', height: "22vh", aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" style={{fontSize: "10px"}} />
      <YAxis width="auto" style={{fontSize: "10px"}} />
      <Tooltip />
      <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle stroke="purple" />} />
    </BarChart>
  );
};

export default SimpleBarChart;