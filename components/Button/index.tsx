import styles from "./style.module.css";

const Button = ({ value, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {value}
    </div>
  );
}

export default Button;