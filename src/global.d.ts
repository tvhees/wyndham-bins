export type BinFeature = Feature<BinProperties>

interface Feature<T extends FeatureProperties> {
    type: 'Feature'
    geometry: FeatureGeometry
    properties: T
}

interface FeatureGeometry {
    coordinates: string[]
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