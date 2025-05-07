import { render, screen, userEvent } from "@testing-library/react-native";
import MapContainer from "@/components/mapContainer/mapContainer";

describe("MapContainer", () => {

    const mockProps = {
        image: "testImage",
        name: "testMap",
    };

    beforeEach(() => {
        render(<MapContainer {...mockProps} />);
    });

    test("renders the map image", () => {
        const image = screen.getByTestId("map-image");
        expect(image).toBeOnTheScreen();
    });


});