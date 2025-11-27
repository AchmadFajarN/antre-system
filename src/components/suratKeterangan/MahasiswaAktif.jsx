import Pengajuan from "../ui/Pengajuan";
import { pengajuanMahasiswaAktif } from "../../utils/constant";
import { useState } from "react";
import { useNavigate } from "react-router";
import { requestPengajuan } from "../../utils/action";

const MahasiswaAktif = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    await requestPengajuan("Mahasiswa Aktif", message, file, navigate);
  };

  const { syarat, title, url, fileName } = pengajuanMahasiswaAktif;
  return (
    <Pengajuan
      submitHandler={submitHandler}
      message={message}
      setMessage={setMessage}
      url={url}
      syarat={syarat}
      title={title}
      fileName={fileName}
      setFile={setFile}
    />
  );
};

export default MahasiswaAktif;
