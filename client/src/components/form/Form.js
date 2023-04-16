import { useState } from 'react';
import { validation, typeOptions, difficultyOptions } from './validation';
import styles from "./Form.module.css";

const Form = () => {

    const [activity, setActivity] = useState({
        name: '',
        type: '',
        difficulty: '',
        duration: '',
        season:'',
        country:[],
    })
    // TODO: Agregar Validaciones
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
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        activity.country = activity.country.split(',')
            
        const response = await fetch( "http://localhost:3001/activities",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(activity)
            }
        ); 
        console.log("Success:", activity);
   
    }


  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Create a new activity</h2>
        <h3 className={styles.subtitle}>on your favorite  country</h3>
      <form onSubmit={handleSubmit} className={styles.form}>

        <label>
            Activity Name
        </label>
        <input
            type='text'
            name='name'
            value={activity.name}
            onChange={handleInput}
        />

        <label>
            Type of activity
        </label>
        <select 
            name='type' 
            value={activity.type}  
            onChange={handleInput}
        >
            <option disabled="">Choose a type</option>
            { typeOptions.map(type => (
                <option value={type} key={type}>{type}</option>
            ))}
        </select> 

        <label>
            Duration
        </label>
        <input
            type='number'
            name='duration'
            value={activity.duration}
            onChange={handleInput}
        />

        <label>
            Season
        </label>
        <select 
            name='season' 
            value={activity.season}  
            onChange={handleInput}
        >
            <option disabled="">Choose a season</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
        </select> 

        <label>
            Difficulty
        </label>
        <select 
            name='difficulty' 
            value={activity.difficulty}  
            onChange={handleInput}
        >
            <option disabled="">Choose a difficulty</option>
            { difficultyOptions.map(num => (
                <option value={num} key={num}>{num}</option>
            ))}
        </select> 


        <label>
            Country/Countries
        </label>
        <input
            type='text'
            name='country'
            value={activity.country}
            onChange={handleInput}
        />

        <button type='submit'>
            <span>create</span>
        </button>

      </form>
    </div>
  )
}

export default Form