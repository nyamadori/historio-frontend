import React from 'react';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>projects</h1>
        {this.props.children}
      </div>
    );
  }
}

export default ProjectIndex;
