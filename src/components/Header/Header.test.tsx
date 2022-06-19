import { render, screen } from "@testing-library/react";

import Header from "./Header";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn().mockImplementation(() => ({})),
}));

describe("Header component mount", () => {
  beforeEach(() => render(<Header tittle="first tittle" />));

  it("must display the name", () => {
    const name = screen.getByText("first tittle");
    expect(name).toBeInTheDocument();
  });
});
