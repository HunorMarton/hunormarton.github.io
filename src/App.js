import React from 'react';
import * as techs from './constants/techTypes';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default class Root extends React.Component {
  state = {
    filter: techs.ALL,
  };

  setFilter = filter => this.setState({ filter });

  render() {
    return (
      <div id="container">
        <Navigation />

        <Header />
        <Skills filter={this.state.filter} setFilter={this.setFilter} />
        <Portfolio filter={this.state.filter} />
        <Resume />
        <Contact />
      </div>
    );
  }
}
