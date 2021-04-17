import articleReducer, { initialState } from './articlesSlice';

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(articleReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  //   it('should handle increment', () => {
  //     const actual = articleReducer(initialState, increment());
  //     expect(actual.value).toEqual(4);
  //   });

  //   it('should handle decrement', () => {
  //     const actual = articleReducer(initialState, decrement());
  //     expect(actual.value).toEqual(2);
  //   });

  //   it('should handle incrementByAmount', () => {
  //     const actual = articleReducer(initialState, incrementByAmount(2));
  //     expect(actual.value).toEqual(5);
  //   });
});
