import { Link } from "react-router-dom";


const Card = (props) => {
  return (
    <>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <h3>{props.continent?.replace(/^\s*{?\s*"?(.*?)"?\s*}?\s*$/, '$1')}</h3>
      </Link>
       
    </>
  )
}

export default Card