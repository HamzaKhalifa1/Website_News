import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
    it("should render Header component correctly", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const logoElement = screen.getByAltText("LOGO");
        expect(logoElement).toBeInTheDocument();

        const homeLink = screen.getByText(/Home Page/i);
        expect(homeLink).toBeInTheDocument();

        const createNewBlogsLink = screen.getByText(/Create new Blogs/i);
        expect(createNewBlogsLink).toBeInTheDocument();

        const languageButton = screen.getByText(/Language/i);
        expect(languageButton).toBeInTheDocument();
    });
});
