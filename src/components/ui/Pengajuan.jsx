import { useState } from "react";
import Syarat from "./Syarat";

const Pengajuan = ({ url, syarat, title, fileName, children, isDisplay }) => {
  const [showPreview, setShowPreview] = useState(false);

  const handlerDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName ? fileName : "";
    link.click();
  };

  const handlerPreview = () => {
    setShowPreview((prev) => !prev);
  };

  return (
    <div className="container-pengajuan order-1 md:order-3">
      <Syarat
        syarat={syarat}
        title={title}
        handlerDownload={handlerDownload}
        handlerPreview={handlerPreview}
        showPreview={showPreview}
        url={url}
        children={children}
      />

      <div className="card-pengajuan order-3 md:order-1">
        <h2 className="text-xl text-slate-800 font-semibold mb-8">
          Informasi Pengaju
        </h2>
        <form className="flex flex-col gap-4" action="">
          <input
            className="input-pengajuan"
            type="text"
            placeholder="Title"
          />
          <input
            type="text"
            className="input-pengajuan"
            placeholder="deskirpsi"
          />
          {!isDisplay && <input type="file" className="input-pengajuan" />}      
          <button className="text-sm bg-yellow-500 text-slate-900 border-transparent hover:bg-transparent hover:border-slate-900 transition-colors duration-animation border-2 font-[500] px-4 cursor-pointer py-1 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pengajuan;
