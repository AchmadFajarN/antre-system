import Pengajuan from "../ui/Pengajuan";
import { pengajuanCuti } from "../../utils/constant";
import { useState } from "react";
import { useNavigate } from "react-router";
import { requestPengajuan } from "../../utils/action";

const KeteranganCuti = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [file, setFIle] = useState(null);
  const { url, syarat, title, fileName } = pengajuanCuti;

  const submitHandler = async (e) => {
    e.preventDefault();
    await requestPengajuan("Keterangan Cuti", message, file, navigate);
  };

  return (
    <Pengajuan
      submitHandler={submitHandler}
      message={message}
      setMessage={setMessage}
      url={url}
      syarat={syarat}
      title={title}
      fileName={fileName}
      setFile={setFIle}
    />
  );
};

export default KeteranganCuti;
