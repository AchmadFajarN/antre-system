import { Trash, Pen } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllUserForAdmin } from "../../../utils/api/user";
import { Link } from "react-router";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem("tokenKey");
      const result = await getAllUserForAdmin(token);
      console.log(result)
      setUsers(result);
    };

    getUsers();
  }, []);

  const prperty = [
    "image",
    "username",
    "nim",
    "fullname",
    "email",
    "phone",
    "action",
  ];
  return (
    <>
      <div className="px-4 py-6 mt-8 bg-white shadow-md w-full">
        <h1 className="font-semibold md:text-xl uppercase">User</h1>
        <span className="inline-block w-8 h-1 bg-gray-800"></span>
        <div className="mt-8 py-4 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {prperty.map((data) => (
                  <th
                    key={data}
                    className="px-3 md:px-6 py-2 md:py-4 text-left text-sm font-semibold uppercase tracking-wide hidden md:table-cell"
                  >
                    {data}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((value) => (
                <tr
                  key={value.id}
                  className="flex flex-row hover:shadow-md cursor-pointer transition-all transition-duration justify-between gap-4 items-center md:table-row mb-4 md:mb-0 md:border-b-4 border-gray-600 md:border-none md:p-0"
                >
                  <td className="md:px-6 py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                    <Link to={`/admin/user/${ value.id }`} className="block size-16 rounded-full overflow-hidden">
                      {value?.url_photo ? (
                        <img
                          className="w-full h-full object-center object-cover"
                          src={value.url_photo}
                          alt="image user"
                        />
                      ) : (
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://avatar.iran.liara.run/public/8"
                          alt=""
                        />
                      )}
                    </Link>
                  </td>
                  <td className="md:px-6 hidden py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                    <Link to={`/admin/user/${ value.id }`}>
                      {value.username}
                    </Link>
                  </td>
                  <td className="md:px-6 py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                    <Link to={`/admin/user/${ value.id }`}>
                      {value.nim}
                    </Link>
                  </td>
                  <td className="md:px-6 hidden py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                    <Link to={`/admin/user/${ value.id }`}>
                      {value.full_name}
                    </Link>
                  </td>
                  <td className="md:px-6 py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                    <Link to={`/admin/user/${ value.id }`}>
                      {value.email}
                    </Link>
                  </td>
                  <td className="md:px-6 py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                    <Link to={`/admin/user/${ value.id }`}>
                      {value.phone}
                    </Link>
                  </td>
                  <td className="md:px-6 py-2 md:py-4 text-left text-xs md:text-[16px] font-medium tracking-wide md:table-cell">
                    <div className="flex block gap-2">
                      <button className="cursor-pointer hover:bg-red-400 group p-1 bg-red-200 transition-color transition-duration rounded-md">
                        <Trash className="text-red-500 transition-color transition-duration group-hover:text-red-800" />
                      </button>
                      <button className="cursor-pointer transition-color transition-duration hover:bg-yellow-400 group p-1 rounded-md bg-yellow-300">
                        <Pen className="text-yellow-600 transition-color transition-duration group-hover:text-yellow-800" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
