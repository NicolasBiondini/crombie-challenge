type character = {
  id: number;
  name: string;
  image: string;
  status: "Dead" | "Alive" | "unknown";
  species: string;
};

// From Rick and Morty API Docs (Backend)
// https://github.com/afuh/rick-and-morty-api-node/blob/ad68c34/src/interfaces.ts#L52

type apiCharacter = {
  id: number;
  name: string;
  url: string;
  created: string;
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
};

type CharacterLocation = {
  name: string;
  url: string;
};

type justInfo = {
  /** The length of the response */
  count: number;
  /** The amount of pages */
  pages: number;
  /** Link to the next page (if it exists) */
  next: string | null;
  /** Link to the previous page (if it exists) */
  prev: string | null;
};

type info<T> = {
  /**
   * The API will automatically paginate the responses. You will receive up to `20` documents per page.
   */
  info?: {
    /** The length of the response */
    count: number;
    /** The amount of pages */
    pages: number;
    /** Link to the next page (if it exists) */
    next: string | null;
    /** Link to the previous page (if it exists) */
    prev: string | null;
  };
  results: T;
};
