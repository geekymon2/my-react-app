import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 My React App/i)).toBeInTheDocument();
  });
});
