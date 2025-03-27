export type MyEnum =
  | { _type: "Foo" }
  | { _type: "Bar"; _value: string }
  | { _type: "Baz"; foo: number; baz: boolean };
