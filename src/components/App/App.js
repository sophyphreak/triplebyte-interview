import React, { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const pressed = true;
    this.setState({ pressed });
  }
  render() {
    return (
      <>
        <Button color="primary" onClick={() => this.onClick()}>
          Press me
        </Button>
        {this.state.pressed && <h3>the button has indeed been pressed!!</h3>}
      </>
    );
  }
}

export default App;
