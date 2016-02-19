import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>root</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
