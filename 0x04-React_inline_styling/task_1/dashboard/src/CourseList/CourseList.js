import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  tb: {
    border: '1px solid lightgrey',
    width: '100%',
    textAlign: 'left',
  },
  th: {
    fontWeight: 'bold',
    ':nth-child(1n) > :first-child': {
      textAlign: 'center',
    },
  },
});

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};

export default function CourseList({ listCourses }) {
    return (
      <table className={css(styles.tb)}>
        <thead className={css(styles.th)}>
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
