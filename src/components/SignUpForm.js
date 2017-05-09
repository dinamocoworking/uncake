import React, { Component } from 'react';
import fire from '../fire';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
  }

  createUser(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    //fire.database().ref('messages').push( this.inputElEmail.value + '' + this.inputElPass.value);
    fire.auth().createUserWithEmailAndPassword(this.inputElEmail.value, this.inputElPass.value).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
      // ...
    });
    this.inputElEmail.value = ''; // <- clear the input
    this.inputElPass.value = '';
  }

  render() {
    return (
        <form onSubmit={this.createUser.bind(this)}>
          <input type="email" ref={ el => this.inputElEmail = el }/>
          <input type="password" ref={ el => this.inputElPass = el }/>
          <input type="submit"/>
        </form>
    )
  }
}

module.exports = SignUpForm;