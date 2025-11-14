import Pengajuan from "../ui/Pengajuan";
import { pengunduranDiri } from "../../utils/constant";
import { useState } from "react";
import { requestPengajuan } from "../../utils/action";
import { useNavigate } from "react-router";

const PengunduranDiri = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { title, syarat, url, fileName } = pengunduranDiri;
  const submitHandler = async (e) => {
    e.preventDefault();
    await requestPengajuan("Pengunduran diri", message, navigate);
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
    />
  );
};

export default PengunduranDiri;
