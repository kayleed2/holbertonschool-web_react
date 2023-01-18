import React from 'react';
import PropTypes from 'prop-types';


CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
  
  CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

const color = "#deb5b545"


export default function CourseListRow({ isHeader, textFirstCell, textSecondCell} ) {
    return (
    <tr style={{ backgroundColor: isHeader ? color : '#f5f5f5ab' }}>
        {isHeader && textSecondCell === null && (
            <th colSpan={2}>{textFirstCell}</th>
        )}
        {isHeader && textSecondCell && (
            <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
            </>
        )}
        {!isHeader && (
            <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
            </>
        )}
        </tr>
    );
}
