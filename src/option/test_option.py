from src.option import OptionNone, OptionSome, is_none, is_some


def test_some_is_some():
    some_val = OptionSome(value=47)

    assert is_some(some_val)


def test_none_is_not_some():
    none_val = OptionNone()

    assert not is_some(none_val)


def test_some_is_not_none():
    some_val = OptionSome(value=47)

    assert not is_none(some_val)


def test_none_is_none():
    none_val = OptionNone()

    print(is_none(none_val))

    assert is_none(OptionNone())
