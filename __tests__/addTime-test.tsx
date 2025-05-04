import { render, screen } from '@testing-library/react-native';
import AddTime from '@/components/timeTrialBoard/AddTime';

describe('AddTime', () => {

    const mockProps = {
        map: 'testMap',
        handleAddTime: jest.fn(),
        setTrigger: jest.fn(),
        addTime: jest.fn(),
    };

    beforeEach(() => {
        render(<AddTime {...mockProps} />);
    });

    test('renders the input field with correct placeholder', () => {
        const input = screen.getByPlaceholderText('0:00.000');
        expect(input).toBeOnTheScreen();
    });
    
});