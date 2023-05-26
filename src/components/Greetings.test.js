import { render, screen } from "@testing-library/react";
import Greeting from "./Greetings";

describe("Greeting Component", () => {
  test("renders Hello world as a text", () => {
    render(<Greeting />);

    const helloElement = screen.getByText("Hello World", { exact: false });
    expect(helloElement).toBeInTheDocument();
  });
});
