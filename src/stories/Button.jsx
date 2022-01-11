import React from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from "gatsby-theme-i18n"


/**
 * Primary UI component for user interaction
 */
export const Button = ({ label }) => {
  
  return (
    <Link to="/blog">{label}</Link>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
 
};

