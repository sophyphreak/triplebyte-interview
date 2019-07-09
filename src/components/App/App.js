import React, { Component } from 'react';
import { Row, Col, Card, CardText, CardTitle } from 'reactstrap';

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
        <Row>
          <Col sm={{ size: 3 }}>
            <Card>
              <CardTitle>Winnie</CardTitle>
              <CardText>salkjflkasdj</CardText>
            </Card>
          </Col>
          <Col sm={{ size: 3 }}>
            <Card>
              <CardTitle>Bob</CardTitle>
              <CardText>salkjflkasdj</CardText>
            </Card>
          </Col>
          <Col sm={{ size: 3 }}>
            <Card>
              <CardTitle>George</CardTitle>
              <CardText>salkjflkasdj</CardText>
            </Card>
          </Col>
          <Col sm={{ size: 3 }}>
            <Card>
              <CardTitle>A</CardTitle>
              <CardText>salkjflkasdj</CardText>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
