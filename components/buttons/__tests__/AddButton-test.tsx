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

    const user = userEvent.setup();

    beforeEach(() => {
        render(<AddButton {...mockProps} />);
    });

    test('It renders the button with correct text', () => {
        const button = screen.getByRole('button', { name: /Add/i });
        expect(button).toBeOnTheScreen();
    });

    test('Add text has correct style', () => {
        const buttonText = screen.getByText('Add');
        expect(buttonText).toHaveStyle({
            color: '#2CBDFE',
            fontSize: 20,
            textAlign: 'center',
        });
    });

    test('Add Button calls addTimeAndReset on press', async () => {
        const button = screen.getByRole('button', { name: /Add/i });
        await user.press(button);

        expect(mockProps.handleAddTime).toHaveBeenCalledWith(
            mockProps.map,
            mockProps.time,
            mockProps.setTrigger,
            mockProps.addTime
        );
        expect(mockProps.setTime).toHaveBeenCalledWith("");

    });

});