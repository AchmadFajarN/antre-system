import ListLink from '../ui/ListLink'
import { kategoriPengajuan } from '../../utils/constant'

const ListPengajuan = () => {
  return (
    <>
        <ListLink data={kategoriPengajuan} title={'Silahkan pilih jenis surat pengajuan'} />
    </>
  )
}

export default ListPengajuan