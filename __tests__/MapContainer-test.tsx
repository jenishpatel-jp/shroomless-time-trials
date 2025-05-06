import { render, screen, userEvent } from "@testing-library/react-native";
import MapContainer from "@/components/mapContainer/mapContainer";

describe("MapContainer", () => {

    const mockProps = {
        image: require("../../../assets/images/Map.png"),
        name: "testMap",
    };

    beforeEach(() => {
        render(<MapContainer {...mockProps} />);
    });

});