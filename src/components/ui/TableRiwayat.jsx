import { objectDataDummy } from "../../utils/constant";
import { Dot } from "lucide-react";

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
              <td className="px-4 border-b flex justify-center">
                {item.status === "success" ? (
                  <Dot className="text-green-700" size={50} />
                ) : item.status === "menunggu" ? (
                  <Dot size={50} className="text-yellow-500" />
                ) : (
                  <Dot size={50} className="text-red-500" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRiwayat;
