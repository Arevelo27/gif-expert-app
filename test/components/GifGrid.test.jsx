import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Prueba en <GifGrid/>', () => {

    const category = 'One Punch';

    test('debe hacer match con el snapshot', () => {

        const { container } = render(<GifGrid category={category} />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el loading inicialmente', () => {

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        // expect(screen.getByText(category));

    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        render(<GifGrid category={category} />);
        screen.debug();
        // expect(screen.getByText(category));

    });


})
