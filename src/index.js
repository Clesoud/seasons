import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // specially named function, specific to JavaScript, NOT specific to React or JSX is... constructor()
  constructor(props) { // first function that will be called anytime an instance of this class is created.
    super(props); // must call super in constructor function. This stops our constructor function from overriding React.Commponent's constructor function ((super is a reference to the parent's constructor function))
    
    this.state = { lat: null }; //setting the state object. this is the ONLY time we do direct assignment to this.state!!

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we call setState to update the state!!
        this.setState({ lat: position.coords.latitude });
        // we did NOT do this.state.lat = pos !! only do this when initializing state in constructor function
      },
      err => console.log(err)
    );
  }

  // React says we have to define render
  render() {


    return <div>Lattitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
