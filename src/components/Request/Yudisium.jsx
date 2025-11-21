import Pengajuan from "../ui/Pengajuan";
import { yudisium } from "../../utils/constant";
import { useState } from "react";
import { useNavigate } from "react-router";
import { requestPengajuan } from "../../utils/action";

const Yudisium = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    await requestPengajuan("yudisium", message, navigate);
  };
  const { title, syarat, url, fileName } = yudisium;
  return (
    <Pengajuan
      message={message}
      setMessage={setMessage}
      submitHandler={submitHandler}
      title={title}
      syarat={syarat}
      url={url}
      fileName={fileName}
    />
  );
};

export default Yudisium;
