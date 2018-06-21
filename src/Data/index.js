import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Arr from './Arr';

class Data extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.shape({
      arr: PropTypes.arrayOf(PropTypes.shape({
        obj: PropTypes.shape({
          name: PropTypes.string.isRequired,
          val: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired).isRequired,
    }).isRequired,
  }
  onChange = (arr) => {
    const {
      onChange,
      value,
    } = this.props;
    onChange({
      ...value,
      arr,
    });
  }
  render() {
    const {
      value,
    } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>val</th>
          </tr>
          <tr>
            <th colSpan="2">{value.noArr}</th>
          </tr>
        </thead>
        <Arr value={value.arr} onChange={this.onChange} />
      </table>
    );
  }
}

export default Data;
