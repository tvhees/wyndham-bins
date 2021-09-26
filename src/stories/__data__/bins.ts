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

export const currentData = [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.7352828938,
                -37.8827389697
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Coles G Point Cook",
            "fill_thres": 8,
            "fill_lvl": 10,
            "lat": "-37.88273896974719",
            "lon": "144.73528289384842",
            "position": "center",
            "status": "FULLNESS",
            "serial_num": 1511199,
            "station_num": "1511199",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.7351335129,
                -37.884073105
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Woolworths R Point Cook",
            "fill_thres": 8,
            "fill_lvl": 10,
            "lat": "-37.88407310504452",
            "lon": "144.7351335128975",
            "position": "center",
            "status": "ALERT",
            "serial_num": 1511215,
            "station_num": "1511215",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.735345,
                -37.8827266667
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Coles R Point Cook",
            "fill_thres": 8,
            "fill_lvl": 8,
            "lat": "-37.88272666666667",
            "lon": "144.735345",
            "position": "center",
            "status": "FULLNESS",
            "serial_num": 1511208,
            "station_num": "1511208",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6575183333,
                -37.903025
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Wedge St Piazza R Werribee",
            "fill_thres": 8,
            "fill_lvl": 8,
            "lat": "-37.903025",
            "lon": "144.65751833333334",
            "position": "center",
            "status": "FULLNESS",
            "serial_num": 1511210,
            "station_num": "1511210",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6614327211,
                -37.9007198946
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Cash Converters R Werribee",
            "fill_thres": 8,
            "fill_lvl": 8,
            "lat": "-37.900719894591234",
            "lon": "144.6614327210649",
            "position": "center",
            "status": "FULLNESS",
            "serial_num": 1511211,
            "station_num": "1511211",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.66128,
                -37.900181
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "General Practice R Werribee",
            "fill_thres": 8,
            "fill_lvl": 8,
            "lat": "-37.900181",
            "lon": "144.66128",
            "position": "center",
            "status": "FULLNESS",
            "serial_num": 1511212,
            "station_num": "1511212",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.7356233333,
                -37.8825216667
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Aldi G Point Cook",
            "fill_thres": 8,
            "fill_lvl": 6,
            "lat": "-37.88252166666667",
            "lon": "144.73562333333334",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511190,
            "station_num": "1511190",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6575503108,
                -37.9030024868
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Wedge St Piazza G Werribee",
            "fill_thres": 8,
            "fill_lvl": 6,
            "lat": "-37.903002486847804",
            "lon": "144.657550310847",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511193,
            "station_num": "1511193",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.7354966667,
                -37.88338
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Ally Fashion G Point Cook",
            "fill_thres": 8,
            "fill_lvl": 4,
            "lat": "-37.88338",
            "lon": "144.73549666666668",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511194,
            "station_num": "1511194",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.7351407368,
                -37.883220053
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Nandos G Point Cook",
            "fill_thres": 8,
            "fill_lvl": 4,
            "lat": "-37.883220052953746",
            "lon": "144.73514073677063",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511195,
            "station_num": "1511195",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6611613075,
                -37.9013126406
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "79 Watton St R Werribee",
            "fill_thres": 8,
            "fill_lvl": 4,
            "lat": "-37.901312640568825",
            "lon": "144.66116130753835",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511213,
            "station_num": "1511213",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6614036348,
                -37.9011767992
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Park Hotel R Werribee",
            "fill_thres": 8,
            "fill_lvl": 4,
            "lat": "-37.90117679915223",
            "lon": "144.66140363475483",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511221,
            "station_num": "1511221",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6611494902,
                -37.9013174858
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "79 Watton St G Werribee",
            "fill_thres": 8,
            "fill_lvl": 2,
            "lat": "-37.901317485774534",
            "lon": "144.66114949016094",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511198,
            "station_num": "1511198",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6602679348,
                -37.9018541015
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Bendigo Bank R Werribee",
            "fill_thres": 8,
            "fill_lvl": 2,
            "lat": "-37.90185410152939",
            "lon": "144.66026793477215",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511209,
            "station_num": "1511209",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.7352166667,
                -37.88323
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Nandos R Point Cook",
            "fill_thres": 8,
            "fill_lvl": 2,
            "lat": "-37.88323",
            "lon": "144.73521666666667",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511220,
            "station_num": "1511220",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6601949611,
                -37.9018111376
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Bendigo Bank G Werribee - General Waste",
            "fill_thres": 6,
            "fill_lvl": 0,
            "lat": "-37.901811137557594",
            "lon": "144.66019496114416",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1510830,
            "station_num": "1510830",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6614092517,
                -37.9007616667
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Cash Converters G Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.900761666666654",
            "lon": "144.66140925173602",
            "position": "center",
            "status": "ALERT",
            "serial_num": 1511191,
            "station_num": "1511191",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.66128,
                -37.900181
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "General Practice R Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.900181",
            "lon": "144.66128",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511192,
            "station_num": "1511192",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.7351416667,
                -37.8841133333
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Woolworths G Point Cook",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.88411333333333",
            "lon": "144.73514166666666",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511196,
            "station_num": "1511196",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6619166667,
                -37.9011583333
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Ballan House G Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.901158333333335",
            "lon": "144.66191666666666",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511197,
            "station_num": "1511197",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6607366667,
                -37.9016183333
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Watton Plaza G Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.90161833333333",
            "lon": "144.66073666666668",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511200,
            "station_num": "1511200",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6603083333,
                -37.9020383333
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Commercial Hotel G Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.90203833333333",
            "lon": "144.66030833333335",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511201,
            "station_num": "1511201",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.661445,
                -37.9000316667
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Proven Training G Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.90003166666666",
            "lon": "144.661445",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511203,
            "station_num": "1511203",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6619166667,
                -37.9006433333
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Hockingstuart G Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.900643333333335",
            "lon": "144.66191666666666",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511204,
            "station_num": "1511204",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6613755151,
                -37.9011926717
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Park Hotel G Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.90119267173708",
            "lon": "144.66137551512884",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511205,
            "station_num": "1511205",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6607583333,
                -37.901555
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Watton Plaza R Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.901555",
            "lon": "144.66075833333332",
            "position": "center",
            "status": "ALERT",
            "serial_num": 1511206,
            "station_num": "1511206",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6602866667,
                -37.9020266667
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Commercial Hotel R Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.902026666666664",
            "lon": "144.66028666666668",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511207,
            "station_num": "1511207",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.7354533333,
                -37.883445
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Ally Fashion R Point Cook",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.883445",
            "lon": "144.73545333333334",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511214,
            "station_num": "1511214",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.661874373,
                -37.9005884942
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Hockingstuart R Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.90058849417307",
            "lon": "144.66187437301642",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511216,
            "station_num": "1511216",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6619360691,
                -37.901148703
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Ballan House R Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.901148702963525",
            "lon": "144.66193606911338",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511217,
            "station_num": "1511217",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.7356466667,
                -37.882425
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Aldi R Point Cook",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.882425",
            "lon": "144.73564666666667",
            "position": "center",
            "status": "NOT_READY",
            "serial_num": 1511218,
            "station_num": "1511218",
            "timestamp": "2021-09-26T23:27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                144.6614718221,
                -37.9000687209
            ]
        },
        "properties": {
            "age_thres": 0,
            "bin_detail": "Proven Training R Werribee",
            "fill_thres": 8,
            "fill_lvl": 0,
            "lat": "-37.90006872093796",
            "lon": "144.6614718220901",
            "position": "center",
            "status": "ALERT",
            "serial_num": 1511219,
            "station_num": "1511219",
            "timestamp": "2021-09-26T23:27"
        }
    }
];

