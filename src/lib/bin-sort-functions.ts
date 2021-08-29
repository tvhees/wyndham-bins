import { BinFeature } from "bins";

const DISPLAY_ORDER = ["FULLNESS", "NOT_READY", "ALERT"];
type CompareBinsFunction = (a: BinFeature, b: BinFeature) => number;

export const statusCompareAscending: CompareBinsFunction = (a, b) =>
    DISPLAY_ORDER.indexOf(a.properties.status) -
    DISPLAY_ORDER.indexOf(b.properties.status);

export const fullnessCompareDescending: CompareBinsFunction = (a, b) =>
    b.properties.fill_lvl / b.properties.fill_thres -
    a.properties.fill_lvl / a.properties.fill_thres;

export const timestampCompareAscending: CompareBinsFunction = (a, b) =>
    new Date(a.properties.timestamp).valueOf() - new Date(b.properties.timestamp).valueOf();