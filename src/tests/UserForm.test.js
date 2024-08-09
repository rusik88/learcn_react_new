import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import UserForm from "../components/UserForm";

test('Check Form on elemnts 2 inputs and 1 button', () => {
    render(<UserForm />)

    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')

    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
})