import { useNavigate } from "react-router-dom";

export const Card = ({ id, description, title, language, dificultad }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/reto/${id}`);
  };

  return (
    <div>
      <h1 onClick={handleClick} style={{ color: "red", cursor: "pointer" }}>
        {title}
      </h1>
      <h1>{description}</h1>
      <h1>{language}</h1>
      <h1>{dificultad}</h1>
    </div>
  );
};
