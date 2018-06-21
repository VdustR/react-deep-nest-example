import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Obj from './Obj';

class Arr extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.arrayOf(PropTypes.shape({
      obj: PropTypes.shape({
        name: PropTypes.string,
        val: PropTypes.number,
      }).isRequired,
    }).isRequired).isRequired,
  }
  onChange = (newObj, i) => {
    const { onChange, value } = this.props;
    onChange(value.map((obj, index) => {
      if (index === i) {
        return {
          ...obj,
          obj: newObj,
        };
      }

      return obj;
    }));
  }
  render() {
    const { value } = this.props;
    return (
      <tbody>
        {
          value.map((obj, i) => {
            const key = i;
            return (
              <Obj key={key} value={obj.obj} onChange={newObj => this.onChange(newObj, i)} />
            );
          })
        }
      </tbody>
    );
  }
}

export default Arr;
