/*
 * ContactNew
 * Form to adda contact
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Control from '../elements/Control.react';

class ContactNew extends Component {
  render() {
    const dispatch = this.props.dispatch;
    // const contacts = this.props.contacts;
    console.log('new', this.props);
    return (
      <div>
        <header className="toolbar">
          <h1>Add a contact</h1>
          <div className="toolbar__actions">
            <Link to="/contacts" className="cancel button" >Cancel</Link>
            <Link to="/contact/new" className="contact__add button" >Save</Link>
          </div>
        </header>
        <form>
          <Control att="name" label="Name" type="text" />
          <Control att="phone_number" label="Phone" type="tel" />
          <Control att="email_address" label="Email" type="email" />
        </form>
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    contacts: state.contacts
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(ContactNew);
