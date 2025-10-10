import Pengajuan from "../ui/Pengajuan"
import { pengajuanCuti } from "../../utils/constant"

const KeteranganCuti = () => {
  const { url, syarat, title, fileName } = pengajuanCuti;
  return (
    <Pengajuan url={url} syarat={syarat} title={title} fileName={fileName} />
  )
}

export default KeteranganCuti