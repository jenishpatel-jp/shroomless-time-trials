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

});