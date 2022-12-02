import React from 'react';

export class DropDown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: 'teal',
          width: '300px',
          position: 'relative',
        }}
      >
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {this.state.visible && (
          <div
            style={{
              backgroundColor: 'yellow',
              width: '300px',
              position: 'absolute',
            }}
          >
            Modal
          </div>
        )}
      </div>
    );
  }
}
