import { Link } from "react-router-dom";
import styles from "./Card.module.css";


const Card = (props) => {
  return (
    <div className={styles.container}>

      <Link to={`/detail/${props.id}`}>
        <img 
          src={props.image} 
          alt={props.name} 
          className={styles.image}
        />
        <h3 className={styles.title}>
          {props.name}
        </h3>
        <h3 className={styles.subtitle}>
          {props.continent?.replace(/^\s*{?\s*"?(.*?)"?\s*}?\s*$/, '$1')}
        </h3>
      </Link>
       
    </div>
  )
}

export default Card