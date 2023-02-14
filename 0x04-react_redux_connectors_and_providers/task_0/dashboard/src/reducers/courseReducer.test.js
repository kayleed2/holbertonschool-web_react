import { courseReducer } from './courseReducer';

describe('Test suite for courseReducer', () => {
  it('verifies the default state returns an empty array', () => {
    expect(courseReducer(undefined, { type: undefined })).toEqual([]);
  });

  it(`verifies FETCH_COURSE_SUCCESS returns correct data`, () => {
    const data = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = { type: 'FETCH_COURSE_SUCCESS' };
    expect(courseReducer(data, action)).toEqual(data);
  });

  it(`verifies SELECT_COURSE returns correct data`, () => {
    const index = 2;
    const data = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = { type: 'SELECT_COURSE', index };
    expect(courseReducer(data, action)).toEqual(data);
  });

  it(`verifies UNSELECT_COURSE returns correct data`, () => {
    const index = 2;
    const data = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = { type: 'UNSELECT_COURSE', index };
    expect(courseReducer(data, action)).toEqual(data);
  });
});
