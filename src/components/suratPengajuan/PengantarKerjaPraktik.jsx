import { pengantarKp } from "../../utils/constant";
import LinkTranskrip from "../ui/LinkTranskrip";
import Pengajuan from "../ui/Pengajuan";
import { requestPengajuan } from "../../utils/action";
import { useState } from "react";
import { useNavigate } from "react-router";

const PengantarKerjaPraktik = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { syarat, url, fileName, title } = pengantarKp;

  const submitHandler = async(e) => {
    e.preventDefault();
    await requestPengajuan("Pengantar Kerja Praktik", message, navigate);
  }
  return (
    <Pengajuan
      submitHandler={submitHandler}
      message={message}
      setMessage={setMessage}
      syarat={syarat}
      url={url}
      fileName={fileName}
      title={title}
      children={
        <LinkTranskrip
          path={"/dashboard/request/transkripnilai"}
          content={" Link pengajuan transkrip nilai"}
        />
      }
    />
  );
};

export default PengantarKerjaPraktik;
