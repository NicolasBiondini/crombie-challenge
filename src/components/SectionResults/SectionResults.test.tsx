import { render, screen } from "@testing-library/react";
import SectionResults from "./SectionResults";

const character: character = {
  name: "Nicolás",
  id: 1,
  image: "",
  status: "Alive",
  species: "Human",
};

const secondCharacter: character = {
  name: "Rick",
  id: 2,
  image: "",
  status: "Dead",
  species: "Alien",
};

describe("Card component mount", () => {
  beforeEach(() =>
    render(<SectionResults characters={[character, secondCharacter]} />)
  );

  it("must render 2 cards", () => {
    const section = screen.getAllByRole("heading");
    expect(section.length).toBe(2);
  });

  it("must display the name", () => {
    const name = screen.getByText("Nicolás");
    expect(name).toBeInTheDocument();
  });

  it("must display the id", () => {
    const id = screen.getByText("#1");
    expect(id).toBeInTheDocument();
  });

  it("must display the image", () => {
    const image = screen.getAllByRole("img");
    expect(image[0]).toHaveAttribute("src", "");
  });

  it("must display the status", () => {
    const status = screen.getByText("Alive");
    expect(status).toBeInTheDocument();
  });

  it("must display the species", () => {
    const species = screen.getByText("Human");
    expect(species).toBeInTheDocument();
  });
});
