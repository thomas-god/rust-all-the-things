#[cfg(test)]
mod test {

    #[test]
    fn test_some_is_some() {
        let some = Some(47);

        assert!(some.is_some());
    }

    #[test]
    fn test_none_is_not_some() {
        let none: Option<usize> = None;

        assert!(!none.is_some());
    }

    #[test]
    fn test_none_is_none() {
        let none: Option<usize> = None;

        assert!(none.is_none());
    }

    #[test]
    fn test_some_is_not_none() {
        let some = Some(47);

        assert!(!some.is_none());
    }

    #[test]
    fn test_unwrap_some_gives_the_inner_value() {
        let some = Some(47);

        assert_eq!(some.unwrap(), 47);
    }

    #[test]
    #[should_panic]
    fn test_unwrap_none_panics() {
        let none: Option<usize> = None;

        none.unwrap();
    }

    #[test]
    fn test_unwrap_or_some_gives_back_the_inner_value() {
        let some = Some(47);

        assert_eq!(some.unwrap_or(10), 47);
    }

    #[test]
    fn test_unwrap_or_none_gives_back_the_default_value() {
        let none: Option<usize> = None;

        assert_eq!(none.unwrap_or(10), 10);
    }

    #[test]
    fn test_some_map_return_some_with_closure_result() {
        let some = Some(47);

        assert_eq!(some.map(|value| value + 1), Some(48));
    }

    #[test]
    fn test_none_map_return_none() {
        let none: Option<usize> = None;

        assert_eq!(none.map(|value| value + 1), None);
    }
}
