import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Container from "../Container";
import "@testing-library/jest-dom";

jest.mock("../../DeleteButton", () => ({ id, onDelete }: { id: number; onDelete: any }) => (
    <button onClick={() => onDelete(id)}>Delete</button>
));

jest.mock("../../EditButton", () => ({ id }: { id: number }) => (
    <button>Edit</button>
));

describe("Container Component", () => {
    const mockOnDelete = jest.fn();
    const props = {
        id: 1,
        title: "Sample Title",
        description: "Sample Description",
        imageUrl: "https://via.placeholder.com/150",
        onDelete: mockOnDelete,
    };

    it("should render the Container component correctly", () => {
        render(<Container {...props} />);

        const imgElement = screen.getByAltText(props.title);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", props.imageUrl);

        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(screen.getByText(props.description)).toBeInTheDocument();

        expect(screen.getByText("Delete")).toBeInTheDocument();
        expect(screen.getByText("Edit")).toBeInTheDocument();
    });

    it("should call onDelete when the DeleteButton is clicked", () => {
        render(<Container {...props} />);

        const deleteButton = screen.getByText("Delete");

        fireEvent.click(deleteButton);

        expect(mockOnDelete).toHaveBeenCalledWith(props.id);
    });
});
