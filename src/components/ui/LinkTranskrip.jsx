import { Link } from "react-router";

const LinkTranskrip = ({ path, content }) => {
  return (
    <li className="list-none mt-4">
      <Link
        className="text-sm bg-teal-800 text-white hover:text-teal-800 border-transparent hover:bg-transparent hover:border-teal-800 transition-colors duration-animation border-2 font-[500] px-4 cursor-pointer pt-1 pb-2  rounded-md"
        to={path}
      >
       { content }
      </Link>
    </li>
  );
};

export default LinkTranskrip;
