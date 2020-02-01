export interface GeoMap {
    topojsonKey: string;
    topojsonName: string;
    isoKey: string;
    geoId: number;
}

export interface TopoGeometry {
    properties: {
        NAME_1: string,
        HASC_1: string,
        ISO_2: string
    };
}

export const russiaMap: GeoMap[] = [
    {
        geoId: 1,
        topojsonKey: 'RU.KC',
        isoKey: 'KC',
        topojsonName: 'Karachay-Cherkess'
    },
    {
        geoId: 2,
        isoKey: 'KR',
        topojsonKey: 'RU.KI',
        topojsonName: 'Karelia'
    },
    {
        geoId: 3,
        isoKey: 'KEM',
        topojsonKey: 'RU.KE',
        topojsonName: 'Kemerovo'
    },
    {
        geoId: 4,
        isoKey: 'KHA',
        topojsonKey: 'RU.KH',
        topojsonName: 'Khabarovsk'
    },
    {
        geoId: 5,
        isoKey: 'KK',
        topojsonKey: 'RU.KK',
        topojsonName: 'Khakass'
    },
    {
        geoId: 6,
        isoKey: 'KHM',
        topojsonKey: 'RU.KM',
        topojsonName: 'Khanty-Mansi'
    },
];
