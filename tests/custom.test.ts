import {describe, expect, test} from '@jest/globals';
import Point from '../src/customClass';


describe('Point', () => {
    test('add()', () => {
        let point = new Point(4,5);
        expect(point.add()).toBe(9);
    });

    test('add()', () => {
        let point = new Point(411,5);
        expect(point.add()).toBe(416);
    });
})