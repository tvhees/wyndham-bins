import { timeSeriesForSerial } from "../src/lib/transform-data";
import { data } from "./__data__/raw-data";
import { _1510830 } from "./__data__/time-series";

describe('Time series transformation', () => {
    test('Incorrect serial', () => {
        expect(timeSeriesForSerial(2, data)).toEqual([]);
    });

    test('Serial = 1510830', () => {
        expect(timeSeriesForSerial(1510830, data)).toEqual(_1510830);
    });
});