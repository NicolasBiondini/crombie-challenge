export const getData = async (
  query: string = "https://rickandmortyapi.com/api/character"
): Promise<info<character[]>> => {
  try {
    const response = await fetch(query);
    const data: info<apiCharacter[]> = await response.json();

    let parsedResults = data.results?.map((character) => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
        status: character.status,
        species: character.species,
      };
    });

    const finalData = { ...data, results: parsedResults };
    return finalData;
  } catch (error) {
    console.log(error);
    return {
      info: {
        count: 0,
        pages: 0,
        next: "",
        prev: null,
      },
      results: [],
    };
  }
};
