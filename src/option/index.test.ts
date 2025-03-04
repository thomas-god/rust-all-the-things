import { describe, expect, test } from "vitest";
import { isNone, isSome, none, optionMap, some, unwrap, unwrapOr, type Option } from ".";

describe("Option type", () => {
  test("Some is_some", () => {
    const someVal = some(47);

    expect(isSome(someVal)).toEqual(true);
  })

  test("None is not some", () => {
    const noneVal = none();

    expect(isSome(noneVal)).toEqual(false);
  })

  test("None is none", () => {
    const noneVal = none();

    expect(isNone(noneVal)).toEqual(true);
  })

  test("Some is not none", () => {
    const someVal = some(47);

    expect(isNone(someVal)).toEqual(false);
  })

  test("Unwrap Some gives the inner value back", () => {
    const someVal = some(47);

    expect(unwrap(someVal)).toEqual(47);
  })

  test("Unwrap None throws", () => {
    const noneVal = none();

    expect(() => unwrap(noneVal)).toThrowError();
  })

  test("UnwrapOr Some gives the inner value back", () => {
    const someVal = some(47);

    expect(unwrapOr(someVal, 10)).toEqual(47);
  })

  test("UnwrapOr None gives the default value back", () => {
    const noneVal = none();

    expect(unwrapOr(noneVal, 10)).toEqual(10)
  })

  test("optionMap on some returns some(closure result)", () => {
    const someVal = some(47);

    expect(isSome(optionMap(someVal, (v: number) => v + 1))).toEqual(true);
    expect(unwrap(optionMap(someVal, (v: number) => v + 1))).toEqual(48);
  })

  test("optionMap on none returns none", () => {
    const noneVal: Option<number> = none();

    expect(isNone(optionMap(noneVal, (v: number) => v + 1))).toEqual(true);
  })
})