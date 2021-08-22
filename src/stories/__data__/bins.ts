export const Empty = {
    "properties": {
        "serial_num": 1511192,
        "age_thres": 0,
        "fill_thres": 8,
        "lat": "-37.900181",
        "position": "center",
        "fill_lvl": 0,
        "status": "NOT_READY",
        "bin_detail": "General Practice R Werribee",
        "timestamp": "2021-08-21T18:09",
        "lon": "144.66128",
        "station_num": "1511192"
    },
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
            144.66128,
            -37.900181
        ]
    }
};

export const Low = {
    "properties": {
        "bin_detail": "Commercial Hotel G Werribee",
        "age_thres": 0,
        "fill_thres": 8,
        "position": "center",
        "timestamp": "2021-08-21T18:09",
        "station_num": "1511201",
        "serial_num": 1511201,
        "fill_lvl": 2,
        "status": "NOT_READY",
        "lat": "-37.90203833333333",
        "lon": "144.66030833333335"
    },
    "geometry": {
        "coordinates": [
            144.6603083333,
            -37.9020383333
        ],
        "type": "Point"
    },
    "type": "Feature"
};

export const Medium = {
    "type": "Feature",
    "geometry": {
        "coordinates": [
            144.6601949611,
            -37.9018111376
        ],
        "type": "Point"
    },
    "properties": {
        "age_thres": 0,
        "bin_detail": "Bendigo Bank G Werribee - General Waste",
        "status": "NOT_READY",
        "position": "center",
        "lon": "144.66019496114416",
        "station_num": "1510830",
        "timestamp": "2021-08-21T18:09",
        "fill_lvl": 2,
        "serial_num": 1510830,
        "fill_thres": 6,
        "lat": "-37.901811137557594"
    }
};

export const High = {
    "type": "Feature",
    "properties": {
        "fill_lvl": 6,
        "fill_thres": 8,
        "serial_num": 1511190,
        "status": "NOT_READY",
        "timestamp": "2021-08-21T18:09",
        "station_num": "1511190",
        "bin_detail": "Aldi G Point Cook",
        "lat": "-37.88252166666667",
        "lon": "144.73562333333334",
        "age_thres": 0,
        "position": "center"
    },
    "geometry": {
        "coordinates": [
            144.7356233333,
            -37.8825216667
        ],
        "type": "Point"
    }
};

export const Overfull = {
    "geometry": {
        "coordinates": [
            144.6575503108,
            -37.9030024868
        ],
        "type": "Point"
    },
    "properties": {
        "serial_num": 1511193,
        "station_num": "1511193",
        "position": "center",
        "lon": "144.657550310847",
        "fill_thres": 8,
        "status": "FULLNESS",
        "bin_detail": "Wedge St Piazza G Werribee",
        "timestamp": "2021-08-21T18:09",
        "lat": "-37.903002486847804",
        "fill_lvl": 10,
        "age_thres": 0
    },
    "type": "Feature"
};

export const timeSeries = [
    {
        type: 'Feature',
        properties: {
            lat: '-37.901811137557594',
            position: 'center',
            timestamp: '2021-08-21T13:39',
            age_thres: 0,
            lon: '144.66019496114416',
            status: 'NOT_READY',
            fill_thres: 6,
            fill_lvl: 2,
            bin_detail: 'Bendigo Bank G Werribee - General Waste',
            serial_num: 1510830,
            station_num: '1510830'
        },
        geometry: { coordinates: [Array], type: 'Point' }
    },
    {
        geometry: { coordinates: [Array], type: 'Point' },
        properties: {
            bin_detail: 'Bendigo Bank G Werribee - General Waste',
            lon: '144.66019496114416',
            serial_num: 1510830,
            status: 'NOT_READY',
            position: 'center',
            station_num: '1510830',
            timestamp: '2021-08-21T15:09',
            fill_thres: 6,
            lat: '-37.901811137557594',
            fill_lvl: 2,
            age_thres: 0
        },
        type: 'Feature'
    },
    {
        geometry: { type: 'Point', coordinates: [Array] },
        properties: {
            position: 'center',
            fill_lvl: 2,
            station_num: '1510830',
            age_thres: 0,
            serial_num: 1510830,
            status: 'NOT_READY',
            lon: '144.66019496114416',
            bin_detail: 'Bendigo Bank G Werribee - General Waste',
            fill_thres: 6,
            lat: '-37.901811137557594',
            timestamp: '2021-08-21T15:54'
        },
        type: 'Feature'
    },
    {
        properties: {
            lat: '-37.901811137557594',
            serial_num: 1510830,
            fill_lvl: 2,
            station_num: '1510830',
            fill_thres: 6,
            age_thres: 0,
            position: 'center',
            lon: '144.66019496114416',
            timestamp: '2021-08-21T16:39',
            bin_detail: 'Bendigo Bank G Werribee - General Waste',
            status: 'NOT_READY'
        },
        geometry: { coordinates: [Array], type: 'Point' },
        type: 'Feature'
    },
    {
        type: 'Feature',
        geometry: { coordinates: [Array], type: 'Point' },
        properties: {
            age_thres: 0,
            bin_detail: 'Bendigo Bank G Werribee - General Waste',
            status: 'NOT_READY',
            position: 'center',
            lon: '144.66019496114416',
            station_num: '1510830',
            timestamp: '2021-08-21T18:09',
            fill_lvl: 2,
            serial_num: 1510830,
            fill_thres: 6,
            lat: '-37.901811137557594'
        }
    }
];