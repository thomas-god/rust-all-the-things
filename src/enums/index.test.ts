import { match } from "ts-pattern";
import { describe, expect, it } from "vitest";
import { type MyEnum } from ".";

describe("Matching enum/discriminated union variants", () => {
  it("Should match a variant with no content", () => {
    const val: MyEnum = { _type: "Foo" };

    match(val)
      .with({ _type: "Foo" }, () => {})
      .otherwise(() => {
        throw new Error("Unreachable branch, expected Foo variant");
      });
  });

  it("Should match a variant with a value", () => {
    const val: MyEnum = { _type: "Bar", _value: "hello" };

    match(val)
      .with({ _type: "Bar" }, ({ _value }) => {
        expect(_value).toEqual("hello");
      })
      .otherwise(() => {
        throw new Error("Unreachable branch, expected Bar variant");
      });
  });

  it("Should match a variant with an object like content", () => {
    const val: MyEnum = { _type: "Baz", foo: 47, baz: true } as MyEnum;

    match(val)
      .with({ _type: "Baz" }, ({ foo, baz }) => {
        expect(foo).toEqual(47);
        expect(baz).toEqual(true);
      })
      .otherwise(() => {
        throw new Error("Unreachable branch, expected Baz variant");
      });
  });

  it("Should be possible to match exhaustively against all variants", () => {
    const buildEnum = (): MyEnum => {
      return { _type: "Foo" };
    };
    let val = buildEnum();

    match(val)
      .with({ _type: "Foo" }, (_) => {})
      .with({ _type: "Bar" }, (_) => {})
      .with({ _type: "Baz" }, (_) => {})
      .exhaustive(); // Should not pass TS checks if we forget a .with() or add a new variant to MyEnum
  });
});
