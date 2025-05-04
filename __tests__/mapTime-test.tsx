import { render, screen } from "@testing-library/react-native";
import MapTime from "../components/timeTrialBoard/MapTime";

describe("MapTime", () => {

    //testing if the element is on screen
    test("renders a time", () => {
        const times = ["00:00.000", "01:00:23", "3:43.123"];

        times.forEach((time) => {
            const { unmount } = render(<MapTime time={time} />);
            expect(screen.getByText(time)).toBeOnTheScreen();
            unmount();
        });
    });
});