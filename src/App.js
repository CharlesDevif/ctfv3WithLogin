import React from 'react';
import axios from 'axios';
import './App.css';
//test//////
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      bio: '',
      isAdmin: false
    };
  }

  handleLogin = () => {
    axios.post('http://localhost:3001/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      if (response.data.success) {
        this.setState({ bio: response.data.bio, isAdmin: response.data.isAdmin });
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CTF Challenge</h1>
          <input type="text" onChange={e => this.setState({ username: e.target.value })} placeholder="Username" />
          <input type="password" onChange={e => this.setState({ password: e.target.value })} placeholder="Password" />
          <button onClick={this.handleLogin}>Login</button>
          {this.state.bio && <p dangerouslySetInnerHTML={{ __html: this.state.bio }} />}
          {this.state.isAdmin && <p>Flag: CTF React_and_Express_are_cool</p>}
        </header>
      </div>
    );
  }
}

export default App;
