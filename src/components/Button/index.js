import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    onClick,
    children,
    className,
    type
}) => (
    <button 
      type={type}
      onClick={onClick}
      className={className}>
      {children}
    </button>
);

Button.defaultProps = {
    className: '',
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;