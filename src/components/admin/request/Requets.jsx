import { Trash, Pen } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllRequestForAdmin } from "../../../utils/api/request";
import { Link } from "react-router";

const RequestAdmin = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getAllRequest = async () => {
      const token = localStorage.getItem("tokenKey");
      const result = await getAllRequestForAdmin(token);
      console.log(result);
      if (result.status === "success") {
        setRequests(result.data);
      }
    };

    getAllRequest();
  }, []);
  return <TablePengajuan requests={requests} />;
};

export const TablePengajuan = ({ requests }) => {
  const dataKey = ["No", "Antrian", "Type", "Created At", "status", "action"];
  return (
    <div className="px-4 py-6 mt-8 bg-white rounded-md shadow-md w-full">
      <h1 className="font-semibold md:text-xl uppercase">Pengajuan</h1>
      <span className="inline-block w-8 h-1 bg-gray-800"></span>
      <div className="mt-8 overflow-x-auto py-8">
        <table className="w-full">
          <thead>
            <tr>
              {dataKey.map((data) => (
                <th
                  key={data}
                  className="px-3 md:px-6 py-2 md:py-4 text-left text-sm font-semibold uppercase tracking-wide hidden md:table-cell"
                >
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {requests.map((value, index) => (
              <tr
                key={index}
                className="flex flex-row hover:shadow-md cursor-pointer transition-all transition-duration justify-between gap-4 items-center md:table-row mb-4 md:mb-0 md:border-b-4 border-gray-600 md:border-none md:p-0"
              >
                <td className="md:px-6 py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                  <Link to={`/admin/pengajuan/${value.id}`}>{index + 1}</Link>
                </td>
                <td className="md:px-6 py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                  <Link to={`/admin/pengajuan/${value.id}`}>{value.queue}</Link>
                </td>
                <td className="md:px-6 py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                  <Link to={`/admin/pengajuan/${value.id}`}>{value.type}</Link>
                </td>
                <td className="md:px-6 hidden py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                  <Link to={`/admin/pengajuan/${value.id}`}>
                    {new Date(value.updated_at).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </Link>
                </td>
                <td className="md:px-6 uppercase py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      value.status === "completed" &&
                      "bg-green-300 text-green-800"
                    } ${
                      value.status === "pending" &&
                      "bg-yellow-400 text-yellow-800"
                    } ${
                      value.status === "canceled" && "bg-red-400 text-red-800"
                    }`}
                  >
                    {value.status}
                  </span>
                </td>
                <td className="md:px-6 py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                  <div className="flex gap-2">
                    <button className="cursor-pointer hover:bg-red-400 group p-1 bg-red-200 transition-color transition-duration rounded-md">
                      <Trash className="text-red-500 transition-color transition-duration group-hover:text-red-800" />
                    </button>
                    <button className="cursor-pointer transition-color transition-duration hover:bg-yellow-400 group p-1 rounded-md bg-yellow-300">
                      <Pen className="text-yellow-600 transition-color transition-duration group-hover:text-yellow-800" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestAdmin;
