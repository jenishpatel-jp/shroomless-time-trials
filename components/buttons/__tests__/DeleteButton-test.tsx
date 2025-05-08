import { render, screen, userEvent } from '@testing-library/react-native';
import DeleteButton from '@/components/buttons/DeleteButton';


jest.mock('@expo/vector-icons/FontAwesome6', () => {
    const React = require('react');
    const { View } = require('react-native');
    return {
      __esModule: true,
      default: (props: any) => <View {...props} />,
    };
  });

describe('DeleteButton', () => {
    const mockProps = {
        time: '1:23.456',
        handleDeleteTime: jest.fn(),
        setTrigger: jest.fn(),
        deleteTime: jest.fn(),
    };

    const user = userEvent.setup();

    beforeEach(() => {
        render(<DeleteButton {...mockProps} />);        
    });

    test('Button renders on screen', () => {
        const button = screen.getByRole('button');
        expect(button).toBeOnTheScreen();
    });

    test('Button press triggers handleDeleteTime', async () => {
        const button = screen.getByRole('button');
        await user.press(button);
        expect(mockProps.handleDeleteTime).toHaveBeenCalledWith(
            mockProps.time,
            mockProps.setTrigger,
            mockProps.deleteTime
        );
    });

});