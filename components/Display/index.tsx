import styles from "./style.module.css";

const Display = ( {content} ) => {
  return (
    <div className={styles.display}>
      {content}
    </div>
  )
}

export default Display;