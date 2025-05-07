import { render, screen } from "@testing-library/react-native";
import MapTime from "../MapTime";

describe("MapTime", () => {
    
    test("renders a time", () => {
        const times = ["00:00.000", "01:00:23", "3:43.123"];

        times.forEach((time) => {
            const { unmount } = render(<MapTime time={time} />);
            expect(screen.getByText(time)).toBeOnTheScreen();
            unmount();
        });
    });

    test("renders empty time string", () => {
        render(<MapTime time={""} />);
        expect(screen.getByText("")).toBeOnTheScreen();
    });


    test("matches snapshot", () => {
        const tree = render(<MapTime time="00:00.000" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("time has correct style", () => {
        render(<MapTime time="01:23.456" />);
        expect(screen.getByText("01:23.456")).toHaveStyle({
            fontSize: 20,
            fontWeight: "bold",
            color: "#009FE5",
        }); 
    });
})