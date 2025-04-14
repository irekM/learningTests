import { convertPLNToUSD } from '../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
});

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('')).toBeNaN();
    expect(convertPLNToUSD('1')).toBeNaN();
    expect(convertPLNToUSD('abcd')).toBeNaN();
});

it('should return NaN when input is empty', () => {
  expect(convertPLNToUSD()).toBeNaN();
});

it('should return error when types are non suported', () => {
  
  const invalidInputs = [null, undefined, {}, [], true, false];

  invalidInputs.forEach(input => {
    expect(() => convertPLNToUSD(input)).toThrow();
  });
});

it('should return $0.00 for negative numbers', () => {
  expect(convertPLNToUSD(-1)).toBe('$0.00');
  expect(convertPLNToUSD(-100)).toBe('$0.00');
});
});