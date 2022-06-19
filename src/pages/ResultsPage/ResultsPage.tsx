import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import SectionResults from "../../components/SectionResults/SectionResults";

import "./ResultsPage.css";
import { getData } from "../../utils/getData";
import Loader from "../../components/Loader/Loader";

type Props = {};

const ResultsPage = (props: Props) => {
  const initialCharacters: character[] = [];
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState(initialCharacters);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const data = await getData(
        `https://rickandmortyapi.com/api/character/?name=${searchParams.get(
          "filter"
        )}`
      );
      if (data.info !== undefined && data.results !== undefined) {
        setCharacters(data.results);
        setLoading(false);
      } else {
        setCharacters([]);
      }
    })();
  }, [searchParams]);

  return (
    <>
      <Header tittle="Resultados" />
      {loading ? (
        <Loader />
      ) : characters.length === 0 ? (
        <h2>No se han encontrado resultados. Intenta nuevamente.</h2>
      ) : (
        <SectionResults characters={characters} />
      )}
    </>
  );
};

export default ResultsPage;
