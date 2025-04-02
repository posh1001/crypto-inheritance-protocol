import React from 'react';
import PropTypes from 'prop-types';
import '../Button.css'

const Button = ({ type, onClick, children }) => {
  let buttonClass = 'btn'; // Default button class

  // Determine button style based on type
  switch (type) {
    case 'primary':
      buttonClass = 'btn btn-primary';
      break;
    case 'secondary':
      buttonClass = 'btn btn-secondary';
      break;
    case 'danger':
      buttonClass = 'btn btn-danger';
      break;
    case 'outline':
      buttonClass = 'btn btn-outline';
      break;
    default:
      buttonClass = 'btn';
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

// PropTypes to validate the component's props
Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outline']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

// Default Props
Button.defaultProps = {
  type: 'primary',
  onClick: () => {},
};

export default Button;
