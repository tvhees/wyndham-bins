import { interval, map, scan, startWith, takeWhile } from "rxjs";
export const Empty = {
    "fill_thres": 8,
    "fill_lvl": 0,
    "status": "NOT_READY",
    "bin_detail": "General Practice R Werribee",
};

export const generateTimeSeries = (min: number, max: number, delta: number, duration: number) =>
    interval(delta).pipe(
        map(n => delta * n),
        takeWhile(t => t <= duration),
        map(t => (max - min) * t / duration + min)
    );