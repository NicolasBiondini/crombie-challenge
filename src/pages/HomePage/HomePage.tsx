import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import SectionResults from "../../components/SectionResults/SectionResults";
import { getData } from "../../utils/getData";

import "./HomePage.css";
import Loader from "../../components/Loader/Loader";

type Props = {};

const HomePage = (props: Props) => {
  const initialInfo: justInfo = { count: 0, pages: 0, next: null, prev: null };
  const initialCharacters: character[] = [];

  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(initialInfo);
  const [characters, setCharacters] = useState(initialCharacters);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (info.next !== null) {
      const data = await getData(info.next);
      if (data.info !== undefined && data.results !== undefined) {
        setCharacters((prevState) => [...prevState, ...data.results]);
        setInfo(data.info);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getData();
      if (data.info !== undefined && data.results !== undefined) {
        setCharacters(data.results);
        setInfo(data.info);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Header tittle="Listado de personajes" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <SectionResults characters={characters} />
          <button className="button" onClick={(e) => handleClick(e)}>
            Cargar más
          </button>
        </>
      )}
    </>
  );
};

export default HomePage;
