declare module 'bins' {
    export type BinFeature = Feature<BinProperties>
    export type BinFeatureCollection = FeatureCollection<BinProperties>

    interface FeatureCollection<T> {
        type: 'FeatureCollection'
        name: string
        features: Feature<T>[]
    }

    interface Feature<T extends FeatureProperties> {
        type: 'Feature'
        geometry: FeatureGeometry
        properties: T
    }

    interface FeatureGeometry {
        coordinates: number[]
        type: string
    }

    interface FeatureProperties { }

    export interface BinProperties extends FeatureProperties {
        age_thres: number
        bin_detail: string
        fill_lvl: number
        fill_thres: number
        lat: string
        lon: string
        position: string
        serial_num: number
        station_num: string
        status: string
        timestamp: string
    }

    type BinTypeKey = 'recycling' | 'garbage'
    interface LocationGroup {
        region: string
        location: string
        garbage?: BinFeature
        recycling?: BinFeature
    }
}