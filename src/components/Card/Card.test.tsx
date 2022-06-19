import { render, screen } from "@testing-library/react";
import Card from "./Card";

const character: character = {
  name: "Nicolas",
  id: 1,
  image: "",
  status: "Alive",
  species: "Human",
};

describe("Card component mount", () => {
  beforeEach(() => render(<Card character={character} />));

  it("must display the name", () => {
    const name = screen.getByText("Nicolas");
    expect(name).toBeInTheDocument();
  });

  it("must display the id", () => {
    const id = screen.getByText("#1");
    expect(id).toBeInTheDocument();
  });

  it("must display the image", () => {
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "");
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
