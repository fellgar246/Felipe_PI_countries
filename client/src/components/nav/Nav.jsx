import { NavLink } from 'react-router-dom';
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={styles.header}>
        <NavLink to={"/home"}>
            <h2 className={styles.logo}>Henry Countries</h2>
        </NavLink>
        <div className={styles.nav}>
            <NavLink  to={"/home"} >
                <h3 className={styles.links}>Home</h3>
            </NavLink>
            <NavLink to={"/form"}>
                <h3 className={styles.links}>Form</h3>
            </NavLink>
        </div>
    </header>
  )
}

export default Nav;