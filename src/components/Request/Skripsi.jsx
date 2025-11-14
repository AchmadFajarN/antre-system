import { sidangSkripsi } from "../../utils/constant";
import Pengajuan from "../ui/Pengajuan";
import LinkTranskrip from "../ui/LinkTranskrip";

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
   const { syarat, title, url, fileName } = sidangSkripsi;
  return (
    <Pengajuan
      syarat={syarat}
      url={url}
      fileName={fileName}
      title={title}
      isDisplay={false}
      children={<ChildrenSempro />}
    />
  );
}

export default Skripsi