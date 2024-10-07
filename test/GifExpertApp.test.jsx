import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { AddCategory } from '../src/components';

jest.mock('../src/components/AddCategory');
jest.mock('../src/components/GifGrid', () => ({
    GifGrid: ({ category }) => <div>{category}</div>
}));

describe('Pruebas en <GifExpertApp />', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const newCategory = 'Naruto';
    const existingCategory = 'One Punch';

    test('debe renderizar las categorías iniciales', () => {
        // Arrange
        const builder = new CategoryBuilder();
        const categories = builder.build();

        // Act
        render(<GifExpertApp />);

        // Assert
        categories.forEach(category => {
            expect(screen.getByText(category));
        });
    });

    test('debe agregar una nueva categoría', () => {
        // Arrange
        const builder = new CategoryBuilder().withCategories([]);
        AddCategory.mockImplementation(({ onNewCategory }) => (
            <button onClick={() => onNewCategory(newCategory)}>Add Category</button>
        ));

        // Act
        render(<GifExpertApp />);
        fireEvent.click(screen.getByText('Add Category'));

        // Assert
        expect(screen.getByText(newCategory));
    });

    test('no debe agregar una categoría existente', () => {
        // Arrange
        AddCategory.mockImplementation(({ onNewCategory }) => (
            <button onClick={() => onNewCategory(existingCategory)}>Add Category</button>
        ));

        // Act
        render(<GifExpertApp />);
        fireEvent.click(screen.getByText('Add Category'));

        // Assert
        expect(screen.getAllByText(existingCategory).length).toBe(1);
    });

});

class CategoryBuilder {
    constructor() {
        this.categories = ['Dragon Ball', 'One Punch', 'Samurai X'];
    }

    withCategories(categories) {
        this.categories = categories; // Establece las categorías proporcionadas
        return this;
    }

    build() {
        return this.categories; // Devuelve las categorías
    }
}
