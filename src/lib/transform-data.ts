import { BinFeature, BinFeatureCollection, LocationGroup } from "bins";
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

export const groupByLocation = (binFeatures: BinFeatureCollection) => {
    const regexp = /(.*)\s([GR])\s(.*)/;
    return binFeatures.features.reduce((locations: Record<string, LocationGroup>, feature) => {
        const detail = feature.properties.bin_detail;
        const matches = regexp.exec(detail);
        const [_, location, type, region] = matches!;
        const binType = type === 'G' ? 'garbage' : 'recycling'
        if (!locations[location]) {
            locations[location] = {
                region,
                location,
                [binType]: feature
            }
        } else {
            locations[location][binType] = feature;
        }
        return locations;
    }, {});
};

export const fillPercentage = (feature: BinFeature) => Math.round(100 * feature.properties.fill_lvl / feature.properties.fill_thres)