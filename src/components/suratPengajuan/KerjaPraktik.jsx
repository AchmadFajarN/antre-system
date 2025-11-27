import Pengajuan from "../ui/Pengajuan";
import { judulKerjaPraktik } from "../../utils/constant";
import LinkTranskrip from "../ui/LinkTranskrip";
import { useState } from "react";
import { useNavigate } from "react-router";
import { requestPengajuan } from "../../utils/action";

const KerjaPraktik = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const { syarat, url, title, fileName } = judulKerjaPraktik;

  const submitHandler = async (e) => {
    e.preventDefault();
    await requestPengajuan("Judul Kerja Praktik", message, file, navigate);
  };
  return (
    <Pengajuan
      url={url}
      syarat={syarat}
      message={message}
      setMessage={setMessage}
      submitHandler={submitHandler}
      title={title}
      fileName={fileName}
      setFile={setFile}
      children={
        <LinkTranskrip
          path={"/dashboard/request/transkripnilai"}
          content={" Link pengajuan transkrip nilai"}
        />
      }
    />
  );
};

export default KerjaPraktik;
