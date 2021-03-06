import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Header from '../Header/Header';
import MeetupSelection from '../MeetupSection/MeetupSection'
import LaunchPage from '../LaunchPage/LaunchPage'
import DoorCounter from '../DoorCounter/DoorCounter'
import StatsPage from '../StatsPage/StatsPage'
import Footer from '../Footer/Footer'
import config from '../../config'
import Context from '../../context'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: [],
      stats: []
    };
  }

  componentDidMount() {
    this.fetchMeetups();
  }

  fetchMeetups() {
    const meetupUrl = `${config.API_ENDPOINT}/meetups`
    const meetupOptions = {
      method: 'GET', 
      headers: {
        'Content-type': 'application/json'
      }
    }

    fetch(meetupUrl, meetupOptions)
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        else {
          throw new Error('Something went wrong loading meetup options')
        }
      })
      .then(data => {
        //console.log(data)
        this.setState({meetups: data})
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  renderNavRoutes(){
    return (
      <>
        {['/', '/meetups'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={MeetupSelection}
          />
        ))}
        <Route path='/launch/:meet_id' component={LaunchPage}/>
        <Route path='/doorCount/:meet_id' component={DoorCounter}/>
        <Route path='/stats/:meet_id' component={StatsPage}/>
      </>
    )
  }

  render() {
    const value = {
      meetups: this.state.meetups,
    }
    
    //console.log(value)

    return(
      <Context.Provider value={value}>
      <div className="App">
        <header>
          <Header />
        </header>

        <nav className="AppNav">{this.renderNavRoutes()}</nav>

        <Footer />
      </div>
      </Context.Provider>
    );
  }
}

export default App;
