import Card from "../card/Card";
//import styles from "./Cards.module.css";

const Cards = (props) => {
    const {countries} = props;

  return (
    <div>
        {
            countries.map(({ id, name, image, continent}) => {
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