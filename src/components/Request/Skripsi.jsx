import { sidangSkripsi } from "../../utils/constant";
import Pengajuan from "../ui/Pengajuan";
import LinkTranskrip from "../ui/LinkTranskrip";
import { useState } from "react";
import { useNavigate } from "react-router";
import { requestPengajuan } from "../../utils/action";

const ChildrenSempro = () => {
  return (
    <>
      <LinkTranskrip
        path={"/dashboard/request/transkripnilai"}
        content={" Link pengajuan transkrip nilai"}
      />
      <LinkTranskrip
        path={"dashboard/request/suratpenugasan/dosentugasakhir"}
        content={"Link pengajuan surat penugasan dosen"}
      />
    </>
  );
};

const Skripsi = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    await requestPengajuan("Sidang skripsi", message, navigate);
  };
  const { syarat, title, url, fileName } = sidangSkripsi;
  return (
    <Pengajuan
      message={message}
      setMessage={setMessage}
      submitHandler={submitHandler}
      syarat={syarat}
      url={url}
      fileName={fileName}
      title={title}
      isDisplay={false}
      children={<ChildrenSempro />}
    />
  );
};

export default Skripsi;
