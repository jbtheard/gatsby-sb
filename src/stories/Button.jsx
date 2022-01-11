import React from 'react'
import PropTypes from 'prop-types'

// This would work
// import {  Link } from "gatsby"

// this wouldnt work
import { LocalizedLink as Link } from "gatsby-theme-i18n"


export const Button = ({ label }) => {
  
  return (
    <Link to="/blog">{label}</Link>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

