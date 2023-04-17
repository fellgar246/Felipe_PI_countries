import { useState } from 'react';
import { validation, typeOptions, difficultyOptions } from './validation';
import styles from "./Form.module.css";

const Form = () => {

    const [height, setHeight] = useState('530px');
    const [errorButton, setErrorButton] = useState(false);

    const [activity, setActivity] = useState({
        name: '',
        type: '',
        difficulty: '',
        duration: '',
        season:'',
        country:[],
    })
    // TODO: validacion de duracion cuando es cero
    //TODO: CSS cambiar el tamaño del formulario cuando no hay errores
    //TODO: button darle effecto hover flex grow
    const [errors, setErrors] = useState({
        name: '',
        type: '',
        difficulty: '',
        duration: '',
        season:'',
        country:[],
    })

    const handleInput = (event) => {
        const { name, value } = event.target
        if(errors){
            setHeight('620px')
        }
        if(Object.entries(errors).length <= 4){
            setHeight('600px')
        }
        if(Object.entries(errors).length <= 2){
            setHeight('530px')
        }
        setActivity({
            ...activity,
            [name]: value
        })
        setErrors(
            validation({
                ...activity,
                [name]: value
            })
        )
        setErrorButton(false)
      
    }
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(Object.entries(errors).length === 0){             
            if(activity.country.length > 1) activity.country = activity.country.split(',');
            
            await fetch( "http://localhost:3001/activities",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(activity)
                }
            ); 
            console.log("Success:", activity);
            setActivity({ 
                name: '',
                type: '',
                difficulty: '',
                duration: '',
                season:'',
                country:[],
            })
        }else{
            setErrorButton(true)
        }
    }

    const container = {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '57px',
        display: 'flex',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        flexDirection: 'column',
        height: `${height}`,
        flexShrink: '3',
        left: '-180px',
        position: 'relative',
        top: '80px',
        width: '490px',
    };


  return (
    <div style={container}>
      <h2 className={styles.title}>Create a new activity</h2>
      <h3 className={styles.subtitle}>on your favorite country</h3>
      {errorButton && <p className={styles.errorButton}>
                All fields must be filled out   
        </p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container_division}>
          <label className={styles.label}>Activity Name</label>
          <input
            type="text"
            name="name"
            value={activity.name}
            onChange={handleInput}
            className={styles.inputLarge}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.container_subdivision}>
          <div className={styles.container_subdivision_m}>
            <label className={styles.label}>Type of activity</label>
            <select
              name="type"
              value={activity.type}
              onChange={handleInput}
              className={styles.inputMedium}
            >
              <option disabled="" value="">
                Choose a type
              </option>
              {typeOptions.map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.type && <p className={styles.error}>{errors.type}</p>}
          </div>
          <div className={styles.container_subdivision_s}>
            <label className={styles.label}>Duration</label>
            <input
              type="number"
              name="duration"
              value={activity.duration}
              onChange={handleInput}
              className={styles.inputShort}
            />
            {errors.duration && (
              <p className={styles.error}>{errors.duration}</p>
            )}
          </div>
        </div>

        <div className={styles.container_subdivision}>
          <div className={styles.container_subdivision_m}>
            <label className={styles.label}>Season</label>
            <select
              name="season"
              value={activity.season}
              onChange={handleInput}
              className={styles.inputMedium}
            >
              <option disabled="" value="">
                Choose a season
              </option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
            {errors.season && <p className={styles.error}>{errors.season}</p>}
          </div>
          <div className={styles.container_subdivision_s}>
            <label className={styles.label}>Difficulty</label>
            <select
              name="difficulty"
              value={activity.difficulty}
              onChange={handleInput}
              className={styles.inputShort}
            >
              <option disabled="" value="">
                Choose difficulty
              </option>
              {difficultyOptions.map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
            {errors.difficulty && (
              <p className={styles.error}>{errors.difficulty}</p>
            )}
          </div>
        </div>

        <div className={styles.container_division}>
          <label className={styles.label}>Country/Countries</label>
          <input
            type="text"
            name="country"
            value={activity.country}
            onChange={handleInput}
            className={styles.inputLarge}
          />
          {errors.country && <p className={styles.error}>{errors.country}</p>}
        </div>
        <button type="submit" className={styles.button}>
          <span className={styles.button_text}>create</span>
        </button>
      </form>
    </div>
  );
}

export default Form