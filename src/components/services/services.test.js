import PriceCounter from "./priceCounter";
import TimeCounter from "./timeCounter";
import CountDownTime from "./countDownTime";
import each from "jest-each";
import moment from "moment";

describe("Testing PriceCounter", () => {
  test("Count price for 50 symbols, english language", () => {
    const result = PriceCounter(50, "en"),
      expected = "120.00";
    expect(result).toBe(expected);
  });

  test("Count price for 100 symbols, ukrainian language", () => {
    const result = PriceCounter(100, "ua"),
      expected = "50.00";
    expect(result).toBe(expected);
  });

  test("Count price for 1104 symbols, english language", () => {
    const result = PriceCounter(1104, "en"),
      expected = "132.48";
    expect(result).toBe(expected);
  });

  test("Count price for 5516 symbols, english language", () => {
    const result = PriceCounter(5516, "ru"),
      expected = "275.80";
    expect(result).toBe(expected);
  });
});

describe("Checking time counter", () => {
  test("Symbols 2500, ru", () => {
    const result = TimeCounter(2500, "ru"),
      expected = 8551687.921980495;

    expect(result).toBe(expected);
  });

  test("Symbols 16809, en", () => {
    const result = TimeCounter(16809, "en"),
      expected = 183518918.91891894;

    expect(result).toBe(expected);
  });
});

describe("checking the time of work", () => {
  each`
        startDate                        |    incomingTime     |    endDate
        ${"23/09/2019, 10:00 Monday"}    | ${5}                | ${"23/09/2019, 15:00 Monday"}
        ${"23/09/2019, 18:00 Monday"}    | ${7}                | ${"24/09/2019, 16:00 Tuesday"}
        ${"23/09/2019, 18:00 Monday"}    | ${25}               | ${"26/09/2019, 16:00 Thursday"}
        ${"20/09/2019, 17:00 Friday"}    | ${60}               | ${"01/10/2019, 14:00 Tuesday"}
        ${"21/09/2019, 17:00 Saturday"}  | ${60}               | ${"01/10/2019, 16:00 Tuesday"}
        ${"24/09/2019, 08:00 Tuesday"}   | ${8}                | ${"24/09/2019, 18:00 Tuesday"}
        ${"25/09/2019, 08:00 Wednesday"} | ${8}                | ${"25/09/2019, 18:00 Wednesday"}
    `.test("Calculate date", ({ startDate, incomingTime, endDate }) => {
    const startTimeMs = moment(startDate, "DD/MM/YYYY HH:mm dddd").valueOf();
    const incomingTimeMs = 60 * 60 * 1000 * incomingTime;
    const endDateMs = moment(endDate, "DD/MM/YYYY HH:mm dddd").valueOf();

    expect(CountDownTime(startTimeMs, incomingTimeMs)).toBe(endDateMs);
  });
});
