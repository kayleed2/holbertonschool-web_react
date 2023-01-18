import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};

export default function CourseList({ listCourses }) {
    return (
      <table>
        <thead>
          <CourseListRow isHeader textFirstCell="Available courses" />
          <CourseListRow
            isHeader
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </thead>
        <tbody>
          {listCourses.length ? (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))
          ) : (
            <CourseListRow textFirstCell="No course available yet" />
          )}
        </tbody>
      </table>
    );
}
