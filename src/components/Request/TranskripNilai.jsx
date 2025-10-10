import { transkripNilai } from "../../utils/constant"
import Pengajuan from '../ui/Pengajuan.jsx'

const TranskripNilai = () => {
  const { syarat, title } = transkripNilai;
  return (
    <Pengajuan syarat={syarat} title={title} isDisplay={true} />
  )
}

export default TranskripNilai