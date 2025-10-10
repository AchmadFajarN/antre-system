import Pengajuan from "../ui/Pengajuan"
import { keteranganLulus } from "../../utils/constant"

const KeteranganLulus = () => {
  const { syarat, title } = keteranganLulus
  return (
    <Pengajuan syarat={syarat} title={title} isDisplay={true} />
  )
}

export default KeteranganLulus