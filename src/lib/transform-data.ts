import { BinFeature, BinFeatureCollection } from "../../global";
import { timestampCompareAscending } from './bin-sort-functions';

export const timeSeriesForSerial = (
    serial: number,
    collections: BinFeatureCollection[]
): BinFeature[] => collections
    .map(getFeatureBySerial(serial))
    .filter(exists)
    .sort(timestampCompareAscending);


const exists = (item: any): item is any => item !== undefined && item !== null;

const getFeatureBySerial = (serial: number) =>
    (collection: BinFeatureCollection) =>
        collection.features.find(f => f.properties.serial_num === serial);