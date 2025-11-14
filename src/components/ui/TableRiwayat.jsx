import { objectDataDummy } from "../../utils/constant";
import { Dot } from "lucide-react";
import Underline from "./Underline";

const TableRiwayat = () => {

  const data = objectDataDummy();
  const allDataWithCategory = Object.entries(data)
    // eslint-disable-next-line no-unused-vars
    .filter(([_, arr]) => arr)
    .flatMap(([kategori, arr]) =>
      arr.map((item) => ({
        ...item,
        kategori,
        jenis: item.jenis || kategori,
      }))
    );

  const sortedRiwayat = allDataWithCategory.sort(
    (a, b) => new Date(b.tanggal) - new Date(a.tanggal)
  );
  return (
    <>
    <h1 className="text-xl font-semibold text-slate-800">Riwayat Pengajuan</h1>
    <Underline />
    <div className="flex items-center mb-6">
      <span className="inline-block size-3 bg-red-500 rounded-full mr-2"></span>
      <p>: ditolak</p>
      <span className="inline-block size-3 bg-green-700 rounded-full mx-2"></span>
      <p>: diterima</p>
      <span className="inline-block size-3 bg-yellow-500 rounded-full mx-2"></span>
      <p>: diproses</p>
    </div>
    <div className="rounded-lg overflow-hidden shadow-xl">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-slate-900">
            <th className="table-head">Jenis Request</th>
            <th className="table-head hidden md:table-cell">Kategori</th>
            <th className="table-head hidden md:table-cell">Tanggal</th>
            <th className="table-head">Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedRiwayat.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="table-data hidden md:table-cell">{item.jenis}</td>
              <td className="table-data">{item.kategori}</td>
              <td className="table-data hidden md:table-cell">
                {item.tanggal}
              </td>
              <td className="border-b">
                {item.status === "success" ? (
                  <Dot className="text-green-700 mx-auto" size={50} />
                ) : item.status === "menunggu" ? (
                  <Dot size={50} className="text-yellow-500 mx-auto" />
                ) : (
                  <Dot size={50} className="text-red-500 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default TableRiwayat;
