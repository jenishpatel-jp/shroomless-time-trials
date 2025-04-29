import { render } from '@testing-library/react-native';
import TabOneScreen from '../app/(tabs)/index';
import { oldMaps } from '@/utils/oldMapUtils';

const sum = (a: number, b: number) => a + b;


describe('TabOneScreen', () => {

    test('renders items correctly', () => {
        const { getByText } = render(<TabOneScreen />);
        expect(getByText('Mario Kart Stadium')).toBeVisible();
    });
    

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});