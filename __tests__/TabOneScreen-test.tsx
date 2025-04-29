import { render } from '@testing-library/react-native';
import TabOneScreen from '../app/(tabs)/index';
import { oldMaps } from '@/utils/oldMapUtils';
import { Text } from 'react-native';

const sum = (a: number, b: number) => a + b;

describe('TabOneScreen', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});