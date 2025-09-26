import { Link } from "react-router"

const Button = ({ path, content, className }) => {
  return (
    <Link to={ path } className={` ${ className } button-yellow`}>{ content }</Link>
  )
}

export default Button