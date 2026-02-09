// hard way - long union type
let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined;

// By convention, type aliases are given names in PascalCase:
// type MyName = ...;

// easy way - long union type
type RawData = boolean | number | string | null | undefined;

let rawDataFirst2: RawData;
let rawDataSecond2: RawData;
let rawDataThird2: RawData;
