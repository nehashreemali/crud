import { KeyboardArrowDown } from "@material-ui/icons";
import styles from "./CountryTable.module.css";
const orderby = (country, direction) => {
  if (direction === "asc") {
    return [...country].sort((a, b) => (a.population > b.population ? 1 : -1));
  }
  if (direction === "desc") {
    return [...country].sort((a, b) => (a.population > b.population ? -1 : 1));
  }
  return country;
};
const CountryTable = ({ country }) => {
  const orderCountry = orderby(country, "desc");
  console.log("hi", country);
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
          <div className={styles.heading_arrow}>
          <KeyboardArrowDown  />
          </div>
        </button>
        <button className={styles.heading_population}>
          <div>Population</div>
          <div className={styles.heading_arrow}>
          <KeyboardArrowDown/>
          </div>
        </button>
      </div>
      {orderCountry.map((count) => {
        return (
          <div className={styles.row}>
            <div className={styles.name}>{count.name}</div>
            <div className={styles.population}>{count.population}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryTable;
