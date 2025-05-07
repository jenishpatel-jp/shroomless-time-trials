import { render, screen, userEvent } from '@testing-library/react-native';
import AddTime from '@/components/timeTrialBoard/AddTime';

describe('AddTime', () => {

    const mockProps = {
        map: 'testMap',
        handleAddTime: jest.fn(),
        setTrigger: jest.fn(),
        addTime: jest.fn(),
    };

    const user = userEvent.setup();

    beforeEach(() => {
        render(<AddTime {...mockProps} />);
    });

    test('renders the input field with correct placeholder', () => {
        const input = screen.getByPlaceholderText('0:00.000');
        expect(input).toBeOnTheScreen();
    });
    
    test('formats input text to 0:123.456', async () => {
        const input = screen.getByPlaceholderText('0:00.000');
        await user.type(input, '012345');
        expect(input.props.value).toBe('0:12.345');
    });

    test('clears input when empty string is typed', async () => {
        const input = screen.getByPlaceholderText('0:00.000');
        await user.type(input, '012345');
        await user.clear(input);
        expect(input.props.value).toBe('');
    });

    test('calls handleAddTime with correct arguments on AddButton press', async () => {
        const input = screen.getByPlaceholderText('0:00.000');
        await user.type(input, '012345');

        const button = screen.getByRole('button');
        await user.press(button);

        expect(mockProps.handleAddTime).toHaveBeenCalledWith(
            mockProps.map,
            '0:12.345',
            mockProps.setTrigger,
            mockProps.addTime
        );
    });
});