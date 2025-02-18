import styles from "../styles/Navigation.module.css";
import { Link } from "react-router";
import { useTheme } from "../hooks/useTheme";

const NavigationComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="/">ContextAPI užduotys</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="dashboard/first-task">Pirma uzduotis</Link>
          </li>
          <li>
            <Link to="dashboard/second-task">Antra užduotis</Link>
          </li>
          <li>
            <Link to="dashboard/third-task">Trečia užduotis</Link>
          </li>
          <li>
            <a>Ketvirta uzduotis</a>
          </li>
          <li>
            <a>Penkta uzduotis</a>
          </li>

          <li>
            <a onClick={toggleTheme}>
              Pakeisti tema:
              {theme === "light" ? " 🌙 " : " ☀️ "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationComponent;
