import { timeSeriesForSerial } from "../src/lib/transform-data";
import { data } from "./__data__/raw-data";

describe('Time series transformation', () => {
    test('Incorrect serial', () => {
        expect(timeSeriesForSerial(2, data)).toEqual([]);
    });

    test('Serial = 1510830', () => {
        console.log(timeSeriesForSerial(1510830, data));
        expect(timeSeriesForSerial(1510830, data)).toEqual([]);
    });
});