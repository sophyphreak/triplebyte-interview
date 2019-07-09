import React, { Component } from 'react';
import { Row, Col, Card, CardText } from 'reactstrap';

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
            <h3>Winnie</h3>
            <Card>
              <CardText>salkjflkasdj</CardText>
            </Card>
            <Card>
              <CardText>salkjflkasdj</CardText>
            </Card>
          </Col>
          <Col sm={{ size: 3 }}>
            <h3>Winnie</h3>
            <Card>
              <CardText>salkjflkasdj</CardText>
            </Card>
            <Card>
              <CardText>salkjflkasdj</CardText>
            </Card>
          </Col>
          <Col sm={{ size: 3 }}>
            <h3>Winnie</h3>
            <Card>
              <CardText>salkjflkasdj</CardText>
            </Card>
            <Card>
              <CardText>salkjflkasdj</CardText>
            </Card>
          </Col>
          <Col sm={{ size: 3 }}>
            <h3>Winnie</h3>
            <Card>
              <CardText>salkjflkasdj</CardText>
            </Card>
            <Card>
              <CardText>salkjflkasdj</CardText>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
