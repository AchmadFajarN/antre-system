import Pengajuan from "../ui/Pengajuan";
import { judulKerjaPraktik } from "../../utils/constant";
import LinkTranskrip from "../ui/LinkTranskrip";

const KerjaPraktik = () => {
  const { syarat, url, title, fileName } = judulKerjaPraktik;
  return (
    <Pengajuan
      url={url}
      syarat={syarat}
      title={title}
      fileName={fileName}
      children={<LinkTranskrip path={"/dashboard/request/transkripnilai"} content={' Link pengajuan transkrip nilai'} />}
    />
  );
};

export default KerjaPraktik;
