const Syarat = ({
  children,
  syarat,
  title,
  handlerDownload,
  handlerPreview,
  showPreview,
  url,
}) => {
  return (
    <div className="card-pengajuan order-2">
      <h2 className="font-semibold mb-8 text-slate-800 text-xl">
        Harap dibaca dengan seksama mengenai persyaratan {title}
      </h2>

      <ul className="flex flex-col gap-4 text-sm font-[500] text-slate-800">
        {syarat.map((syarat, index) => (
          <li key={index}>
            {index + 1}. {syarat}
          </li>
        ))}
      </ul>
      {children && children}
      {url && (
        <div className="flex gap-2 mt-4">
          <button
            onClick={handlerDownload}
            className="text-sm bg-yellow-500 text-slate-900 border-transparent hover:bg-transparent hover:border-slate-900 transition-colors duration-animation border-2 font-[500] px-4 cursor-pointer py-1 rounded-md"
          >
            Unduh berkas
          </button>

          <button
            onClick={handlerPreview}
            className="text-sm bg-slate-800 text-white hover:text-slate-900 hover:bg-transparent hover:border-slate-900 transition-colors duration-animation border-2 border-transparent font-[500] px-4 cursor-pointer py-1 rounded-md"
          >
            {showPreview ? "Tutup pratinjau" : "Lihat berkas"}
          </button>
        </div>
      )}

      {showPreview && (
        <div className="mt-6 border border-slate-300 rounded-lg overflow-hidden shadow-sm">
          <iframe
            src={url}
            title="Preview PDF"
            width="100%"
            height="500px"
            className="rounded-md"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Syarat;
