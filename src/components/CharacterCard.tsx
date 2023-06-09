import { Link } from "react-router-dom";
import { Character } from "../types";

type Props = {
  character: Character;
};

export const CharacterCard = ({ character }: Props) => {
  const { status, species } = character;
  return (
    <Link className="character-card" to={"/"}>
      <img src={character.image} alt={`character face`} />
      <h2>{character.name}</h2>
      <p>
        <span className={`status-${status.toLowerCase()} active`}></span>
        <span>
          {status} - {species}
        </span>
      </p>
    </Link>
  );
};
