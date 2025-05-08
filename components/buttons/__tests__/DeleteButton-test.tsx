import { render, screen, userEvent } from '@testing-library/react-native';
import DeleteButton from '@/components/buttons/DeleteButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';

//Mock vector icons to avoid test rendering issues
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

    test('Button renders with the correct icon', () => {
        const button = screen.getByRole('button');
        expect(button).toBeOnTheScreen();
    });

});