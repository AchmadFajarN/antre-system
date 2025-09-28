import ListLink from "../ui/ListLink"
import { kategoriPermintaan } from "../../utils/constant"

const Request = () => {

  return (
    <ListLink data={kategoriPermintaan} title={'Silahkan pilih apa yang mau diminta'} />
  )
}

export default Request