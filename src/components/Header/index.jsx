import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.scss';
import { translate } from 'general/translation.js';

export default class Header extends React.Component {
  render() {
    return (
      <nav className={`navbar navbar-default ${classes.navbar}`}>
        <div className="navbar-header">
          <a className="navbar-brand">
            {translate('header.logo')}
          </a>
        </div>
        <div className="navbar-tools pull-right">
          <a onClick={() => { this.props.changeLanguage('en'); }}>EN</a>
          <a onClick={() => { this.props.changeLanguage('de'); }}>DE</a>
        </div>
      </nav>
    );
  }
}
Header.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};
