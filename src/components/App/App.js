import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Header from '../Header/Header';
import MeetupSelection from '../MeetupSection/MeetupSection'
import LaunchPage from '../LaunchPage/LaunchPage'
import NewMeeting from '../NewMeeting/NewMeeting'
import DoorCounter from '../DoorCounter/DoorCounter'
import IntroCounter from '../IntroCounter/IntroCounter'
import StatsPage from '../StatsPage/StatsPage'
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from '../../reducers/index'

const store = createStore(reducers)

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
      <Provider store={store}>
      <div className="App">
        <header>
          <Header />
        </header>

        <nav className="AppNav">{this.renderNavRoutes()}</nav>

        <footer>
          <p>Important Info</p>
        </footer>
      </div>
      </Provider>
    );
  }
}

export default App;
