from dataclasses import dataclass
from typing import Generic, TypeVar, Literal

T = TypeVar("T")


@dataclass
class OptionSome(Generic[T]):
    value: T
    _kind: Literal["some"] = "some"


@dataclass
class OptionNone:
    _kind: Literal["none"] = "none"


type Option[T] = OptionSome[T] | OptionNone


def is_some(val: Option[T]) -> bool:
    match val._kind:
        case "some":
            return True
        case "none":
            return False


def is_none(val: Option[T]) -> bool:
    return not is_some(val)
