import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        const inputValue = 'Hola Mundo';
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);

    });
})
