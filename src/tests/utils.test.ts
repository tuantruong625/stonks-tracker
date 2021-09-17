import { numberWithCommas, timestampToDateWithMonthAndWeekday, timestampToTimeWithSeconds, toFixed } from "../utils";

describe('Utilities', () => {
 describe('toFixed', () => {
  it('returns a number with two decimal places', () => {
   const formattedNumber = toFixed(2.1234, 2)

   expect(formattedNumber).toEqual("2.12")
  })
 })

 describe('timestampToTimeWithSeconds', () => {
  it('returns a timestamp in readable time', () => {
   const formattedTime = timestampToTimeWithSeconds(123456)

   expect(formattedTime).toEqual("7:02:03 p.m.")
  })
 })

 describe('timestampToDateWithMonthAndWeekday', () => {
  it('returns a timestamp in readable date', () => {
   const formattedTime = timestampToDateWithMonthAndWeekday(123456)

   expect(formattedTime).toEqual("Wednesday, December 31, 1969")
  })
 })

 describe('numberWithCommas', () => {
  it('returns a number with commas', () => {
   const formattedTime = numberWithCommas(123456789)

   expect(formattedTime).toEqual("123,456,789")
  })
 })
});
