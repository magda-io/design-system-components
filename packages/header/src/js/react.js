/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * header function
 *
 * Headers provide a consistent start to pages.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * All theme options
 *
 * @type {Object}
 */
const themes = {
	light: 'uikit-header--light',
	dark: 'uikit-header--dark',
};

/**
 * DEFAULT
 * The header component
 *
 * @param  {string}  title   - The title of the header
 * @param  {string}  level   - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {string}  subline - An optional subline, optional
 * @param  {boolean} hero    - The hero option, optional
 * @param  {string}  theme   - Optional theme that can be either: light dark, optional
 */
const Header = ({ title, level, subline, hero, theme }) => {
	const HeadingTag = `h${ level }`;

	return (
		<div className={`uikit-header${ hero ? ' uikit-header--hero' : '' }${ theme ? ` ${ themes[ theme ] }` : '' }`} role="banner">
			<HeadingTag className="uikit-header-heading">{ title }</HeadingTag>
			{ subline && <span className="uikit-header-subline">{ subline }</span> }
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.node.isRequired,
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	subline: PropTypes.node,
	hero: PropTypes.bool,
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
};

Header.defaultProps = {
	level: '1',
};

export default Header;
