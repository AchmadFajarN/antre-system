import CardDashboard from "../ui/CardDashboard";
import StraightAnglePieChart from "../chart/PieChart";
import SimpleBarChart from "../chart/BarChart";
import { useEffect, useState } from "react";
import { getSummeryData } from "../../utils/api/dashboardValue";
import DistribusiPengajuan from "../chart/DistribusiPengajuan";

const MainAdmin = () => {
  const [summery, setSummery] = useState([]);
  useEffect(() => {
    getSummeryData(setSummery);
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {summery.map((data, index) => {
          return (
            <CardDashboard key={index} title={data.label} value={data.value} />
          );
        })}
      </div>
      <div className="xl:max-h-[60vh] mt-8 grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 gap-4 mb-10">
        <DistribusiPengajuan />
        <StraightAnglePieChart />
        <SimpleBarChart />
      </div>
    </>
  );
};

export default MainAdmin;
