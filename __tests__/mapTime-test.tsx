import { render, screen } from "@testing-library/react-native";
import MapTime from "../components/timeTrialBoard/MapTime";

describe("MapTime", () => {
    test("renders correctly with given time", () => {
        const time = "00:01:23";
        render(<MapTime time={time} />);

        // use screen.getByText to find the text in the rendered component
        const timeText = screen.getByRole("text", { name: time });
        expect(timeText).toBeTruthy(); // Check if the text is present

    });
});