import { pengantarKp } from "../../utils/constant"
import LinkTranskrip from "../ui/LinkTranskrip"
import Pengajuan from "../ui/Pengajuan"

const PengantarKerjaPraktik = () => {
  const { syarat, url, fileName, title } = pengantarKp;
  return (
    <Pengajuan syarat={syarat} url={url} fileName={fileName} title={title} children={<LinkTranskrip />} />
  )
}

export default PengantarKerjaPraktik