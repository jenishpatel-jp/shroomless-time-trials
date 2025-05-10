import { render, screen } from "@testing-library/react-native";
import TimeTrialBoard from "../TimeTrialBoard";

jest.mock('expo-font', () => ({
    isLoaded: () => true,
    loadAsync: () => Promise.resolve(),
  }));
  
  jest.mock('expo-linear-gradient', () => {
    const { View } = require('react-native');
    return {
      LinearGradient: View,
    };
  });
  
  jest.mock('@expo/vector-icons/FontAwesome6', () => {
    const React = require('react');
    const { View } = require('react-native');
    return {
      __esModule: true,
      default: (props: any) => <View {...props} />,
    };
  });

describe("TimeTrialBoard", () => {

    const mockProps = {
        map: "testMap",
        mapAndTime: {
            testMap: ["00:00.000", "01:00.123", "02:30.456"],
        },
        handleAddTime: jest.fn(),
        handleDeleteTime: jest.fn(),
        setTrigger: jest.fn(),
        addTime: jest.fn(),
        deleteTime: jest.fn(),
    };

    beforeEach(() => {
        render(<TimeTrialBoard {...mockProps} />);
    });

    test("renders TimeTrialBoard", () => {
        const container = screen.getByTestId("time-trial-board-container");
        expect(container).toBeOnTheScreen();
    });

});