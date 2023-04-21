import { Form, Nav } from "../../components";
import styles from "./FormPage.module.css";

const FormPage = () => {
  //TODO: responsive mobile
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Form />
      </div>
      
    </>
  )
}

export default FormPage