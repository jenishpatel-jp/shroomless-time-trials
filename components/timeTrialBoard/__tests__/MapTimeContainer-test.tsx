import { render, screen, userEvent } from '@testing-library/react-native';
import MapTimeContainer from '../MapTimeContainer';

jest.mock('@expo/vector-icons/FontAwesome6', () => {
    const React = require('react');
    const { View } = require('react-native');
    return {
      __esModule: true,
      default: (props: any) => <View {...props} />,
    };
  });

describe('MapTimeContainer', () => {

    const mockProps = {
        time: '1:23.456',
        handleDeleteTime: jest.fn(),
        setTrigger: jest.fn(),
        deleteTime: jest.fn(),
    };

    const user = userEvent.setup();

    beforeEach(() => {
        render(<MapTimeContainer {...mockProps} />);
    });

    test('renders MapTime and DeleteButton', () => {
        const mapTime = screen.getByText(mockProps.time);
        expect(mapTime).toBeOnTheScreen();

        const deleteButton = screen.getByRole('button', { name: /delete/i });
        expect(deleteButton).toBeOnTheScreen();
    });

});


