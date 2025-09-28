import ListLink from "../ui/ListLink"
import { kategoriPenugasan } from "../../utils/constant"
import Button from "../ui/Button"
import CancelRequesrContent from "../ui/CancelRequesrContent"

const ListPenugasan = () => {
  return (
    <>
      <ListLink data={kategoriPenugasan} title="Silahkan pilih kategori penugasan" />
    </>
  )
}

export default ListPenugasan