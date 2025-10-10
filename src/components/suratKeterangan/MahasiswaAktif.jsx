import Pengajuan from "../ui/Pengajuan";
import { pengajuanMahasiswaAktif } from "../../utils/constant";

const MahasiswaAktif = () => {
  const { syarat, title, url, fileName } = pengajuanMahasiswaAktif;
 return (
    <Pengajuan url={url} syarat={syarat} title={title} fileName={fileName} />
 )
  
}

export default MahasiswaAktif