import 'mocha';
import {assert} from 'chai';

describe('Understanding type declarations in d.ts files', () => {
  it('process.d.ts file example: process.env.USER is defined', () => {
    const username: string  = process.env.USER as string;
    assert(username.length > 0);
  })
})






