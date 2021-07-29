import "./App.css";
import { Switch, Route } from "react-router-dom";
import Game from "./components/pages/game";
import Login from "./components/pages/login";
import About from "./components/pages/about";
import Ranking from "./components/pages/ranking";
import Profile from "./components/pages/profile";
import authService from "./components/auth/auth-service";

import React, { Component } from "react";

export default class App extends Component {
  state = { user: null };

  componentDidMount() {
    if (!this.state.user) {
      authService
        .loggedin()
        .then((data) => {



          console.log('user',data)
          this.setState({ user:data })
          console.log(this.state.user)
          console.log(this.state)
        })
        .catch((err) => {
          this.setState({ user:false });
        });
    }
  }

  updateLoggedInUser = (userObj) => {
    this.setState({
      user: userObj
    })
  }




  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path="/" render={(props) => <Game user = {this.state.user} userInSession ={this.updateLoggedInUser} />} /> */}
          <Route exact path="/" render={() => <Game userInSession = {this.state.user} />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/signup" render={() => <div>SIGNUP</div>} />
          <Route exact path="/login" render={() => <Login  />} />
          <Route exact path="/logout" render={() => <div>LOGOUT</div>} />
          <Route exact path="/profile" render={() => <Profile/>} />
          <Route exact path="/stats" render={() => <div>STATS</div>} />
          <Route exact path="/ranking" render={() => <Ranking />} />
        </Switch>
      </div>
    );
  }
}
