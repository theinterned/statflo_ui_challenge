/*
 * ContactShow
 * Form to adda contact
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ContactShow extends Component {
  selectByID (id, contacts) {
    return contacts.find(c => c.id == id);
  };
  render() {
    const contactID = this.props.routeParams.id;
    const contact = this.selectByID(contactID, this.props.contacts);
    let title, content;
    if (contact) {
      const {name, phone_number, email_address, id} = contact;
      title = `${name}`;
      content = (
        <dl>
          <dt>Phone: </dt><dd>{phone_number}</dd>
          <dt>Email: </dt><dd>{email_address}</dd>
        </dl>
      );
    } else {
      title = `No Contact found with ID ${contactID}`;
    }
    return (
      <div>
        <header className="header clearfix">
          <div className="header__title">
            <h1 className="header__heading">Contacts</h1>
            <h2 className="header__subhead">{title}</h2>
          </div>
          <div className="header__toolbar">
            <Link to="/contacts" className="back button" >Back to list</Link>
          </div>
        </header>
        <main>{content}</main>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    contacts: state.contacts
  };
}

export default connect(select)(ContactShow);
