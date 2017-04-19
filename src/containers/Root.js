import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div id="container">
          <Navigation />

          <Skills />
          <Portfolio />
          <Resume />
          <Contact />
        </div>
      </Provider>
    );
  }
}


Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
