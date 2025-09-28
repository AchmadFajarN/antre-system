import ListLink from "../ui/ListLink";
import { kategoriKeterangan } from "../../utils/constant";

const ListKeterangan = () => {
  return (
    <>
    <div className="">
      <ListLink data={kategoriKeterangan} title={"Pilih Jenis Keterangan"} />
    </div>
    </>
  );
};

export default ListKeterangan;
