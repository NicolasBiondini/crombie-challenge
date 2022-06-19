import Card from "../Card/Card";

import "./SectionResults.css";

type Props = {
  characters: character[];
};

const SectionResults = ({ characters }: Props) => {
  return (
    <section className="section-results">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </section>
  );
};

export default SectionResults;
