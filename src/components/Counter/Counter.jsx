import React from 'react';

export class Counter extends React.Component {
  static defaultProps = {
    firstValue: 0,
  };
  state = {
    value: this.props.firstValue,
  };

  onClickAdd = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  onClickTake = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <div>
          <button type="button" onClick={this.onClickAdd}>
            +1
          </button>
          <button type="button" onClick={this.onClickTake}>
            -1
          </button>
        </div>
      </div>
    );
  }
}
