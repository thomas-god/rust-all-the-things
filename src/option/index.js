"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSome = isSome;
exports.isNone = isNone;
exports.some = some;
exports.none = none;
exports.unwrapOr = unwrapOr;
exports.unwrap = unwrap;
exports.optionMap = optionMap;
function isSome(value) {
    return value._kind === "Some";
}
function isNone(value) {
    return value._kind === "None";
}
function some(value) {
    return {
        _kind: "Some",
        value: value,
    };
}
function none() {
    return {
        _kind: "None",
    };
}
function unwrapOr(value, defaultValue) {
    return isSome(value) ? value.value : defaultValue;
}
function unwrap(value) {
    if (isNone(value)) {
        throw "Unwrap a none value";
    }
    return value.value;
}
function optionMap(value, fn) {
    if (value._kind === "None") {
        return none();
    }
    return some(fn(value.value));
}
