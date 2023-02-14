const { Map, setIn } = require('immutable');
import { FETCH_COURSE_SUCCESS, UNSELECT_COURSE, SELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map([]);

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
        return state.merge(coursesNormalizer(action.data));
      case SELECT_COURSE:
        return setIn(Map(state), [String(action.index), 'isSelected'], true);
      case UNSELECT_COURSE:
        return Map(state).setIn([String(action.index), 'isSelected'], false);
      default:
        return state;
    }
};
