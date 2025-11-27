import { judulSkripsi } from "../../utils/constant";
import Pengajuan from "../ui/Pengajuan";
import LinkTranskrip from "../ui/LinkTranskrip";
import { useState } from "react";
import { requestPengajuan } from "../../utils/action";
import { useNavigate } from "react-router";

const JudulSkripsi = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [file, setFIle] = useState(null);
  const { syarat, title } = judulSkripsi;

  const submitHandler = async (e) => {
    e.preventDefault();
    await requestPengajuan("Judul Skripsi", message, file, navigate);
  };

  return (
    <Pengajuan
      submitHandler={submitHandler}
      message={message}
      setMessage={setMessage}
      syarat={syarat}
      title={title}
      setFile={setFIle}
      children={
        <LinkTranskrip
          path={"/dashboard/request/transkripnilai"}
          content={" Link pengajuan transkrip nilai"}
        />
      }
    />
  );
};

export default JudulSkripsi;
