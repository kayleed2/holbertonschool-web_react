import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';


export function selectCourse(index) {
    return {
      type: SELECT_COURSE,
      index,
    };
}

export let boundSelectCourse = bindActionCreators(selectCourse(index), dispatch);

export function unSelectCourse(index) {
    return {
      type: UNSELECT_COURSE,
      index,
    };
}

export let boundunSelectCourse = bindActionCreators(unSelectCourse(index), dispatch);
