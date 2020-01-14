import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {
  // // specially named function, specific to JavaScript, NOT specific to React or JSX is... constructor()
  // constructor(props) { // first function that will be called anytime an instance of this class is created.
  //   super(props); // must call super in constructor function. This stops our constructor function from overriding React.Commponent's constructor function ((super is a reference to the parent's constructor function))
    
  //   this.state = { lat: null, errorMessage: '' }; //initializing the state object. this is the ONLY time we do direct assignment to this.state!!
  //    // the other way to initialize state. more common.
  // }

  state = { lat: null, errorMessage: '' }; // the more modern way to set state. No constructor function needed.

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we call setState to update the state!
        this.setState({ lat: position.coords.latitude });
        // we did NOT do this.state.lat = pos !! only directly set state when initializing state in constructor function
      },
      err => { 
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: { this.state.errorMessage }</div>;
    } 
    
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={ this.state.lat } />
    } 
    
    // if neither of the other two if statements work...
    return <LoadingSpinner />;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
