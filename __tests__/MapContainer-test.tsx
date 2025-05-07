import { screen } from "@testing-library/react-native";
import MapContainer from "@/components/mapContainer/mapContainer";
import { renderRouter } from "expo-router/testing-library";
import { View } from "react-native";

describe("MapContainer", () => {

    const mockProps = {
        image: "testImage",
        name: "testMap",
    };

    test("renders the map image", () => {
        renderRouter(
            {
                index: () => <MapContainer {...mockProps} />,
                "map/[mapName]": () => <View testID="map-image"/>,
 
            },
            {
                initialUrl: "/",
            }
        )

        const image = screen.getByTestId("map-image");
        expect(image).toBeOnTheScreen();
    });

   

});