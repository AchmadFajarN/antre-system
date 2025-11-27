import Pengajuan from "../ui/Pengajuan";
import { keteranganLulus } from "../../utils/constant";
import { useState } from "react";
import { requestPengajuan } from "../../utils/action";
import { useNavigate } from "react-router";

const KeteranganLulus = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { syarat, title } = keteranganLulus;
  const submitHandler = async (e) => {
    e.preventDefault();
    await requestPengajuan("Keterangan lulus", message, null, navigate);
  };
  return (
    <Pengajuan
      submitHandler={submitHandler}
      message={message}
      setMessage={setMessage}
      syarat={syarat}
      title={title}
      isDisplay={true}
    />
  );
};

export default KeteranganLulus;
