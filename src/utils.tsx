import { DateTime } from 'luxon'

export function toFixed(num: number, fixed: number) {
 var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
 return num?.toString().match(re)[0];
}

export function timestampToTimeWithSeconds(timestamp: number) {
 return DateTime.fromMillis(timestamp).toFormat('tt')
}

export function timestampToDateWithMonthAndWeekday(timestamp: number) {
 return DateTime.fromMillis(timestamp).toFormat('DDDD')
}

export function numberWithCommas(x: number) {
 return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const payload = {
 "id": "AMC",
 "price": 46.970001220703125,
 "time": "1631733631000",
 "exchange": "NYQ",
 "quoteType": "EQUITY",
 "marketHours": "REGULAR_MARKET",
 "changePercent": -0.6976702213287354,
 "dayVolume": "71008670",
 "change": -0.3299980163574219,
 "priceHint": "2"
}