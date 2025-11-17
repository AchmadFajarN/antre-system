import CardDashboard from "../ui/CardDashboard";
import SimpleAreaChart from "../chart/AreaChart";
import StraightAnglePieChart from "../chart/PieChart";
import SimpleBarChart from "../chart/BarChart";

const MainAdmin = () => {
  const dataSummery = [
    {
      dataKey: "Jumlah pengajuan saat ini",
      value: 20,
    },
    {
      dataKey: "Pengajuan di proses",
      value: 10,
    },
    {
      dataKey: "Pengajuan di tolak",
      value: 5,
    },
    {
      dataKey: "Pengajuan sukses",
      value: 5,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {dataSummery.map((data) => {
          return <CardDashboard title={data.dataKey} value={data.value} />;
        })}
      </div>
      <div className="xl:max-h-[60vh] mt-8 grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 gap-4 mb-10">
        <div className="bg-white xl:col-span-2 xl:row-span-2 shadow-md rounded-md px-4 pt-2">
          <h2 className="mb-4 font-semibold md:text-xl">Distribusi Pengajuan</h2>
          <SimpleAreaChart />
        </div>
        <div className="bg-white shadow-md rounded-md px-4 pt-2">
          <h2 className="mb-4 font-semibold">Distribusi Status Pengajuan</h2>
          <StraightAnglePieChart />
        </div>
        <div className="bg-white  shadow-md rounded-md px-4 pt-2">
          <h2 className="mb-4 font-semibold">Distribusi Pengajuan</h2>
          <SimpleBarChart />
        </div>
      </div>
    </>
  );
};

export default MainAdmin;