export const historicalData = [
    {
        "age_thres": 0,
        "bin_detail": "Bendigo Bank R Werribee",
        "lat": "-37.90185410152939",
        "fill_thres": 8,
        "fill_lvl": 2,
        "station_num": "1511209",
        "status": "NOT_READY",
        "position": "center",
        "timestamp": "2021-08-31T21:09",
        "lon": "144.66026793477215",
        "serial_num": 1511209
    },
    {
        "lat": "-37.90185410152939",
        "station_num": "1511209",
        "age_thres": 0,
        "timestamp": "2021-08-31T19:39",
        "lon": "144.66026793477215",
        "serial_num": 1511209,
        "status": "NOT_READY",
        "fill_thres": 8,
        "bin_detail": "Bendigo Bank R Werribee",
        "position": "center",
        "fill_lvl": 0
    },
    {
        "serial_num": 1511209,
        "position": "center",
        "age_thres": 0,
        "fill_thres": 8,
        "status": "NOT_READY",
        "fill_lvl": 0,
        "bin_detail": "Bendigo Bank R Werribee",
        "station_num": "1511209",
        "lon": "144.66026793477215",
        "timestamp": "2021-08-31T18:54",
        "lat": "-37.90185410152939"
    },
    {
        "timestamp": "2021-08-31T18:09",
        "position": "center",
        "age_thres": 0,
        "fill_lvl": 9,
        "bin_detail": "Bendigo Bank R Werribee",
        "lon": "144.66026793477215",
        "lat": "-37.90185410152939",
        "station_num": "1511209",
        "fill_thres": 8,
        "status": "NOT_READY",
        "serial_num": 1511209
    },
    {
        "serial_num": 1511209,
        "status": "NOT_READY",
        "age_thres": 0,
        "lon": "144.66026793477215",
        "fill_lvl": 8,
        "station_num": "1511209",
        "bin_detail": "Bendigo Bank R Werribee",
        "lat": "-37.90185410152939",
        "timestamp": "2021-08-31T16:39",
        "fill_thres": 8,
        "position": "center"
    },
    {
        "station_num": "1511209",
        "bin_detail": "Bendigo Bank R Werribee",
        "fill_lvl": 8,
        "timestamp": "2021-08-31T15:54",
        "lat": "-37.90185410152939",
        "fill_thres": 8,
        "position": "center",
        "serial_num": 1511209,
        "lon": "144.66026793477215",
        "status": "NOT_READY",
        "age_thres": 0
    },
    {
        "lon": "144.66026793477215",
        "station_num": "1511209",
        "serial_num": 1511209,
        "fill_lvl": 6,
        "timestamp": "2021-08-31T15:09",
        "position": "center",
        "age_thres": 0,
        "fill_thres": 8,
        "status": "NOT_READY",
        "bin_detail": "Bendigo Bank R Werribee",
        "lat": "-37.90185410152939"
    },
    {
        "lon": "144.66026793477215",
        "status": "NOT_READY",
        "fill_thres": 8,
        "fill_lvl": 5,
        "lat": "-37.90185410152939",
        "timestamp": "2021-08-31T13:39",
        "station_num": "1511209",
        "serial_num": 1511209,
        "age_thres": 0,
        "position": "center",
        "bin_detail": "Bendigo Bank R Werribee"
    },
    {
        "timestamp": "2021-08-31T12:54",
        "status": "NOT_READY",
        "fill_lvl": 4,
        "serial_num": 1511209,
        "lat": "-37.90185410152939",
        "bin_detail": "Bendigo Bank R Werribee",
        "lon": "144.66026793477215",
        "fill_thres": 8,
        "position": "center",
        "station_num": "1511209",
        "age_thres": 0
    },
    {
        "age_thres": 0,
        "fill_thres": 8,
        "lon": "144.66026793477215",
        "serial_num": 1511209,
        "status": "NOT_READY",
        "timestamp": "2021-08-31T11:24",
        "lat": "-37.90185410152939",
        "position": "center",
        "bin_detail": "Bendigo Bank R Werribee",
        "fill_lvl": 3,
        "station_num": "1511209"
    },
    {
        "serial_num": 1511209,
        "fill_lvl": 1,
        "status": "NOT_READY",
        "station_num": "1511209",
        "bin_detail": "Bendigo Bank R Werribee",
        "age_thres": 0,
        "timestamp": "2021-08-31T10:39",
        "lon": "144.66026793477215",
        "fill_thres": 8,
        "position": "center",
        "lat": "-37.90185410152939"
    },
    {
        "status": "NOT_READY",
        "fill_lvl": 1,
        "station_num": "1511209",
        "timestamp": "2021-08-31T09:09",
        "position": "center",
        "lon": "144.66026793477215",
        "serial_num": 1511209,
        "fill_thres": 8,
        "age_thres": 0,
        "bin_detail": "Bendigo Bank R Werribee",
        "lat": "-37.90185410152939"
    },
    {
        "position": "center",
        "lon": "144.66026793477215",
        "timestamp": "2021-08-31T07:39",
        "fill_lvl": 0,
        "status": "NOT_READY",
        "station_num": "1511209",
        "age_thres": 0,
        "lat": "-37.90185410152939",
        "serial_num": 1511209,
        "bin_detail": "Bendigo Bank R Werribee",
        "fill_thres": 8
    },
    {
        "fill_thres": 8,
        "serial_num": 1511209,
        "age_thres": 3,
        "station_num": "1511209",
        "bin_detail": "Bendigo Bank R Werribee",
        "timestamp": "2021-08-31T06:54",
        "lon": "144.66026793477215",
        "fill_lvl": 0,
        "position": "center",
        "status": "NOT_READY",
        "lat": "-37.90185410152939"
    },
    {
        "serial_num": 1511209,
        "lon": "144.66026793477215",
        "timestamp": "2021-08-31T06:09",
        "fill_lvl": 0,
        "age_thres": 0,
        "lat": "-37.90185410152939",
        "bin_detail": "Bendigo Bank R Werribee",
        "status": "NOT_READY",
        "station_num": "1511209",
        "position": "center",
        "fill_thres": 8
    },
    {
        "lon": "144.66026793477215",
        "lat": "-37.90185410152939",
        "fill_thres": 8,
        "status": "NOT_READY",
        "age_thres": 0,
        "station_num": "1511209",
        "position": "center",
        "serial_num": 1511209,
        "timestamp": "2021-08-31T04:39",
        "bin_detail": "Bendigo Bank R Werribee",
        "fill_lvl": 8
    },
    {
        "timestamp": "2021-08-31T03:54",
        "position": "center",
        "lat": "-37.90185410152939",
        "serial_num": 1511209,
        "fill_lvl": 7,
        "fill_thres": 8,
        "status": "NOT_READY",
        "age_thres": 0,
        "station_num": "1511209",
        "bin_detail": "Bendigo Bank R Werribee",
        "lon": "144.66026793477215"
    },
    {
        "fill_thres": 8,
        "timestamp": "2021-08-31T03:09",
        "status": "NOT_READY",
        "fill_lvl": 5,
        "lat": "-37.90185410152939",
        "lon": "144.66026793477215",
        "station_num": "1511209",
        "serial_num": 1511209,
        "position": "center",
        "bin_detail": "Bendigo Bank R Werribee",
        "age_thres": 0
    },
    {
        "position": "center",
        "serial_num": 1511209,
        "bin_detail": "Bendigo Bank R Werribee",
        "station_num": "1511209",
        "age_thres": 0,
        "status": "NOT_READY",
        "fill_lvl": 4,
        "timestamp": "2021-08-31T01:39",
        "lon": "144.66026793477215",
        "lat": "-37.90185410152939",
        "fill_thres": 8
    },
    {
        "fill_lvl": 2,
        "lon": "144.66026793477215",
        "age_thres": 0,
        "bin_detail": "Bendigo Bank R Werribee",
        "station_num": "1511209",
        "lat": "-37.90185410152939",
        "serial_num": 1511209,
        "timestamp": "2021-08-31T00:54",
        "position": "center",
        "fill_thres": 8,
        "status": "NOT_READY"
    },
    {
        "age_thres": 0,
        "lat": "-37.90185410152939",
        "status": "NOT_READY",
        "lon": "144.66026793477215",
        "timestamp": "2021-08-31T00:09",
        "station_num": "1511209",
        "serial_num": 1511209,
        "fill_lvl": 2,
        "fill_thres": 8,
        "bin_detail": "Bendigo Bank R Werribee",
        "position": "center"
    },
    {
        "fill_lvl": 0,
        "bin_detail": "Bendigo Bank R Werribee",
        "lat": "-37.90185410152939",
        "status": "NOT_READY",
        "position": "center",
        "timestamp": "2021-08-30T22:39",
        "lon": "144.66026793477215",
        "serial_num": 1511209,
        "age_thres": 0,
        "station_num": "1511209",
        "fill_thres": 8
    },
    {
        "status": "NOT_READY",
        "bin_detail": "Bendigo Bank R Werribee",
        "serial_num": 1511209,
        "lon": "144.66026793477215",
        "age_thres": 0,
        "lat": "-37.90185410152939",
        "fill_lvl": 0,
        "timestamp": "2021-08-30T21:54",
        "station_num": "1511209",
        "position": "center",
        "fill_thres": 8
    }
];
