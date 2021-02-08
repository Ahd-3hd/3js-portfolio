import styles from "./index.module.scss";

const Title = () => {
  return (
    <div className={styles.container}>
      <h1>
        Hi!
        <br />
        My Name is <span>Ahd</span>
      </h1>
    </div>
  );
};

export default Title;
