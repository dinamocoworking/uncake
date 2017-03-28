import React, { Component } from 'react';
import fire from './fire';



import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }


  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);

    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }



  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }


  sendToken(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    
    //fire.database().ref('messages').push( this.inputEmail.value );
    console.log(this.inputEmail.value);
    
    
    this.inputEmail.value = ''; // <- clear the input
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <form onSubmit={this.sendToken.bind(this)}>

          {/*<input type="text" ref={ el => this.inputEl = el }/>
          <input type="submit"/>
          <ul>
            { 
              this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
            }
          </ul>
          */}


          <input type="email" ref={ el => this.inputEmail = el }/>
          <input type="submit"/>
        </form>


      </div>
    );
  }
}










export default App;
