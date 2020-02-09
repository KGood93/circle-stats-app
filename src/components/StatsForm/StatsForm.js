import React from 'react';
import './StatsForm.css';
//import PropTypes from 'prop-types';

function StatsForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['stats-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}

export default StatsForm;