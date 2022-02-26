import { useNavigate } from "react-router-dom";

import styles from "../../styles/Card.module.css";

export const Card = ({ id, description, title, language, dificultad }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/retos/${id}`);
  };

  return (
    <>
      <div className={styles["contaner_copy"]}>
        <h1>{title}</h1>
        <p className={styles["descrip"]}>{description}</p>
        <p className={styles["lan"]}>{language}</p>
        <p>{dificultad}</p>
      </div>
    </>
  );
};
