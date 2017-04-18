import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';

class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div id="container">
          <Intro />
          <Skills />
          <Portfolio />
        </div>
      </Provider>
    );
  }
}


Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
