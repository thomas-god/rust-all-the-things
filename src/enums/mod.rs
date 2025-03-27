enum MyEnum {
    Foo,
    Bar(String),
    Baz { foo: usize, baz: bool },
}

#[cfg(test)]
mod tests {
    use super::MyEnum;

    #[test]
    fn test_no_content_variant() {
        let val = MyEnum::Foo;

        let MyEnum::Foo = val else {
            unreachable!("Should be Foo variant")
        };
    }

    #[test]
    fn test_variant_with_value() {
        let val = MyEnum::Bar(String::from("hello"));

        let MyEnum::Bar(my_string) = val else {
            unreachable!("Should be Bar variantf")
        };
        assert_eq!(my_string, String::from("hello"));
    }

    #[test]
    fn test_variant_contains_struct_like() {
        let val = MyEnum::Baz { foo: 47, baz: true };

        let MyEnum::Baz { foo, baz } = val else {
            unreachable!("Should be Baz variant")
        };
        assert_eq!(foo, 47);
        assert!(baz);
    }

    #[test]
    fn test_exhaustive_match() {
        let val = MyEnum::Foo;

        match val {
            MyEnum::Foo => {}
            MyEnum::Bar(_) => {}
            MyEnum::Baz { foo: _, baz: _ } => {}
        }
    }
}
