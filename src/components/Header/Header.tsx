import Searcher from "../Searcher/Searcher";

import "./Header.css";

type Props = {
  tittle: string;
};

const Header = ({ tittle }: Props) => {
  return (
    <header className="header">
      <h1>{tittle}</h1>
      <Searcher />
    </header>
  );
};

export default Header;
