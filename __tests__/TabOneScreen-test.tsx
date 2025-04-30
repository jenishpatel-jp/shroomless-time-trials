import { render } from '@testing-library/react-native';
import TabOneScreen from '../app/(tabs)/index';
import { oldMaps } from '@/utils/oldMapUtils';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


// Mock oldMaps data
jest.mock('@/utils/oldMapUtils', () => ({
    oldMaps: [
      { name: 'A', image: { uri: 'mock1' } },
      { name: 'B', image: { uri: 'mock2' } },
      { name: 'C', image: { uri: 'mock3' } },
      { name: 'D', image: { uri: 'mock4' } },
    ],
  }));

// Mock router
jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));


describe('TabOneScreen', () => {
    test('renders 4 map images', ()=> {

        const { getByTestId, getAllByTestId, toJSON } = render(<TabOneScreen />);
        const images = getAllByTestId('map-image');
        console.log(JSON.stringify(toJSON(), null, 2));
        expect(images.length).toBe(4);
    })
});