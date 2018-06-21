import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Obj extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.shape({
      name: PropTypes.string.isRequired,
      val: PropTypes.number.isRequired,
    }).isRequired,
  }
  onNameChange = (event) => {
    const {
      value,
      onChange,
    } = this.props;
    const {
      value: name,
    } = event.target;
    onChange({
      ...value,
      name,
    });
  }
  onValChange = (event) => {
    const {
      value,
      onChange,
    } = this.props;
    let {
      value: val,
    } = event.target;
    val = Number(val);
    if (Number.isNaN(val)) {
      val = 0;
    }
    onChange({
      ...value,
      val,
    });
  }
  render() {
    const { value } = this.props;
    return (
      <tr>
        <td>
          <input value={value.name} onChange={this.onNameChange} />
        </td>
        <td>
          <input type="number" value={value.val} onChange={this.onValChange} />
        </td>
      </tr>
    );
  }
}

export default Obj;
