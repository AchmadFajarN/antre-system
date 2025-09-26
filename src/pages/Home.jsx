import React from "react";
import landing from "../assets/landing.svg";
import Button from "../components/ui/Button";
const Home = () => {
  return (
    <section className="max-h-screen w-full">
      <div className="md:grid-cols-2 grid px-4 py-3">
        <div className="flex justify-center items-center">
          <img src={landing} alt="" className="size-80 md:w-full md:h-full" />
        </div>
        <div className="flex justify-center items-center flex-col gap-4 text-slate-800">
          <h1 className="text-2xl xl:text-4xl text-center font-semibold">
            Layanan Tanpa Ribet, Antrian Jadi Rapi
          </h1>
          <p className="text-center mb-4 font-[500]">Ajukan Sistem Pengajuan Akademi mudah dan praktis</p>
          <Button
            path={"/auth/register"}
            content={"Coba Sekarang"}
            className={"text-lg md:text-xl xl:text-2xl rounded-full"}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
