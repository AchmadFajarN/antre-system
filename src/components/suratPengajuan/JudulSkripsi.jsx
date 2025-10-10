import { judulSkripsi } from "../../utils/constant"
import Pengajuan from "../ui/Pengajuan"
import LinkTranskrip from "../ui/LinkTranskrip"

const JudulSkripsi = () => {
  const { syarat, title } = judulSkripsi
  return (
    <Pengajuan syarat={syarat} title={title} children={<LinkTranskrip />} />
  )
}

export default JudulSkripsi