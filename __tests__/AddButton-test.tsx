import { render, screen, userEvent, fireEvent } from '@testing-library/react-native';
import AddButton from '@/components/buttons/AddButton'; 

describe('AddButton', () => {

    const mockProps = {
        handleAddTime: jest.fn(),
        time: '1:23.456',
        map: 'testMap',
        setTrigger: jest.fn(),
        setTime: jest.fn(),
        addTime: jest.fn()
    };

    beforeEach(() => {
        render(<AddButton {...mockProps} />);
    });

    // Test to check if the button is rendered correctly
    test('It renders the button with correct text', () => {
        const button = screen.getByRole('button', { name: /Add/i });
        expect(button).toBeOnTheScreen();
    });

    // Test the button press functionality calls the correct function with the right arguments

});