import { BinProperties, LocationGroup } from "bins";
import { fetchRecentData, initialiseDatabaseConnection } from "./firestore";
import { groupByLocation } from "./transform-data";

const BINS_URL =
    "https://data.gov.au/data/dataset/08531201-ac9f-4f5f-bb7e-ac16b1da28b4/resource/15732b49-3e50-40ce-8dfd-0efed18661f4/download/sb_fill_lvel.json";

const db = initialiseDatabaseConnection();

export const fetchHistoricalData = async (): Promise<BinProperties[]> => {
    const historicalData = await fetchRecentData(db);

    const serialNum = 1511209;
    const data = historicalData.flatMap(
        collection => collection.features.filter(
            feature => feature.properties.serial_num === serialNum)
    ).map(
        feature => feature.properties
    ).sort(
        (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
    ).slice(0, 23);

    return data;
};

export const fetchFreshData = async (): Promise<LocationGroup[]> => {
    const freshData = await fetch(BINS_URL)
        .then((response) => response.json()
        );

    return Object.values(groupByLocation(freshData));
};