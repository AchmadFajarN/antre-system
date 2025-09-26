import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
const Register = () => {
  return (
    <div className="grid grid-rows-4 md:grid-cols-3 md:grid-rows-1 h-screen">
      <div className="row-span-3 md:col-span-2 flex justify-center items-center relative">
        <Link to={'/'} className="absolute left-6 top-6"><ArrowLeft /></Link>
        <form className="shadow-xl bg-gray-200 text-gray-800 rounded-xl px-6 md:w-100 py-8">
          <div className="flex flex-col mb-4 gap-1 font-semibold">
            <input type="email" className="input" placeholder="Email" />
          </div>
          <div className="flex flex-col mb-4 gap-2 font-semibold">
            <input type="text" className="input" placeholder="Username" />
          </div>
          <div className="flex flex-col mb-4 gap-2 font-semibold">
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="button-yellow w-full cursor-pointer rounded-md">Register</button>
          <div className="flex gap-1 mt-4 text-sm font-semibold justify-center items-center">
            <p className="">Sudah punya akun?</p>
            <Link className="text-yellow-600" to={'/auth'}>Login disini</Link>
          </div>
        </form>
      </div>
      <div className="bg-slate-400"></div>
    </div>
  );
};

export default Register;
