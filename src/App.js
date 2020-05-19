import React, { Component } from 'react';
import './App.css';

import Child from './Components/Child';

// For a Component there are 3 life cycles that take place
// 1) Loads or renders initally
// 2) Re-render based on any changes
// 3) Destroying the constructor
// Will run only once when it loads

class App extends Component {
  /*state = {
    name: 'Peter',
  };*/

  // Runs as the Component is rendered into view
  // The fist method that is called in the lifecycle
  // Want to initially create items such as state here
  constructor() {
    super();
    this.state = {
      name: 'John',
    };
    console.log('Constructor');
  }

  // The second method that runs as a result of the lifecycle
  // Could manipulate some items here after loading in from the constructor
  // Can update the state or other values based on props or local items
  // Can also handle global events
  componentWillMount() {
    if (window.innerWidth < 1500) {
      this.setState({ windowWidth: window.innerWidth });
    }
    console.log('Will Mount');
  }

  // After the elements are all rendered the DidMount method is called
  // Items are already rendered and ready for manipulation
  // Also is executed once all child components and its elements are finished rendering
  componentDidMount() {
    console.log('Did Mount');
  }

  componentWillReceiveProps() {
    console.log('Receive Props');
  }

  // Method allows to re-render the component based on any logic
  shouldComponentUpdate(nextProp, nextState) {
    console.log('Should Update');
    return true;
  }

  // Similar to Will Mount
  // Set variables based on state and prop
  // Don't run set state as it will loop renderings
  componentWillUpdate() {
    console.log('Will Update');
  }

  // Can set up 3rd party elements
  componentDidUpdate(prevProp, prevState) {
    console.log('Did Update');
  }

  // Calling this will remove the Component and un-render it
  // You will lose your state and other items kept in the component
  componentWillUnmount() {
    console.log('Unmount');
  }

  changeState() {
    this.setState({ name: 'Jill' });
  }

  unmountChild() {
    this.setState({ name: 'Bobby' });
  }

  // The next step would be to render the items of the Component
  // This is default for all Components in some form or another
  // Try to not call setState from within as it will get called on changing items
  render() {
    console.log('Render');

    // Can apply a condition to render based on state
    if (this.state.name === 'Bobby') {
      return <div>Nothing</div>;
    }
    return (
      <div className='App'>
        <h1>Hello...</h1>
        {this.state.name}
        <br />
        {this.state.windowWidth} px
        <br />
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount</button>
      </div>
    );
  }
}

export default App;
