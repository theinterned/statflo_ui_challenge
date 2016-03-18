/*
 * ContactList
 * This is the first thing users see of our App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import List from '../elements/List.react'

const renderContactItem = (item) => {
  return <li>{item.name}</li>;
}

class ContactList extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const contacts = this.props.data.contactReducer;
    console.log(renderContactItem, contacts);
    return (
      <div>
        <header className="contact_list__toolbar">
          <h1>Contacts!</h1>
          <button className="contact__add" type="button" onChange={(evt) => {}}>Add a contact</button>
        </header>
        <List items={contacts} renderItem={renderContactItem} />
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(ContactList);
