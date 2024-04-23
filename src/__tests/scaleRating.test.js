import { getOptions } from '../Helpers/scaleRating';

describe('getOptions({ min, max })', () => {
  it('should get required param and should return an array', () => {
    expect(
      getOptions({
        min: 10,
        max: 15
      })
    ).toEqual([10, 11, 12, 13, 14, 15]);
    expect(
      getOptions({
        min: 0,
        max: 5
      })
    ).toEqual([0, 1, 2, 3, 4, 5]);
    expect(
      getOptions({
        min: 0,
        max: 0
      })
    ).toEqual([0]);
    expect(
      getOptions({
        min: 0,
        max: -1
      })
    ).toEqual([]);
    expect(
      getOptions({
        min: null,
        max: -1
      })
    ).toEqual([]);
    expect(
      getOptions({
        min: null,
        max: -1
      })
    ).toEqual([]);
  });
  it('should return an empty array if passed wrong values for required params', () => {
    expect(
      getOptions({
        min: undefined,
        max: null
      })
    ).toEqual([]);
    expect(
      getOptions({
        min: null,
        max: undefined
      })
    ).toEqual([]);
    expect(
      getOptions({
        min: undefined,
        max: undefined
      })
    ).toEqual([]);
    expect(
      getOptions({
        min: () => {},
        max: () => {}
      })
    ).toEqual([]);
  });
  it('should be tried with a specific values (AVOID THIS)', () => {
    expect(
      getOptions({
        min: null,
        max: null
      })
    ).not.toEqual([]);
    expect(
      getOptions({
        min: {},
        max: {}
      })
    ).not.toEqual([]);
    expect(
      getOptions({
        min: [],
        max: []
      })
    ).not.toEqual([]);
    expect(
      getOptions({
        min: '',
        max: ''
      })
    ).not.toEqual([]);
  });
});
