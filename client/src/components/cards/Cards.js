import Card from "../card/Card";
import styles from "./Cards.module.css";

const Cards = (props) => {


  return (
    <div className={styles.container} >
        {
            props.filteredCountries().map(({ id, name, image, continent}) => {
                return <Card 
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    continent={continent}
                />
            })
        }
    </div>
  )
}

export default Cards;