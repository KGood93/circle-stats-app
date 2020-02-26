import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Header from '../Header/Header';
import MeetupSelection from '../MeetupSection/MeetupSection'
import LaunchPage from '../LaunchPage/LaunchPage'
import DoorCounter from '../DoorCounter/DoorCounter'
import StatsPage from '../StatsPage/StatsPage'
import './App.css';

class App extends Component {

  renderNavRoutes(){
    return (
      <>
        {['/', '/meetupSelection'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={MeetupSelection}
          />
        ))}
        <Route path='/launch' component={LaunchPage}/>
        <Route path='/doorCount' component={DoorCounter}/>
        <Route path='/stats' component={StatsPage}/>
      </>
    )
  }

  render() {
    return(
      <div className="App">
        <header>
          <Header />
        </header>

        <nav className="AppNav">{this.renderNavRoutes()}</nav>

        <footer>
          <p>Important Info</p>
        </footer>
      </div>
    );
  }
}

export default App;
