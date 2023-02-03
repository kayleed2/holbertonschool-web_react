import { FETCH_COURSE_SUCCESS, UNSELECT_COURSE, SELECT_COURSE } from '../actions/courseActionTypes';

const initialState = [];

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return state.map((course) => ({
                ...course,
                isSelected: false,
            }));
        case SELECT_COURSE:
            return state.map((course) => {
                if (course.index === action.index) {
                    return {
                        ...course,
                        isSelected: true,
                    };
                }
                return course;
            });
        case UNSELECT_COURSE:
            return state.map((course) => {
                if (course.index === action.index) {
                    return {
                        ...course,
                        isSelected: false,
                    };
                }
                return course;
            });
        default:
            return state;
    }
};
