import React, { Component } from 'react';
import Header from './components/Header';
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
        <Route path='/newEvent' component={NewEvent}/>
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
