import { Link } from 'react-router'
import Underline from './Underline'

const ListLink = ({ data, title }) => {
  return (
   <div className="w-full lg:pl-90 xl:pl-100 2xl:pl-140 xl:pr-8 py-20 flex justify-start items-start flex-col min-h-screen">
        <h1 className="font-semibold text-slate-800 xl:text-2xl">{ title }</h1>
        <Underline />
        <div className="grid grid-cols-2 xl:grid-cols-4 mt-4 gap-4 md:gap-8">
            {
                data.map((data, index) => (
                    <Link key={index} to={data.path} className={`${data.color} shadow-xl`}>{ data.content }</Link>
                ))
            }
        </div>
    </div>
  )
}

export default ListLink