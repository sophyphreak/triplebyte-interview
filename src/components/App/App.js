import React, { Component } from 'react';
import { Button, Row, Col, Card, CardText } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnOne: [],
      columnTwo: [],
      columnThree: [],
      columnFour: []
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(columnNumber) {
    const cardMessage = window.prompt('What do you want the card to say?');
    switch (columnNumber) {
      case 1:
        this.setState(prevState => {
          prevState.columnOne.push(cardMessage);
        });
        break;
      case 2:
        this.setState(prevState => {
          prevState.columnTwo.push(cardMessage);
        });
        break;
      case 3:
        this.setState(prevState => {
          prevState.columnThree.push(cardMessage);
        });
        break;
      case 4:
        this.setState(prevState => {
          prevState.columnFour.push(cardMessage);
        });
        break;
    }
    this.forceUpdate();
  }
  render() {
    return (
      <>
        <Row>
          <Col
            xs={{ size: 3 }}
            style={{ paddingRight: '12.5px', paddingLeft: '25px' }}
          >
            <h3
              style={{
                backgroundColor: '#8E6E95',
                color: 'white',
                textAlign: 'center'
              }}
            >
              Winnie
            </h3>
            {this.state.columnOne.map(cardText => (
              <Card>
                <CardText>{cardText}</CardText>
              </Card>
            ))}
            <Button onClick={() => this.onClick(1)}>Add a card</Button>
          </Col>
          <Col
            xs={{ size: 3 }}
            style={{ paddingLeft: '12.5px', paddingRight: '12.5px' }}
          >
            <h3
              style={{
                backgroundColor: '#39A59C',
                color: 'white',
                textAlign: 'center'
              }}
            >
              Winnie
            </h3>
            {this.state.columnTwo.map(cardText => (
              <Card>
                <CardText>{cardText}</CardText>
              </Card>
            ))}
            <Button onClick={() => this.onClick(2)}>Add a card</Button>
          </Col>
          <Col
            xs={{ size: 3 }}
            style={{ paddingRight: '12.5px', paddingLeft: '12.5px' }}
          >
            <h3
              style={{
                backgroundColor: '#344759',
                color: 'white',
                textAlign: 'center'
              }}
            >
              Winnie
            </h3>
            {this.state.columnThree.map(cardText => (
              <Card>
                <CardText>{cardText}</CardText>
              </Card>
            ))}
            <Button onClick={() => this.onClick(3)}>Add a card</Button>
          </Col>
          <Col
            xs={{ size: 3 }}
            style={{ paddingLeft: '12.5px', paddingRight: '25px' }}
          >
            <h3
              style={{
                backgroundColor: '#E8741E',
                color: 'white',
                textAlign: 'center'
              }}
            >
              Winnie
            </h3>
            {this.state.columnFour.map(cardText => (
              <Card>
                <CardText>{cardText}</CardText>
              </Card>
            ))}
            <Button onClick={() => this.onClick(4)}>Add a card</Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
