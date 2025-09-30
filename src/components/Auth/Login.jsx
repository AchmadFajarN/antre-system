import login from "../../assets/login.svg";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(false);


  return (
    <div className="grid grid-cols-1 xl:grid-cols-5  bg-slate-100 h-screen">
      <div className="flex flex-col gap-4 xl:col-span-2 justify-center items-center">
        <div className="flex flex-col text-center mb-4">
          <h1 className="text-4xl font-bold text-slate-800">SIPEKAD</h1>
          <p className="font-semibold text-sm text-slate-50 bg-yellow-500 rounded-md border px-2">Sistem Pengajuan Akademis</p>
        </div>
        <form className="shadow-xl bg-slate-50 text-gray-800 rounded-xl px-6 md:w-100 py-8">
          <div className="flex flex-col mb-4 gap-2 font-semibold">
            <input onChange={(e) => setNim(e.target.value) } value={nim} type="text" className="input" placeholder="NIM" />
          </div>
          <div className="mb-4 gap-2 relative font-semibold">
            <input onChange={(e) => setPassword(e.target.value)} value={password} type={hiddenPassword ? 'text':'password'} className="input w-full" placeholder="Password" />
            <div onClick={() => setHiddenPassword(!hiddenPassword)} className="absolute right-4 text-slate-500 cursor-pointer bottom-2">
              {
                hiddenPassword ? <Eye /> : <EyeOff />
              }
            </div>
          </div>
          <button className="button-yellow-home w-full cursor-pointer rounded-md">
            Login
          </button>
        </form>
      </div>
      <div className="bg-slate-50 h-screen hidden xl:col-span-3 xl:block shadow-xl md:p-20">
         <img src={ login } alt="" className="w-full h-full" />
      </div>
    </div>

  );
};

export default Login;
