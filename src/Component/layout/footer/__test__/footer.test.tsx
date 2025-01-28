import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
    it("should render Footer component correctly", () => {
        render(<Footer />);

        expect(screen.getByText(/Hamza Khalifa/i)).toBeInTheDocument();
        expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
        expect(screen.getByText(/engHamzaKha@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByText(/0597956633/i)).toBeInTheDocument();
        expect(screen.getByText(/Jenin\/Haifa Street/i)).toBeInTheDocument();
    });
});
