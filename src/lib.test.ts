import {describe, it, expect} from 'vitest';
import { add } from './lib';

describe("lib.ts tests", () => {
  it("Works", () => {
    const results = add(2,2);
    expect(results).toEqual(4);
  })
})