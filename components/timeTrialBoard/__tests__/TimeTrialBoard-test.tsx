import { render, screen } from "@testing-library/react-native";
import TimeTrialBoard from "../TimeTrialBoard";

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
        expect(screen.getByText("testMap")).toBeOnTheScreen();
        expect(screen.getByText("00:00.000")).toBeOnTheScreen();
    });

});