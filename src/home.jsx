import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>home</h1>
        <Link to="/projects">プロジェクト一覧</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
