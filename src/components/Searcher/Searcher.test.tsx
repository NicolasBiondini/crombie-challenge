import { render, screen, fireEvent } from "@testing-library/react";

import Searcher from "./Searcher";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn().mockImplementation(() => ({})),
}));

describe("Searcher component mount", () => {
  beforeEach(() => render(<Searcher />));

  it("must display input field", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
  it("must display input value ''", () => {
    const inputValue = screen.getByRole("textbox");
    expect(inputValue).toHaveValue("");
  });
});

describe("Changing state and value", () => {
  it("should be able to change the inputValue state and change the real input value", () => {
    render(<Searcher />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "Nicolás Biondini" },
    });
    expect(input).toHaveValue("Nicolás Biondini");
  });
});

describe("Submit click", () => {
  it("should be deny submit if value.length <= 0", () => {
    render(<Searcher />);
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "" },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
