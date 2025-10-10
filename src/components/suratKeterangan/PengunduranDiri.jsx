import Pengajuan from "../ui/Pengajuan"
import { pengunduranDiri } from "../../utils/constant"

const PengunduranDiri = () => {
  const { title, syarat, url, fileName } = pengunduranDiri
  return (
    <Pengajuan url={url} syarat={syarat} title={title} fileName={fileName} />
  )
}

export default PengunduranDiri