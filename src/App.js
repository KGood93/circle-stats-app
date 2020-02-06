import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Header from './components/Header/Header';
import MeetupSelection from './components/MeetupSection/MeetupSection'
import LaunchPage from './components/LaunchPage/LaunchPage'
import NewMeeting from './components/NewMeeting/NewMeeting'
import DoorCounter from './components/DoorCounter/DoorCounter'
import IntroCounter from './components/IntroCounter/IntroCounter'
import StatsPage from './components/StatsPage/StatsPage'
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
        <Route path='/newMeeting' component={NewMeeting}/>
        <Route path='/doorCount' component={DoorCounter}/>
        <Route path='/introCount' component={IntroCounter}/>
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
