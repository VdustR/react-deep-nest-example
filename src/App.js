import React, { Component } from 'react';
import Data from './Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outer: {
        noData: 'no data will not be changed',
        data: {
          noArr: 'no arr will not be changed',
          arr: [{
            noObj: 'no obj will not be changed',
            obj: {
              name: 'a',
              val: 2,
            },
          }, {
            noObj: 'no obj will not be changed',
            obj: {
              name: 'b',
              val: 2,
            },
          }, {
            noObj: 'no obj will not be changed',
            obj: {
              name: 'c',
              val: 3,
            },
          }, {
            noObj: 'no obj will not be changed',
            obj: {
              name: 'd',
              val: 4,
            },
          }],
        },
      },
    };
  }
  onChange = (data) => {
    const { outer } = this.state;
    this.setState({
      outer: {
        ...outer,
        data,
      },
    });
  }
  render() {
    const { outer } = this.state;
    return (
      <div>
        <div>{outer.noData}</div>
        <Data value={outer.data} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
