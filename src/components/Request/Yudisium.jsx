import Pengajuan from "../ui/Pengajuan"
import { yudisium } from "../../utils/constant"

const Yudisium = () => {
  const { title, syarat, url, fileName } = yudisium
  return (
    <Pengajuan title={title} syarat={syarat} url={url} fileName={fileName} />
  )
}

export default Yudisium