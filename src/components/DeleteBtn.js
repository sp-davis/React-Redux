import React from 'react';
import PropTypes from 'prop-types';

const DeleteBtn = ({onClick}) => (
  <button
    onClick={onClick}
  >
  [X]
  </button>
);

DeleteBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default DeleteBtn;