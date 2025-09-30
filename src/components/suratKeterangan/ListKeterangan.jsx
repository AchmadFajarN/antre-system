import ListLink from "../ui/ListLink";
import { kategoriKeterangan } from "../../utils/constant";

const ListKeterangan = () => {
  return (
    <>
    <ListLink data={kategoriKeterangan} title={'Silahkan pilih jenis keterangan'} />
    </>
  );
};

export default ListKeterangan;
