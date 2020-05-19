import React, { Component } from 'react';

class Child extends Component {
  // Runs as the Component is rendered into view
  // The fist method that is called in the lifecycle
  // Want to initially create items such as state here
  constructor() {
    super();
    console.log('Child Constructor');
  }

  // The second method that runs as a result of the lifecycle
  // Could manipulate some items here after loading in from the constructor
  // Can update the state or other values based on props or local items
  // Can also handle global events
  componentWillMount() {
    console.log('Child Will Mount');
  }

  // After the elements are all rendered the DidMount method is called
  // Items are already rendered and ready for manipulation
  componentDidMount() {
    console.log('Child Did Mount');
  }

  // This method executes when the state of the props changes
  // The changes happen in the parent component
  // Captures the updated state as a result of the changed prop(s)
  componentWillReceiveProps() {
    console.log('Child Receive Props');
  }

  // Setting the return to true or false determines if the Component will re-render or not
  shouldComponentUpdate(nextProp, nextState) {
    console.log('Child Should Update');
    return true;
  }

  componentWillUpdate() {
    console.log('Child Will Update');
  }

  componentDidUpdate() {
    console.log('Child Did Update');
  }

  componentWillUnmount() {
    console.log('Child Unmount');
  }

  // The next step would be to render the items of the Component
  // This is default for all Components in some form or another
  // Try to not call setState from within as it will get called on changing items
  render() {
    console.log('Child Render');
    return (
      <div className='App'>
        <h1>Hello...{this.props.name}</h1>
      </div>
    );
  }
}

export default Child;
