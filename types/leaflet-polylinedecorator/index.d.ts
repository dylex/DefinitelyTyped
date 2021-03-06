// Type definitions for leaflet-polylinedecorator 1.1
// Project: https://github.com/bbecquet/Leaflet.PolylineDecorator#readme
// Definitions by: Viktor Soucek <https://github.com/soucekv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Symbol {
        interface DashOptions {
            pixelSize?: number;
            pathOptions?: PathOptions;
        }

        class Dash {
            constructor(options?: DashOptions);
        }

        function dash(options?: DashOptions): Dash;

        interface ArrowHeadOptions {
            polygon?: boolean;
            pixelSize?: number;
            headAngle?: number;
            pathOptions?: PathOptions;
        }

        class ArrowHead {
            constructor(options?: ArrowHeadOptions);
        }

        function arrowHead(options?: ArrowHeadOptions): ArrowHead;

        interface MarkerOptions {
            rotate?: boolean;
            markerOptions?: L.MarkerOptions;
        }

        class Marker {
            constructor(options?: MarkerOptions);
        }

        function marker(options?: MarkerOptions): Marker;
    }

    interface Pattern {
        offset?: number;
        endOffset?: number;
        repeat: number;
        symbol: Symbol.Dash | Symbol.ArrowHead | Symbol.Marker;
    }

    interface PolylineDecoratorOptions {
        patterns: Pattern[];
    }

    class PolylineDecorator extends FeatureGroup {
        constructor(paths: Polyline | Polygon | LatLngExpression[] | Polyline[] | Polygon[] | LatLngExpression[][], options?: PolylineDecoratorOptions);
    }

    function polylineDecorator(paths: Polyline | Polyline[], options?: PolylineDecoratorOptions): PolylineDecorator;
}
