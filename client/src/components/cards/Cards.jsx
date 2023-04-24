import Card from "../card/Card";
import styles from "./Cards.module.css";
import nextIcon from "../../assets/icons/next.svg";
import prevIcon from "../../assets/icons/prev.svg";

const Cards = (props) => {

  const perPage = 10
  const maxPage = props.filteredCountries().length / perPage

  const nextPage = () => {
      props.setPageInput(parseInt(props.pageInput) + 1);
      props.setCurrentPage(parseInt(props.currentPage) + 1)
  }

  const previousPage = () => {
      props.setPageInput(parseInt(props.pageInput) - 1);
      props.setCurrentPage(parseInt(props.currentPage) - 1)
  }

  const onKeyDown = ({keyCode, target}) => {
      if(keyCode === 13){
          const value = parseInt(target.value);
          props.setCurrentPage(value)
          if( value < 1 || value > Math.ceil(maxPage) || isNaN(value)){
              props.setCurrentPage(1);
              props.setPageInput(1);
          }else{
              props.setCurrentPage(value);
          }
      }
  }
  
  const onChange = ({target}) => {
      props.setPageInput(target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerPagination}>
        <button 
            disabled={props.currentPage <= 1 }
            onClick={previousPage}
            className={styles.buttonPrevNext}>
            <img
                src={prevIcon}
                alt="prevIcon"
                className={styles.prevIcon}
              ></img>
        </button>
        <div className={styles.pageContainer}>
          <input
              onChange={onChange}
              onKeyDown={onKeyDown}
              name='page'
              autoComplete='off'
              value={props.pageInput} 
              className={styles.input}
          />
          <p className={styles.pageText}> 
          de {Math.ceil(maxPage)}
          </p>
        </div>
        <button 
            disabled={props.currentPage >= Math.ceil(maxPage)}
            onClick={nextPage}
            className={styles.buttonPrevNext}>
             <img
                  src={nextIcon}
                  alt="nextIcon"
                  className={styles.nextIcon}
            ></img>
        </button>
      </div>
      <div className={styles.containerCards} >
        {
          props.filteredCountries()
                .slice((props.currentPage-1) * perPage, (props.currentPage-1) * perPage + perPage )
                .map(({ id, name, image, continent}) => {
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
    </div>
  
  )
}

export default Cards;