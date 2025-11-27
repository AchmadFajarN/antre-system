import { getUserDetail } from "../../../utils/api/user";
import { getRequest } from "../../../utils/api/request";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import CardDashboard from "../../ui/CardDashboard";
import { TablePengajuan } from "../request/Requets";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState(null);
  const [request, setRequest] = useState([]);
  const { id: userId } = useParams();

  useEffect(() => {
    const getDetailUser = async () => {
      // ambil user detail lalu ambil request berdasarkan id
      const token = localStorage.getItem("tokenKey");
      const result = await getUserDetail(token, userId);
      if (result.status === "success") {
        setUserDetail(result.data);
      }

      const requestResult = await getRequest(token, userId);
      if (requestResult.status === "success") {
        setRequest(requestResult.data);
      }
    };

    getDetailUser();
  }, [userId]);

  const totalRequest = request.length;
  const successRequests = request.filter(
    (req) => req.status === "completed"
  ).length;
  const pendingRequest = request.filter(
    (req) => req.status === "pending"
  ).length;
  const rejectedRequest = request.filter(
    (req) => req.status === "rejected"
  ).length;

  return (
    <>
      <div className="mt-8 bg-white rounded-md shadow-md px-2 py-6">
        <div className="flex items-center gap-4">
          <div className="size-30 rounded-full overflow-hidden">
            <img
              src={userDetail?.url_photo}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">{userDetail?.username}</h1>
            <p>{userDetail?.nim}</p>
            <div className="mt-2 text-gray-500">
              <p className="text-sm">{userDetail?.email}</p>
              <p className="text-sm">{userDetail?.phone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <CardDashboard title={"Jumlah Pengajuan"} value={totalRequest} />
        <CardDashboard title={"Pengajuan Berhasil"} value={successRequests} />
        <CardDashboard title={"Pengajuan Proses"} value={pendingRequest} />
        <CardDashboard title={"Pengajuan Ditolak"} value={rejectedRequest} />
      </div>
      <div className="my-10">
        <TablePengajuan requests={request} />
      </div>
    </>
  );
};

export default UserDetail;
