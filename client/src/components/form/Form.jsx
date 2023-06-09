import { useState } from 'react';
import { validation, typeOptions, difficultyOptions, countriesOptions } from './validation';
import styles from "./Form.module.css";
import addIcon from "../../assets/icons/add.svg";
import minusIcon from "../../assets/icons/minus.svg";

const Form = () => {
  const [height, setHeight] = useState("610px");
  const [errorMessage, setErrorMessage] = useState(false);
  const [okMessage, setOkMessage] = useState(false);
  const [countryList, setCountryList] = useState([{ country: "" }]);
  const [finalList, setFinalList] = useState([]);

  const [activity, setActivity] = useState({
    name: "",
    type: "",
    difficulty: "",
    duration: "00:00",
    season: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    type: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const handleCountryAdd = () => {
    setCountryList([...countryList, { country: "" }]);
  };

  const handleCountryRemove = (index) => {
    const list = [...countryList];
    list.splice(index, 1);
    setCountryList(list);
  };

  const handleCountryChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...countryList];
    list[index][name] = value;

    const result = list.map((e) => Object.values(e)).flat();

    if (result.filter((e) => e === "").length === 1) {
      errors.country = "A country is required"
    } else if (result.length !== new Set(result).size) { 
      errors.country = "No countries duplicated allowed"
    } else {
      delete errors.country}

    setFinalList(result.filter((e) => e !== ""));
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (Object.entries(errors).length >= 4) setHeight("700px");

    setActivity({
      ...activity,
      [name]: value,
    });
    setErrors(
      validation({
        ...activity,
        [name]: value,
      })
    );
  
    if (Object.entries(errors).length < 4) setHeight("700px");
    if (Object.entries(errors).length <= 2) setHeight("650px");
    if (Object.entries(errors).length <= 1) setHeight("610px");
    setErrorMessage(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.entries(errors).length === 0 && finalList.length) {
      activity.country = finalList;
      //http://localhost:3001
      //https://felipepicountries-production.up.railway.app
      await fetch("https://felipepicountries-production.up.railway.app/activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(activity),
      });
      setActivity({
        name: "",
        type: "",
        difficulty: "",
        duration: "",
        season: "",
      });
      setCountryList([{ country: "" }]);
      setErrorMessage(false);
      setOkMessage(true)
      setTimeout(() => {
          setOkMessage(false)
      }, 2000)

    } else {
      setErrorMessage(true);
    }
  };

  const container = {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "57px",
    display: "flex",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    flexDirection: "column",
    height: `${height}`,
    left: "-180px",
    position: "relative",
    top: "80px",
    width: "460px",
  };

  return (
    <div style={container}>
      <h2 className={styles.title}>Create a new activity</h2>
      <h3 className={styles.subtitle}>on your favorite country</h3>
      {errorMessage && (
        <p className={styles.errorMessage}>All fields must be filled out</p>
      )}
      {okMessage && (
        <p className={styles.okMessage}>Successfully Sent!</p>
      )}
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
              type="time"
              name="duration"
              max="12:00"
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

        <div className={styles.container_division_country}>
          <label className={styles.label}>Country/Countries</label>
          {errors.country && <p className={styles.error}>{errors.country}</p>}
          <div className={styles.container_subdivision_country}>
            {countryList.map((singleCountry, index) => (
              <div key={index} className={styles.container_element_country}>
                <select
                  name="country"
                  value={singleCountry.country}
                  className={styles.inputMedium_Country}
                  onChange={(e) => handleCountryChange(e, index)}
                >
                  <option disabled="" value="">
                    Choose Country
                  </option>
                  {countriesOptions.map((country) => (
                    <option value={country.id} key={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <>
                  {countryList.length - 1 === index &&
                    countryList.length < 10 && (
                      <button
                        type="button"
                        onClick={handleCountryAdd}
                        className={styles.countryButton}
                      >
                        <img
                          src={addIcon}
                          alt="addIcon"
                          className={styles.addIcon}
                        ></img>
                      </button>
                    )}
                </>
                <>
                  {countryList.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleCountryRemove(index)}
                      className={styles.countryButton}
                    >
                      <img
                        src={minusIcon}
                        alt="minusIcon"
                        className={styles.minusIcon}
                      ></img>
                    </button>
                  )}
                </>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className={styles.button}>
          <span className={styles.button_text}>create</span>
        </button>
      </form>
    </div>
  );
};

export default Form